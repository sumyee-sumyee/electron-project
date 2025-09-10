
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
        let RecvDataArray = recvBuff;
        RecvDataArray = RecvDataArray.slice(0, RecvDataArray.length - 2);
        let crc16 = crc.crc16(RecvDataArray, 0xFFFF);
        if (recvBuff[recvBuff.length - 1] == ((crc16 & 0xff00) >> 8) && recvBuff[recvBuff.length - 2] == (crc16 & 0xff)) {
            //console.log("recv data:", recvBuff.length);
            switch (this.MessageCtrl.op_type) {
                case 'write_0x03_cmd':
                    this._sendIPCMsg(IndoorIPCMsg.APP_REPORT_TOUCH_READ_DATA, recvBuff);
                    break;
                case 'write_0x06_cmd':
                    this.MessageCtrl.op_type = 'idle'
                    break;
                case 'write_0x10_cmd':
                    this.MessageCtrl.op_type = 'idle'
                    break;
                case 'idle':
                    this._sendIPCMsg(IndoorIPCMsg.APP_REPORT_UART_DATA, recvBuff);
                    break; 
            }
            //     case 'read_param':
            //         if (recvBuff.length <= 50)
            //         {
            //             this._sendIPCMsg(IndoorIPCMsg.APP_CMD_GET_SYSTEM_DATA, recvBuff);
            //         }
            //         break;

            //     case 'write_0x06_cmd':
            //         if (recvBuff[1] === 0x06)
            //         {
            //             this.MessageCtrl.trySend0x06Cnt = 0;
            //             this._sendIPCMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'send ok'})
            //             this.MessageCtrl.op_type = 'idle'
            //             console.log("send data ok");
            //         }
            //         else 
            //         {
            //             this.sendMsgQueue.Enqueue(this.MessageCtrl.Message0x06Buffer);
            //             if (++this.MessageCtrl.trySend0x06Cnt > 3)
            //             {
            //                 this.MessageCtrl.trySend0x06Cnt = 0;
            //                 this._sendIPCMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'send ng'})
            //                 this.MessageCtrl.op_type = 'idle'
            //             }

            //             console.log("send data ng");
                       
            //         }
            //         break;

            //     case 'write_0x10_cmd':
            //         if (++this.MessageCtrl.Recv0x10CmdData >= 2)
            //         {
            //             this.MessageCtrl.Recv0x10CmdData = 0;
                        
            //             if (recvBuff[1] === 0x10)
            //             {
            //                 this.MessageCtrl.trySend0x10Cnt = 0;
            //                 this._sendIPCMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'send ok'})
            //                 this.MessageCtrl.op_type = 'idle'
            //             }
            //             else 
            //             {
            //                 this.sendMsgQueue.Enqueue(this.MessageCtrl.Message0x10Buffer1);
            //                 this.sendMsgQueue.Enqueue(this.MessageCtrl.Message0x10Buffer2);
            //                 if (++this.MessageCtrl.trySend0x10Cnt > 3)
            //                 {
            //                     this.MessageCtrl.trySend0x10Cnt = 0;
            //                     this._sendIPCMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'send ng'})
            //                     this.MessageCtrl.op_type = 'idle'
            //                 }
            //             }
            //         }
            //         break;
                
            //     // case 'idle':
            //     //     if (recvBuff.length <= 50)
            //     //     {
                       
            //     //         switch (this.MessageCtrl.SetTimeoutNum)
            //     //         {
            //     //             case 0:
            //     //                 // console.log("0>>", recvBuff);
            //     //                 break;
            //     //             case 1:

            //     //                 this.MessageCtrl.Watchdata[0] = recvBuff[3];
            //     //                 this.MessageCtrl.Watchdata[1] = recvBuff[4];
                               
            //     //                 break;
            //     //             case 2:
            //     //                 this.MessageCtrl.Watchdata[2] = recvBuff[3];
            //     //                 this.MessageCtrl.Watchdata[3] = recvBuff[4];
                              
            //     //                 break;
            //     //             case 3:
            //     //                 this.MessageCtrl.Watchdata[4] = recvBuff[3];
            //     //                 this.MessageCtrl.Watchdata[5] = recvBuff[4];
            //     //                 this._sendIPCMsg(IndoorIPCMsg.APP_WATCH_DATA_REFRESH, this.MessageCtrl.Watchdata);
            //     //                 // console.log("Watchdata>>", this.MessageCtrl.Watchdata);
            //     //                 break;
            //     //             default:
            //     //                 break;
            //     //         }

                       
            //     //     }
            //     //     else 
            //     //     {
            //     //         this._sendIPCMsg(IndoorIPCMsg.APP_REPORT_UART_DATA, recvBuff);
            //     //         //console.log("big data ------------------");
            //     //     }
            //     //     break;

            //     default:
            //         break;
            // }
        }
        else 
        {
            // if (this.MessageCtrl.op_type === 'write_0x06_cmd') 
            // {
            //     this.sendMsgQueue.Enqueue(this.MessageCtrl.Message0x06Buffer);
            //     if (++this.MessageCtrl.trySend0x06Cnt > 3)
            //     {
            //         this.MessageCtrl.trySend0x06Cnt = 0;
            //         this.MessageCtrl.op_type === 'idle'
            //         this._sendIPCMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'send ng'})
            //     }
            // }
            // else if (this.MessageCtrl.op_type === 'write_0x10_cmd')
            // {
            //     this.sendMsgQueue.Enqueue(this.MessageCtrl.Message0x10Buffer1);
            //     this.sendMsgQueue.Enqueue(this.MessageCtrl.Message0x10Buffer2);
            //     if (++this.MessageCtrl.trySend0x10Cnt > 3)
            //     {
            //         this.MessageCtrl.trySend0x10Cnt = 0;
            //         this._sendIPCMsg(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'send ng'})
            //         this.MessageCtrl.op_type = 'idle'
            //     }
            // }    
        }
    }

   
    /**
     * 设置IPC监听
     */
    _setIPCListenOn() {
        // Touch Button Send Read Cmd
        ipcMain.on(IndoorIPCMsg.APP_TOUCH_BUTTON_READ_CMD, (evnt, args) => {
            let tmpBuffer = [];
            let crc16Data;
            let cmdUartSendBuffer;
            if (args.CmdType === 'ReadMotorIqCmd') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x03;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0x06;
                tmpBuffer[4] = 0x00;
                tmpBuffer[5] = 0x0F;
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x03_cmd';
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            }
        });

        // Touch Button Send Single Cmd
        ipcMain.on(IndoorIPCMsg.APP_TOUCH_BUTTON_SEND_SINGLE_CMD, (evnt, args) => {
            console.log(args);
            if (typeof global.Mode === 'undefined') {
                global.Mode = 0;
            }
            let tmpBuffer = [];
            let crc16Data;
            let cmdUartSendBuffer;
            if (args.CmdType === 'JointResetCmd') {
                //console.log('JointResetCmd');
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x06;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0xD9;
                tmpBuffer[4] = 0;
                tmpBuffer[5] = 1;
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x06_cmd';
            } else if (args.CmdType === 'ModeSwitchCmd') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x06;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0xAB;
                if (global.Mode === 0) {
                    global.Mode = 1;
                } else {
                    global.Mode = 0;
                }
                tmpBuffer[4] = global.Mode >> 8;
                tmpBuffer[5] = global.Mode & 0xFF;
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x06_cmd';
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            } else if (args.CmdType === 'FlashSaveCmd') {
                //console.log('FlashSaveCmd');
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x06;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0x04;
                tmpBuffer[4] = 0x00;
                tmpBuffer[5] = 0x01;
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x06_cmd';
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            } else if (args.CmdType === 'ZoreCheckCmd') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x06;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0x05;
                tmpBuffer[4] = 0x00;
                tmpBuffer[5] = 0x01;
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x06_cmd';
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            } else if (args.CmdType === 'ClearErrorCmd') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x06;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0x03;
                tmpBuffer[4] = 0x00;
                tmpBuffer[5] = 0x01;
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x06_cmd';
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            } else if (args.CmdType === 'ReadyCmd') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x06;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0x00;
                tmpBuffer[4] = 0x00;
                tmpBuffer[5] = 0x01;
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x06_cmd';
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            } else if (args.CmdType === 'SetEncoder') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x06;
                tmpBuffer[2] = args.Address >> 8;
                tmpBuffer[3] = args.Address & 0xFF;
                tmpBuffer[4] = args.Data >> 8;
                tmpBuffer[5] = args.Data & 0xFF;
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x06_cmd';
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            }
        });

        //Touch Button Send Multiple cmd
        ipcMain.on(IndoorIPCMsg.APP_TOUCH_BUTTON_SEND_MULT_CMD, (evnt, args) => {
            console.log(args);
            let tmpBuffer = [];
            let crc16Data;
            let cmdUartSendBuffer;
            if (args.CmdType === 'SetMotorEnableCmd') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x10;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0x15;
                tmpBuffer[4] = 0x00;
                tmpBuffer[5] = 0x0F;
                tmpBuffer[6] = 0x0F * 2;
                for (let i = 0; i < 15; i++) {
                    tmpBuffer[7 + i*2] = args.Data[i] >> 8;
                    tmpBuffer[8 + i*2] = args.Data[i] & 0xFF;
                }
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x10_cmd';  
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            } else if (args.CmdType === 'ResetZeroPointCmd') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x10;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0x6F;
                tmpBuffer[4] = 0x00;
                tmpBuffer[5] = 0x0F;
                tmpBuffer[6] = 0x0F * 2;
                for (let i = 0; i < 15; i++) {
                    tmpBuffer[7 + i*2] = args.Data[i] >> 8;
                    tmpBuffer[8 + i*2] = args.Data[i] & 0xFF;
                }
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x10_cmd';  
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            } else if (args.CmdType === 'ZeroPointCheckCmd') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x10;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0x7E;
                tmpBuffer[4] = 0x00;
                tmpBuffer[5] = 0x0F;
                tmpBuffer[6] = 0x0F * 2;
                for (let i = 0; i < 15; i++) {
                    tmpBuffer[7 + i*2] = args.Data[i] >> 8;
                    tmpBuffer[8 + i*2] = args.Data[i] & 0xFF;
                }
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x10_cmd';  
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            } else if (args.CmdType === 'SetMotorIqCmd') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x10;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0x06;
                tmpBuffer[4] = 0x00;
                tmpBuffer[5] = 0x0F;
                tmpBuffer[6] = 0x0F * 2;
                for (let i = 0; i < 15; i++) {
                    tmpBuffer[7 + i*2] = args.Data[i] >> 8;
                    tmpBuffer[8 + i*2] = args.Data[i] & 0xFF;
                }
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x10_cmd';  
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            } else if (args.CmdType === 'SetMotorIncPosCmd') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x10;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0x51;
                tmpBuffer[4] = 0x00;
                tmpBuffer[5] = 0x1E;
                tmpBuffer[6] = 0x1E * 2;
                for (let i = 0; i < 15; i++) {
                    tmpBuffer[7 + i*4] = args.Data[i] >> 24;
                    tmpBuffer[8 + i*4] = args.Data[i] >> 16;
                    tmpBuffer[9 + i*4] = args.Data[i] >> 8;
                    tmpBuffer[10 + i*4] = args.Data[i] & 0xFF;
                }
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x10_cmd';  
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            } else if (args.CmdType === 'SetJointAbsPosCmd') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x10;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0x8D;
                tmpBuffer[4] = 0x00;
                tmpBuffer[5] = 0x1E;
                tmpBuffer[6] = 0x1E * 2;
                for (let i = 0; i < 15; i++) {
                    tmpBuffer[7 + i*4] = args.Data[i] >> 24;
                    tmpBuffer[8 + i*4] = args.Data[i] >> 16;
                    tmpBuffer[9 + i*4] = args.Data[i] >> 8;
                    tmpBuffer[10 + i*4] = args.Data[i] & 0xFF;
                }
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x10_cmd';  
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            } else if (args.CmdType === 'SetMotorAbsPosCmd') {
                tmpBuffer[0] = 0x01;
                tmpBuffer[1] = 0x10;
                tmpBuffer[2] = 0x00;
                tmpBuffer[3] = 0x33;
                tmpBuffer[4] = 0x00;
                tmpBuffer[5] = 0x1E;
                tmpBuffer[6] = 0x1E * 2;
                for (let i = 0; i < 15; i++) {
                    tmpBuffer[7 + i*4] = args.Data[i] >> 24;
                    tmpBuffer[8 + i*4] = args.Data[i] >> 16;
                    tmpBuffer[9 + i*4] = args.Data[i] >> 8;
                    tmpBuffer[10 + i*4] = args.Data[i] & 0xFF;
                }
                crc16Data = crc.crc16(tmpBuffer, 0xFFFF);
                cmdUartSendBuffer = tmpBuffer.concat((crc16Data & 0xff)).concat(((crc16Data & 0xff00) >> 8));
                this.sendMsgQueue.Enqueue(cmdUartSendBuffer);
                this.MessageCtrl.op_type = 'write_0x10_cmd';  
                //console.log('cmdUartSendBuffer', Buffer.from(cmdUartSendBuffer).toString('hex').match(/.{1,2}/g).join(' '));
            }
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


        ipcMain.on(IndoorIPCMsg.APP_MAIN_SWITCH_JOINT_UNIT, (event, arg) => {
            this._sendIPCMsg(IndoorIPCMsg.APP_SWITCH_JOINT_UNIT, arg);
        })
       

        //Save File
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
                        if (!this.sendMsgQueue.IsEmpty()) {
                            UartSendBuffer(this.sendMsgQueue.Dequeue(), 0);   
                        } else {
                            if (this.MessageCtrl.SetTimeoutNum === 0) {
                                let cmdData0Buffer = [0x01, 0x04, 0x10, 0x01, 0x00, 0x5F];
                                let crc160 = crc.crc16(cmdData0Buffer, 0xFFFF);
                                let cmdUart0SendBuffer = cmdData0Buffer.concat((crc160 & 0xff)).concat(((crc160 & 0xff00) >> 8));
                                UartSendBuffer(cmdUart0SendBuffer, 0);           
                                this.MessageCtrl.op_type = 'idle'

                            } else if (this.MessageCtrl.SetTimeoutNum === 1){
                                let cmdData1Buffer = [0x01, 0x04, 0x10, 0x60, 0x00, 0x30];
                                let crc161 = crc.crc16(cmdData1Buffer, 0xFFFF);
                                let cmdUart1SendBuffer = cmdData1Buffer.concat((crc161 & 0xff)).concat(((crc161 & 0xff00) >> 8));
                                UartSendBuffer(cmdUart1SendBuffer, 0);           
                                this.MessageCtrl.op_type = 'idle'
                            } else if (this.MessageCtrl.SetTimeoutNum === 2){
                                let cmdData2Buffer = [0x01, 0x03, 0x00, 0x8d, 0x00, 0x1f];
                                let crc162 = crc.crc16(cmdData2Buffer, 0xFFFF);
                                let cmdUart2SendBuffer = cmdData2Buffer.concat((crc162 & 0xff)).concat(((crc162 & 0xff00) >> 8));
                                UartSendBuffer(cmdUart2SendBuffer, 0);           
                                this.MessageCtrl.op_type = 'idle'
                            } 
                           
                            this.MessageCtrl.SetTimeoutNum++;
                            if (this.MessageCtrl.SetTimeoutNum >= 3) {
                                this.MessageCtrl.SetTimeoutNum = 0;
                            }
                            // console.log("send  --------------");
                        }
                      
                    }
                }
            }, 200);
        }
    }


    _sendIPCMsg(id, msg){
        this.windowsHandle.send(id, msg);
    }
  
}