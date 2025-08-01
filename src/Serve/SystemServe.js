
import { ipcMain, dialog, fs } from 'electron'
import store from '../renderer/store'

import { UartSendBuffer, ComIsConnect } from '../setIPCChannels'
//import { MyDate } from "../../renderer/utils/MyDate";
//import * as Utils from '../Utils/Utils';

//import store from '../../renderer/store'
import { Queue } from '../Utils/Queue';
// import * as DataServe from './DataServe'
import * as IndoorIPCMsg from '../renderer/js/constants/IndoorConstants'
import {
    APP_REPORT_DIALOG_PROMPT,
  } from '../renderer/js/constants/ElectronConstants'
// import { log } from 'console';
const crc = require('crc');

export class IPCSystemWin{
    constructor (mainWindows) {
        this.windowsHandle = mainWindows.webContents;
        // this.pkgProto = new DataServe.InData(DataServe.SPLIT_AIR_CONDITION);
        this.sendMsgQueue = new Queue();
        this.sendMsgTimer = null;

        
        /* 消息控制对象 */
        this.MessageCtrl = {
            op_type: "idle",            // 操作类型
            SetTimeoutNum: 0,
            trySend0x06Cnt: 0,                  // 重复次数
            trySend0x10Cnt: 0,
            Recv0x10CmdData: 0,
            Message0x06Buffer:[],
            Message0x10Buffer1:[],
            Message0x10Buffer2:[],
            isBusy: false,              // 是否正在进行一次烧写
            isInitParam: false,         // 是否读取初始化参数

            WatchAddr1: 0,
            WatchAddr2: 0,
            WatchAddr3: 0,
            // WatchAddr4: 0,
            // WatchAddr5: 0,
            Watchdata:[],
        }


        this._setIPCListenOn();         //监控界面发送过来的信息
        this._SerialSendService();      //串口发送数据函数

    }

   

    /* 串口数据处理函数，在后端进行数据包的校验，校验没有问题，在发给前端进行协议解析 */
    UartRecvHandle (recvBuff) {
      
        /* 进行数据处理 */
        let RecvDataArray = recvBuff;

  
        RecvDataArray = RecvDataArray.slice(0, RecvDataArray.length - 2);
        let crc16 = crc.crc16(RecvDataArray, 0xFFFF);

        if (recvBuff[recvBuff.length - 1] == ((crc16 & 0xff00) >> 8) && recvBuff[recvBuff.length - 2] == (crc16 & 0xff))
        {
            switch (this.MessageCtrl.op_type)
            {
                case 'read_param':
                    if (recvBuff.length <= 50)
                    {
                        this._sendIPCMsg(IndoorIPCMsg.APP_CMD_GET_SYSTEM_DATA, recvBuff);
                    }
                    break;

                case 'write_0x06_cmd':
                    if (recvBuff[1] === 0x06)
                    {
                        this.MessageCtrl.trySend0x06Cnt = 0;
                        this._sendIPCMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'send ok'})
                        this.MessageCtrl.op_type = 'idle'
                        console.log("send data ok");
                    }
                    else 
                    {
                        this.sendMsgQueue.Enqueue(this.MessageCtrl.Message0x06Buffer);
                        if (++this.MessageCtrl.trySend0x06Cnt > 3)
                        {
                            this.MessageCtrl.trySend0x06Cnt = 0;
                            this._sendIPCMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'send ng'})
                            this.MessageCtrl.op_type = 'idle'
                        }

