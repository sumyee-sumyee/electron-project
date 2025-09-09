'use strict'

import store from './renderer/store/index'

// import * as DataServe from './Serve/DataServe'
import * as SystemServe from './Serve/SystemServe'

import { ipcMain, dialog } from 'electron'
import {
  IPC_CHANNEL_STOP_DOWNLOAD,
  IPC_CHANNEL_REFRESH_COM_LIST,
  IPC_CHANNEL_START_CONNECT,
  IPC_CHANNEL_STORE_FILE_DIALOG,
  APP_EVENT_CONNECT_NG,
  APP_REPORT_DIALOG_PROMPT,
  IPC_CHANNEL_EEPROM_MONITOR,

  APP_EVENT_INIT_XLSX,
  APP_EVENT_CLOSE_XLSX,
  APP_EVENT_OPEN_XLSX,
  APP_EVENT_WRITE_XLSX,
  APP_EVENT_STOP_XLSX, 
  APP_EVENT_COM_LIST,
} from './renderer/js/constants/ElectronConstants'
import {APP_EVENT_STORE_FILE_DIALOG} from './renderer/js/constants/IndoorConstants'
// import SerialPort from 'serialport'
const SP = require('serialport')
const SerialPort = SP.SerialPort
const crc = require('crc');
let ComPort = null
var InParam = {
  Instance  : null,  // 内机实例
  RecvBuffer: [],    // 接受缓冲
  RecvTimer : null,   // 接受超时定时器
}


export function ComIsConnect () {
  return null == ComPort ? false : ComPort.isOpen;
}


export function UartSendBuffer (buffer, id) {
  if (ComPort != null && ComPort.isOpen && buffer !== null) {
    ComPort.write(buffer, function (err) {
      if (err) {
        SendMsg('APP_EVENT_CONNECT_NG', 3)
        return console.log('Error on UartSendBuffer: ', err.message)
      }
      // console.log('UartSendBuffer Sent ', id)
    })
  } else {
    //SendMsg('APP_EVENT_CONNECT_NG', 4)
    console.log('UartSendBuffer Port isOpen Fail or buffer == null')
  }
}



function ModuleBusUartRead (data) {
  let recvData    
  recvData = ComPort.read()

  if (recvData != null) {
    InParam.RecvBuffer = InParam.RecvBuffer.concat( Array.from(recvData));

      if (null != InParam.RecvTimer) {
        clearTimeout( InParam.RecvTimer); 
      }

      //获得一包完整的数据
      InParam.RecvTimer = setTimeout(() => {
        InParam.RecvTimer = null
        InParam.Instance.UartRecvHandle(InParam.RecvBuffer);
        InParam.RecvBuffer = [];
    }, 50);
  }

}


function SendUartDataHandler () {

  let cmdDataBuffer = [0x01, 0x04, 0x10, 0x03, 0x00, 0x8C];
  let crc16 = crc.crc16(cmdDataBuffer, 0xFFFF);
  let cmdUartSendBuffer = cmdDataBuffer.concat((crc16 & 0xff)).concat(((crc16 & 0xff00) >> 8));

  UartSendBuffer(cmdUartSendBuffer , 0);
}


function SendMsg (id, data) {
  webContents.send(id, data)
}


let ProgStage = 0
//let CurrentPackageNumber = 0

let TotalPackages = []
let PackageLength = 32
let PackageSum = 0

let SendMsgCtrl = {
  Msg : [],
  IdleMsg : [],
  MsgType : 'no-send-mode',
  ReportNumber : 0,
  TryCount : 0,
  TimeHandler : null,
}


let BurnEepromCtrl = {
  EepromData: [],
  EepromMaxAddr: 0,
  EepromAddr: 0,
}





//停止连接串口
function StopConnect (name) {
  if (ComPort !== null) {
    // console.log('Hit', ComPort)
    ComPort.close(err => {
      if (err) return console.log('Close Error: ', err.message)
      ComPort = null
    })
  }

  SendMsg('APP_EVENT_CHANGE_MODE', true)
}


function StartConnect (name) {
  if (name == null) {
    SendMsg(APP_EVENT_CONNECT_NG, 0);
    return;
  }

  let BaudRate, DataBits, StopBits;
  if (store.state.SystemData.MonitorMode === 'outdoor') {
    BaudRate = 2000000;
    DataBits = 8;
    StopBits = 1;
  } else {
    //console.log("Change Mode Error!");
  }
  console.log(name, 'name!!!')
  ComPort = new SerialPort({
    path: name,
    baudRate: BaudRate,
    dataBits: DataBits,
    stopBits: StopBits,
    parity: 'none'
  }, function (err) {
    if (err) {
      SendMsg(APP_EVENT_CONNECT_NG, 0)
      ComPort = null
       console.log('Open Error: ', err.message)
      return
    }


    ProgStage = 0
    if (store.state.SystemData.MonitorMode === 'outdoor') {
      ComPort.on('readable', ModuleBusUartRead)   //开启水冷机组监控监听
    } else {
      console.log("Change Mode Error!!");   
    }

  })
}

let refreshLock = false;
function UartRefreshList () {
  if (refreshLock) return; // 防止重复调用
  refreshLock = true;
  let comList = [];
  SerialPort.list().then(ports => {
    ports.forEach(element => {
      comList.push({
        value: element.path,
        label: element.path
      });
    });
    console.log(comList, 'comList');
    store.dispatch('SetComList', comList);
    if (webContents) {
      webContents.send('APP_EVENT_COM_LIST', comList);
    }
    refreshLock = false;
  }).catch(err => {
    console.log('Error ports', err);
    refreshLock = false;
  });
}
// function UartRefreshList () {
//   // console.log('Hit UartRefreshList')
//   let comList = []
//   // 新用法
//   SerialPort.list().then(ports=>{
//     // console.log(ports, 'ports')
//     ports.forEach(element => {
//       comList.push({
//         value: element.path,
//         label: element.path
//       })
//     })  
//     console.log(comList, 'comList')
//     store.dispatch('SetComList', comList)
//   }).catch(err=>{
//     console.log('Error ports', ports)
//   })