                        console.log("send data ng");
                       
                    }
                    break;

                case 'write_0x10_cmd':
                    if (++this.MessageCtrl.Recv0x10CmdData >= 2)
                    {
                        this.MessageCtrl.Recv0x10CmdData = 0;
                        
                        if (recvBuff[1] === 0x10)
                        {
                            this.MessageCtrl.trySend0x10Cnt = 0;
                            this._sendIPCMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'send ok'})
                            this.MessageCtrl.op_type = 'idle'
                        }
                        else 
                        {
                            this.sendMsgQueue.Enqueue(this.MessageCtrl.Message0x10Buffer1);
                            this.sendMsgQueue.Enqueue(this.MessageCtrl.Message0x10Buffer2);
                            if (++this.MessageCtrl.trySend0x10Cnt > 3)
                            {
                                this.MessageCtrl.trySend0x10Cnt = 0;
                                this._sendIPCMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'send ng'})
                                this.MessageCtrl.op_type = 'idle'
                            }
                        }
                    }
                    break;
                
                case 'idle':
                    if (recvBuff.length <= 50)
                    {
                       
                        switch (this.MessageCtrl.SetTimeoutNum)
                        {
                            case 0:
                                // console.log("0>>", recvBuff);
                                break;
                            case 1:

                                this.MessageCtrl.Watchdata[0] = recvBuff[3];
                                this.MessageCtrl.Watchdata[1] = recvBuff[4];
                               
                                break;
                            case 2:
                                this.MessageCtrl.Watchdata[2] = recvBuff[3];
                                this.MessageCtrl.Watchdata[3] = recvBuff[4];
                              
                                break;
                            case 3:
                                this.MessageCtrl.Watchdata[4] = recvBuff[3];
                                this.MessageCtrl.Watchdata[5] = recvBuff[4];
                                this._sendIPCMsg(IndoorIPCMsg.APP_WATCH_DATA_REFRESH, this.MessageCtrl.Watchdata);
                                // console.log("Watchdata>>", this.MessageCtrl.Watchdata);
                                break;
                            default:
                                break;
                        }

                       
                    }
                    else 
                    {
                        this._sendIPCMsg(IndoorIPCMsg.APP_REPORT_UART_RECV_DATA, recvBuff);
                        //console.log("big data ------------------");
                    }
                    break;

                default:
                    break;
            }
        }
        else 
        {
            if (this.MessageCtrl.op_type === 'write_0x06_cmd') 
            {
                this.sendMsgQueue.Enqueue(this.MessageCtrl.Message0x06Buffer);
                if (++this.MessageCtrl.trySend0x06Cnt > 3)
                {
                    this.MessageCtrl.trySend0x06Cnt = 0;
                    this.MessageCtrl.op_type === 'idle'
                    this._sendIPCMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'send ng'})
                }
            }
            else if (this.MessageCtrl.op_type === 'write_0x10_cmd')
            {
                this.sendMsgQueue.Enqueue(this.MessageCtrl.Message0x10Buffer1);
                this.sendMsgQueue.Enqueue(this.MessageCtrl.Message0x10Buffer2);
                if (++this.MessageCtrl.trySend0x10Cnt > 3)
                {
                    this.MessageCtrl.trySend0x10Cnt = 0;
                    this._sendIPCMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'send ng'})
                    this.MessageCtrl.op_type = 'idle'
                }
            }    
        }
    }

   
    /**
     * 设置IPC监听
     */
    _setIPCListenOn() {

        //发送单个06写数据指令
        ipcMain.on(IndoorIPCMsg.APP_SEND_SIGNAL_DATA_06_CMD, (evnt, args) => {
            console.log(args);

            let tmpBuffer = [];
            tmpBuffer[0] = 0x01;
            tmpBuffer[1] = 0x06;
            tmpBuffer[2] = (args.Address & 0xFF00) >> 8;
            tmpBuffer[3] = args.Address & 0x00FF;
            tmpBuffer[4] = (args.Data & 0xFF00) >> 8;
            tmpBuffer[5] = args.Data & 0x00FF;
            let crc16 = crc.crc16(tmpBuffer, 0xFFFF);
            let cmdUartSendBuffer = tmpBuffer.concat((crc16 & 0xff)).concat(((crc16 & 0xff00) >> 8));

            this.MessageCtrl.Message0x06Buffer = cmdUartSendBuffer;
            this.sendMsgQueue.Enqueue(cmdUartSendBuffer);  
            this.MessageCtrl.op_type = 'write_0x06_cmd';

          //  console.log("this.MessageCtrl.Message0x06Buffer:", this.MessageCtrl.Message0x06Buffer);
            
        });

        //发送写系统参数
        ipcMain.on(IndoorIPCMsg.APP_CMD_SET_WIRTE_SYSTEM_DATA, (evnt, args) => {
           
            // console.log("write", args);
            let tmpBuffer = [];
            tmpBuffer[0] = 0x01;
            tmpBuffer[1] = 0x06;
            tmpBuffer[2] = (args.Address & 0xFF00) >> 8;
            tmpBuffer[3] = args.Address & 0x00FF;
            tmpBuffer[4] = (args.Data & 0xFF00) >> 8;
            tmpBuffer[5] = args.Data & 0x00FF;
            let crc16 = crc.crc16(tmpBuffer, 0xFFFF);
            let cmdUartSendBuffer = tmpBuffer.concat((crc16 & 0xff)).concat(((crc16 & 0xff00) >> 8));

            this.MessageCtrl.Message0x06Buffer = cmdUartSendBuffer;
            this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
            this.MessageCtrl.op_type = 'write_0x06_cmd';  
        });

         //监控数据
         ipcMain.on(IndoorIPCMsg.APP_WATCH_DATA, (evnt, args) => {
           
            // console.log("args", args);

            this.MessageCtrl.WatchAddr1 = args.addr[0];
            this.MessageCtrl.WatchAddr2 = args.addr[1];
            this.MessageCtrl.WatchAddr3 = args.addr[2];
            this.MessageCtrl.WatchAddr4 = args.addr[3];
            this.MessageCtrl.WatchAddr5 = args.addr[4];


            // console.log("this.MessageCtrl.WatchAddr1", this.MessageCtrl.WatchAddr1);
            // console.log("this.MessageCtrl.WatchAddr2", this.MessageCtrl.WatchAddr2);
            // console.log("this.MessageCtrl.WatchAddr3", this.MessageCtrl.WatchAddr3);
            // console.log("this.MessageCtrl.WatchAddr4", this.MessageCtrl.WatchAddr4);
            // console.log("this.MessageCtrl.WatchAddr5", this.MessageCtrl.WatchAddr5);

        });

        

        //发送读系统参数
        ipcMain.on(IndoorIPCMsg.APP_CMD_SET_READ_SYSTEM_DATA, (evnt, args) => {
            let tmpBuffer = [];
            tmpBuffer[0] = 0x01;
            tmpBuffer[1] = 0x03;
            tmpBuffer[2] = (args.Address & 0xFF00) >> 8;
            tmpBuffer[3] = args.Address & 0x00FF;
            tmpBuffer[4] = 0x00;
            tmpBuffer[5] = 0x01;
            let crc16 = crc.crc16(tmpBuffer, 0xFFFF);
            let cmdUartSendBuffer = tmpBuffer.concat((crc16 & 0xff)).concat(((crc16 & 0xff00) >> 8));

            this.sendMsgQueue.Enqueue(cmdUartSendBuffer);   
            this.MessageCtrl.op_type = 'read_param'
        });


        // 设置修改手动参数
        ipcMain.on(IndoorIPCMsg.APP_CMD_SET_MANUAL_DATA, (evnt, args) => {
            console.log(args);
            let tmpBuffer1 = [];

            tmpBuffer1[0] = 0x01;
            tmpBuffer1[1] = 0x10;
            tmpBuffer1[2] = 0x00;
            tmpBuffer1[3] = 0xC4;
            tmpBuffer1[4] = 0x00;
            tmpBuffer1[5] = 0x0B;
            tmpBuffer1[6] = 22;

            for (var i = 0; i < 10; i++) {
                tmpBuffer1[7 + i*2] = (args.Data[i] & 0xFF00) >> 8;
                tmpBuffer1[8 + i*2] = args.Data[i] & 0x00FF;
            } 
            tmpBuffer1[7 + (20)] = (args.Manual & 0xFF00) >> 8;
            tmpBuffer1[8 + (20)] = args.Manual & 0x00FF;
            let crc16Data1 = crc.crc16(tmpBuffer1, 0xFFFF);
            let cmdUartSendBuffer1 = tmpBuffer1.concat((crc16Data1 & 0xff)).concat(((crc16Data1 & 0xff00) >> 8));
            this.MessageCtrl.Message0x10Buffer1 = cmdUartSendBuffer1;
            this.sendMsgQueue.Enqueue(cmdUartSendBuffer1);

            let tmpBuffer2 = [];
            tmpBuffer2[0] = 0x01;
            tmpBuffer2[1] = 0x10;
            tmpBuffer2[2] = 0x00;
            tmpBuffer2[3] = 0xFA;
            tmpBuffer2[4] = 0x00;
            tmpBuffer2[5] = 0x01;
            tmpBuffer2[6] = (0x01 * 2);
            tmpBuffer2[7] = (args.Relay & 0xFF00) >> 8;
            tmpBuffer2[8] = args.Relay & 0x00FF;
            let crc16Data2 = crc.crc16(tmpBuffer2, 0xFFFF);
            let cmdUartSendBuffer2 = tmpBuffer2.concat((crc16Data2 & 0xff)).concat(((crc16Data2 & 0xff00) >> 8));
            this.MessageCtrl.Message0x10Buffer2 = cmdUartSendBuffer2;
            this.sendMsgQueue.Enqueue(cmdUartSendBuffer2);
            this.MessageCtrl.op_type = 'write_0x10_cmd';
         });



        /* 载入文件 */
        ipcMain.on(IndoorIPCMsg.APP_CMD_MEM_INDOOR_LOAD_FILE, (event, args) => {
            dialog.showOpenDialog(
                {
                    properties: ["openFile"],
                    filters: [
                        {
                            name: "Binary File",
                            extensions: ["bin"]
                        }
                    ]
                },
                files => {
                    console.log(files)
                    if(files){

                        try {
                            const fs = require('fs')
                            var filestate = fs.statSync(files[0])
                            this.memoryCtrl.eepromData = Buffer.alloc(filestate.size)
                            var fd = fs.openSync(files[0], 'r')
                            fs.readSync(fd, this.memoryCtrl.eepromData, 0, filestate.size, 0)
                            fs.closeSync(fd)

                        } catch (error) {
                            console.log(error)
                            ipcMain.on(IndoorIPCMsg.APP_REPORT_INDOOR_DIALOG_PROMPT, "Bin File Error")
                            return
                        }
                        
                        var result = true//this._EEPROMDataCheck(this.memoryCtrl.eepromData)
                        console.log("result>>", result);
                        this._sendIPCMsg(IndoorIPCMsg.APP_CMD_LOAD_FILE_NAME, 
                            {
                                filePath: files[0], 
                                checkSum: this.memoryCtrl.eepromData[0xAF].toString(16),
                                isTrue: result
                            })
                    }
                }
            );
        })

        //烧写EEPROM
        ipcMain.on(IndoorIPCMsg.APP_REPORT_MEM_INDOOR_BURN, (evnet, args) => {
            // 判断串口是否连接
            if(!ComIsConnect()) {
                this._sendIPCMsg(IndoorIPCMsg.APP_REPORT_INDOOR_DIALOG_PROMPT, "Serial Port not Connected!");
                return;
            }
            /* 重置烧写状态 */
            this.memoryCtrl._init(10);

            //console.log('start programming...')
            this.memoryCtrl.isBusy = true;
            this._MemBurnFrame(this.memoryCtrl.eepromAddr, this.memoryCtrl.data);
            this.memoryCtrl.timOutHandle = setTimeout(() => {
                this._timeOutCallBack();
            }, 1000)
        });

        /***************************** 前端命令监听 end *******************************/
    }

    /**
     * 定时发送服务
     */
    _SerialSendService() {
        if (null == this.sendMsgTimer) {
            this._SerialSendService = setInterval(() => {
                if (store.state.SystemData.MonitorMode === 'outdoor') {
                    if (ComIsConnect()) {
                        // if (!this.sendMsgQueue.IsEmpty()) {
                        //     UartSendBuffer(this.sendMsgQueue.Dequeue(), 0);   // 发送队列不为空 
                        // } else {             
                        //     let cmdDataBuffer = [0x01, 0x03, 0x00, 0x14, 0x00,0x7F];
                        //     let crc16 = crc.crc16(cmdDataBuffer, 0xFFFF);
                        //     let cmdUartSendBuffer = cmdDataBuffer.concat((crc16 & 0xff)).concat(((crc16 & 0xff00) >> 8));
                        //     UartSendBuffer(cmdUartSendBuffer, 0);           // 发送 查询数据指令 
                        //     this.MessageCtrl.op_type = 'idle'
                        // }
                        var intervalId = setInterval(() => { 
                          if (this.MessageCtrl.SetTimeoutNum >= 3) {
                            this.MessageCtrl.SetTimeoutNum = 0;
                            if (!this.sendMsgQueue.IsEmpty()) {
                                UartSendBuffer(this.sendMsgQueue.Dequeue(), 0);   
                            } else {
                                let cmdDataBuffer = [0x01, 0x03, 0x00, 0x14, 0x00,0x7F];
                                let crc16 = crc.crc16(cmdDataBuffer, 0xFFFF);
                                let cmdUartSendBuffer = cmdDataBuffer.concat((crc16 & 0xff)).concat(((crc16 & 0xff00) >> 8));
                                UartSendBuffer(cmdUartSendBuffer, 0);           
                                this.MessageCtrl.op_type = 'idle'
                                // console.log("send  --------------");
                            }
                            clearInterval(intervalId); 
                          } else {
                            if (this.sendMsgQueue.IsEmpty()) {

                                let cmdDataBuffer1 = [0x01, 0x03, 0x00, 0x00, 0x00, 0x01];
                                switch (this.MessageCtrl.SetTimeoutNum)
                                {
                                    case 0:
                                        cmdDataBuffer1[2] = (this.MessageCtrl.WatchAddr1 & 0xff00) >> 8;
                                        cmdDataBuffer1[3] = (this.MessageCtrl.WatchAddr1 & 0xff);
                                        break;
                                    case 1:
                                        cmdDataBuffer1[2] = (this.MessageCtrl.WatchAddr2 & 0xff00) >> 8;
                                        cmdDataBuffer1[3] = (this.MessageCtrl.WatchAddr2 & 0xff);
                                        break;
                                    case 2:
                                        cmdDataBuffer1[2] = (this.MessageCtrl.WatchAddr3 & 0xff00) >> 8;
                                        cmdDataBuffer1[3] = (this.MessageCtrl.WatchAddr3 & 0xff);
                                        break;
                                    // case 3:
                                    //     cmdDataBuffer1[2] = (this.MessageCtrl.WatchAddr4 & 0xff00) >> 8;
                                    //     cmdDataBuffer1[3] = (this.MessageCtrl.WatchAddr4 & 0xff);
                                    //     break;
                                    // case 4:
                                    //     cmdDataBuffer1[2] = (this.MessageCtrl.WatchAddr5 & 0xff00) >> 8;
                                    //     cmdDataBuffer1[3] = (this.MessageCtrl.WatchAddr5 & 0xff);
                                    //     break;
                                    default:
                                        break;
                                }
                                let crc161 = crc.crc16(cmdDataBuffer1, 0xFFFF);
                                let cmdUartSendBuffer1 = cmdDataBuffer1.concat((crc161 & 0xff)).concat(((crc161 & 0xff00) >> 8));
                                UartSendBuffer(cmdUartSendBuffer1, 0);          
                                this.MessageCtrl.op_type = 'idle'
                            }
                            this.MessageCtrl.SetTimeoutNum++;
                          }
                        }, 200);
                    }
                }
            }, 1000);
        }
    }


    _sendIPCMsg(id, msg){
        this.windowsHandle.webContents.send(id, msg);
    }
  
}