//   // 旧用法
//   // SerialPort.list((err, ports) => {
//   //   let comList = []
//   //   if (err) {
//   //     console.log('Error ports', ports)
//   //   } else {
//   //     console.log('ports', ports)
//   //     ports.forEach(element => {
//   //       comList.push({
//   //         value: element.comName,
//   //         label: element.comName
//   //       })
//   //     })  
//   //     store.dispatch('SetComList', comList)
//   //   }
//   // })
// }





function UserSengMsgToAir () {  
    if (SendMsgCtrl.TryCount < 5) {
        SendMsgCtrl.TimeHandler = setTimeout(() => {
            SendMsgCtrl.TimeHandler= null    
            if (SendMsgCtrl.Msg != null)  {
              UartSendBuffer(SendMsgCtrl.Msg, 0);
              //SendMsgCtrl.TryCount++;
            }
        }, 45)
    } else {
      return
    }
} 


let webContents
export default function setIPCChannels (mainWindow) {
    store.dispatch('CleanFilelist') 
    UartRefreshList()
    
    InParam.Instance = new SystemServe.IPCSystemWin(mainWindow);
    webContents = mainWindow.webContents

    SendMsgCtrl.Msg = null
    SendMsgCtrl.IdleMsg = null
    StopConnect()

    //串口列表
    ipcMain.on(IPC_CHANNEL_REFRESH_COM_LIST, (event, arg) => {
        UartRefreshList()
    })

    //停止串口
    ipcMain.on(IPC_CHANNEL_STOP_DOWNLOAD, (event, arg) => {
        StopConnect()
    })


  //保存文件
//   ipcMain.on(IPC_CHANNEL_STORE_FILE_DIALOG, (event) => {
//     let TimeData = new Date().toLocaleString().replace(/ /g, '')
//     TimeData = TimeData.replace(/\//g, '-')
//     var xlsxTital = TimeData.replace(/\:/g, '-') + '--' + store.state.SystemData.comValue
//     dialog.showSaveDialog({
//       defaultPath: './' + xlsxTital +'--Data.csv',
//       title: '数据另存为',
//       filters: [
//         { name: 'CSV', extensions: ['csv'] }
//       ]
//     }, files => {
//       if (files) {
//         console.log(files)
//         if (store.state.SystemData.MonitorMode=== 'outdoor') {
//             console.log("Save File Test");
//           store.dispatch('SetOutCsvFilePath', files)
//         } else {
//           store.dispatch('SetOutCsvFilePath', null)
//           store.dispatch('SetCsvFilePath', null)
//         }
        
//       }
//     }) 
//   })
    ipcMain.on(IPC_CHANNEL_STORE_FILE_DIALOG, (event) => {
        let TimeData = new Date().toLocaleString().replace(/ /g, '')
        TimeData = TimeData.replace(/\//g, '-')
        var xlsxTital = TimeData.replace(/\:/g, '-') + '--' + store.state.SystemData.comValue
        dialog.showSaveDialog({
            defaultPath: './' + xlsxTital + '--Data.csv',
            title: '数据另存为',
            filters: [
                { name: 'CSV', extensions: ['csv'] }
            ]
        }).then(result => {
            if (!result.canceled && result.filePath) {
                console.log(result.filePath)
                // 直接通过 Vuex 更新文件名，前端自动响应
                //store.dispatch('SetOutCsvFilePath', result.filePath)
                mainWindow.webContents.send('APP_EVENT_STORE_FILE_DIALOG', result.filePath)
            }
        }).catch(err => {
            console.log('SaveDialog Error:', err)
        })
    })

  //初始化表格
  ipcMain.on(APP_EVENT_INIT_XLSX, (event, arg) => {
    //xlsx已经初始化
    SendMsg(APP_EVENT_OPEN_XLSX, 0)
  })


  ipcMain.on(APP_EVENT_WRITE_XLSX, (event, arg) => {
      writeXls(Data, sheet, xlsxFile, 0);
  })

 

  //监控EEPROM
  ipcMain.on(IPC_CHANNEL_EEPROM_MONITOR, (event, arg) => {
   // console.log("arg.addr >>", arg.addr)
   // console.log("arg.type >>", arg.type)
     if (!ComIsConnect()) {
         SendMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'no serial'})
         return null
     } else {
        SendMsgCtrl.Msg = null
        //SendMsgCtrl.IdleMsg = OutDataHandler.CreateReadRamCmdPkg(arg.addr, arg.type)
        console.log('MonitorEEPROMData>>>>', SendMsgCtrl.IdleMsg)
     }
  })


  //关闭EXcel
  ipcMain.on(APP_EVENT_CLOSE_XLSX, (event, arg) => {
      SendMsg(APP_EVENT_STOP_XLSX, arg)
  })

 
  
  // 开始串口连接
  ipcMain.on(IPC_CHANNEL_START_CONNECT, (event) => {
    console.log("open ---------",ComPort);
    if (ComPort !== null) {
      console.log('Hit', ComPort)
      ComPort.close(err => {
        if (err) return console.log('Close Error: ', err.message)
        ComPort = null
        StartConnect(store.state.SystemData.comValue)
      })
    } else {
      console.log(store.state.SystemData.comValue,'store.state.SystemData.comValue')
      StartConnect(store.state.SystemData.comValue)
    }
  })
}
