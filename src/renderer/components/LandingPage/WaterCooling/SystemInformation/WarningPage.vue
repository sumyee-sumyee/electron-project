<template>
  <div >  
    <fieldset  style="border-color: white; height: 825px;">
    <legend style="font:8px; font-weight:800;">数据日志</legend>    
    
    <el-carousel height="770px" indicator-position="outside" :autoplay="false" >
      <el-carousel-item >
        <el-table
        :data="CurrentWarning" 
        height="820px"
        style="width: 100%">
          <el-table-column
            prop="name"
            label="当前告警信息"
            width="280px"
            size="small">
          </el-table-column>
        </el-table>
      </el-carousel-item>

      <el-carousel-item>
        <el-input  height="770px" type="textarea" :rows="45" v-model="infoText"  readonly> </el-input>
      </el-carousel-item>
    
    </el-carousel>
  </fieldset>
  </div>
</template>
<script>
import { ipcRenderer } from 'electron';
// import { setTimeout } from 'timers';
// import { EventBus } from "../../../../Utils/EventBus.js"
// import { LogUtils } from '../../../../json/LogUtils';


import {
    APP_REPORT_UART_DATA
  } from '../../../../js/constants/IndoorConstants'
import { constants } from 'fs';

export default {
  name: 'landing-page',
  computed: {
   
  },
  data() {
    return {
      CurrentWarning:[{name:'无故障'}],
      infoText:'',
      infoTextContent:'',
      FluorineSystemErr1: 0, 
      FluorineDriverErr1: 0, 
      FluorineSystemErr2: 0, 
      FluorineDriverErr2: 0, 
      WaterSystemErr: 0, 
      WaterDriverErr: 0, 
      SystemErr: 0,
      ErrorData: {
        FluorineSystemErr1: '', 
        FluorineDriverErr1: '', 
        FluorineSystemErr2: '', 
        FluorineDriverErr2: '',
        WaterSystemErr: '', 
        WaterDriverErr: '', 
        SystemErr: '',
      },
      DriverCode: {
        CompressorDriverErrCode1: '',
        CompressorDriverErrCode2: '',
        FanDriverErrCode1: '',
        FanDriverErrCode2: '',
        PumpDriverErrCode: ''
      }
    }

  },
  methods: {
    ClearInfoText () {
      this.infoText = ''
      this.infoTextContent = ''
    },
    addRow(String) {
      const index = this.CurrentWarning.findIndex((item) => item.name === String);
      if (index === -1) {
        this.CurrentWarning.push({name:String})
      }
    },
    deleteRow(String) {
      const index = this.CurrentWarning.findIndex((item) => item.name === String);
      if (index !== -1) {
        this.CurrentWarning.splice(index, 1);
      }
    },
  },


  watch: {
   
  },
  
  created: function () {
    //Serial Data 
    // ipcRenderer.on(APP_REPORT_UART_DATA, (event, arg) => {
    //   let uint8ModbusData = [], uint16MudbusData = []
    //   let ErrTextTmp
 

    //   uint8ModbusData = arg.slice(0, arg.length - 2);
    //   uint8ModbusData = uint8ModbusData.slice(3);

    //   for (let i = 0; i < (arg[2]/2); i++) {
    //     uint16MudbusData[i] = ((uint8ModbusData[i*2] << 8) | (uint8ModbusData[i*2 + 1]))
    //   }

      // console.log("uint16MudbusData[3]:", uint16MudbusData[3]);
      // console.log("uint16MudbusData[4]:", uint16MudbusData[4]);
      // console.log("uint16MudbusData[5]:", uint16MudbusData[5]);
      // console.log("uint16MudbusData[6]:", uint16MudbusData[6]);
      // console.log("uint16MudbusData[7]:", uint16MudbusData[7]);
      // console.log("uint16MudbusData[8]:", uint16MudbusData[8]);
      // console.log("uint16MudbusData[9]:", uint16MudbusData[9]);
    //   this.DriverCode.CompressorDriverErrCode1 = uint16MudbusData[122].toString();
    //   this.DriverCode.CompressorDriverErrCode2 = uint16MudbusData[123].toString();
    //   this.DriverCode.FanDriverErrCode1 = uint16MudbusData[124].toString();
    //   this.DriverCode.FanDriverErrCode2 = uint16MudbusData[125].toString();
    //   this.DriverCode.PumpDriverErrCode = uint16MudbusData[126].toString();

    //   ErrTextTmp = ''
     
    //   if (uint16MudbusData[3] != this.FluorineSystemErr1)
    //   {
    //     this.FluorineSystemErr1 = uint16MudbusData[3];
    //     this.ErrorData.FluorineSystemErr1 = ''
    //     if (this.FluorineSystemErr1 & 0x0001) 
    //     {
    //       this.addRow('吸气温度传感器1故障') 
    //       ErrTextTmp += '吸气温度传感器1故障 '
    //       this.ErrorData.FluorineSystemErr1 += '吸气温度传感器1故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('吸气温度传感器1故障');
    //     }
        
    //     if (this.FluorineSystemErr1 & 0x0002) 
    //     {
    //       this.addRow('排气温度传感器1故障') 
    //       ErrTextTmp += '排气温度传感器1故障 ' 
    //       this.ErrorData.FluorineSystemErr1 += '排气温度传感器1故障 ' 
    //     }
    //     else 
    //     {
    //       this.deleteRow('排气温度传感器1故障');
    //     }

    //     if (this.FluorineSystemErr1 & 0x0004) 
    //     {
    //       this.addRow('冷凝温度传感器1故障') 
    //       ErrTextTmp += '冷凝温度传感器1故障 ' 
    //       this.ErrorData.FluorineSystemErr1 += '冷凝温度传感器1故障 ' 
    //     }
    //     else 
    //     {
    //       this.deleteRow('冷凝温度传感器1故障');
    //     }

    //     if (this.FluorineSystemErr1 & 0x0008) 
    //     {
    //       this.addRow('蒸发温度传感器1故障')
    //       ErrTextTmp += '蒸发温度传感器1故障 ' 
    //       this.ErrorData.FluorineSystemErr1 += '蒸发温度传感器1故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('蒸发温度传感器1故障');
    //     }

    //     if (this.FluorineSystemErr1 & 0x0010) 
    //     {
    //       this.addRow('冷液管温度传感器1故障')
    //       ErrTextTmp += '冷液管温度传感器1故障 '
    //       this.ErrorData.FluorineSystemErr1 += '冷液管温度传感器1故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow( '冷液管温度传感器1故障');
    //     }

    //     if (this.FluorineSystemErr1 & 0x0020) 
    //     {
    //       this.addRow('低压压力传感器1故障')
    //       ErrTextTmp += '低压压力传感器1故障 '
    //       this.ErrorData.FluorineSystemErr1 += '低压压力传感器1故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('低压压力传感器1故障');
    //     }

    //     if (this.FluorineSystemErr1 & 0x0040) 
    //     {
    //       this.addRow('高压压力传感器1故障')
    //       ErrTextTmp += '高压压力传感器1故障 '
    //       this.ErrorData.FluorineSystemErr1 += '高压压力传感器1故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('高压压力传感器1故障');
    //     }

    //     if (this.FluorineSystemErr1 & 0x0080) 
    //     {
    //       this.addRow('冷凝器温度1过高告警')
    //       ErrTextTmp += '冷凝器温度1过高告警 '
    //       this.ErrorData.FluorineSystemErr1 += '冷凝器温度1过高告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('冷凝器温度1过高告警');
    //     }

    //     if (this.FluorineSystemErr1 & 0x0100) 
    //     {
    //       this.addRow('冷凝器温度1过高锁定')
    //       ErrTextTmp += '冷凝器温度1过高锁定 '
    //       this.ErrorData.FluorineSystemErr1 += '冷凝器温度1过高锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('冷凝器温度1过高锁定');
    //     }

    //     if (this.FluorineSystemErr1 & 0x0200) 
    //     {
    //       this.addRow('蒸发器温度1过低告警')
    //       ErrTextTmp += '蒸发器温度1过低告警 '
    //       this.ErrorData.FluorineSystemErr1 += '蒸发器温度1过低告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('蒸发器温度1过低告警');
    //     }

    //     if (this.FluorineSystemErr1 & 0x0400) 
    //     {
    //       this.addRow('蒸发器温度1过低锁定')
    //       ErrTextTmp += '蒸发器温度1过低锁定 '
    //       this.ErrorData.FluorineSystemErr1 += '蒸发器温度1过低锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('蒸发器温度1过低锁定');
    //     }

    //     if (this.FluorineSystemErr1 & 0x0800) 
    //     {
    //       this.addRow('蒸发器温度1过高告警')
    //       ErrTextTmp += '蒸发器温度1过高告警 '
    //       this.ErrorData.FluorineSystemErr1 += '蒸发器温度1过高告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('蒸发器温度1过高告警');
    //     }

    //     if (this.FluorineSystemErr1 & 0x1000) 
    //     {
    //       this.addRow('蒸发器温度1过高锁定')
    //       ErrTextTmp += '蒸发器温度1过高锁定 '
    //       this.ErrorData.FluorineSystemErr1 += '蒸发器温度1过高锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('蒸发器温度1过高锁定');
    //     }

    //     if (this.FluorineSystemErr1 & 0x2000) 
    //     {
    //       this.addRow('排气温度1过高告警')
    //       ErrTextTmp += '排气温度1过高告警 '
    //       this.ErrorData.FluorineSystemErr1 += '排气温度1过高告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('排气温度1过高告警');
    //     }

    //     if (this.FluorineSystemErr1 & 0x4000) 
    //     {
    //       this.addRow('排气温度1过高锁定')
    //       ErrTextTmp += '排气温度1过高锁定 '
    //       this.ErrorData.FluorineSystemErr1 += '排气温度1过高锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('排气温度1过高锁定');
    //     }
    //   }

    //   if (uint16MudbusData[4] != this.FluorineDriverErr1)
    //   {
    //     this.FluorineDriverErr1 = uint16MudbusData[4];
    //     if (this.FluorineDriverErr1 & 0x0004) 
    //     { 
    //       this.addRow('高压开关1告警')
    //       ErrTextTmp += '高压开关1告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('高压开关1告警');
    //     }


    //     if (this.FluorineDriverErr1 & 0x0008) 
    //     { 
    //       this.addRow('风机1驱动故障')
    //       ErrTextTmp += '风机1驱动故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('风机1驱动故障');
    //     }

    //     if (this.FluorineDriverErr1 & 0x0010) 
    //     { 
    //       this.addRow('高压开关1故障')
    //       ErrTextTmp += '高压开关1故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('高压开关1故障');
    //     }


    //     if (this.FluorineDriverErr1 & 0x0020) 
    //     {
    //       this.addRow('高压开关1锁定')
    //       ErrTextTmp += '高压开关1锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('高压开关1锁定');
    //     }

    //     if (this.FluorineDriverErr1 & 0x0040) 
    //     {
    //       this.addRow('压缩机1通讯故障')
    //       ErrTextTmp += '压缩机1通讯故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('压缩机1通讯故障');
    //     }

    //     if (this.FluorineDriverErr1 & 0x0080) 
    //     {
    //       this.addRow('压缩机1AC电流过高告警')
    //       ErrTextTmp += '压缩机1AC电流过高告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('压缩机1AC电流过高告警');
    //     }

    //     if (this.FluorineDriverErr1 & 0x0100) 
    //     {
    //       this.addRow('压缩机1驱动故障告警' + this.DriverCode.CompressorDriverErrCode1);
    //       ErrTextTmp += '压缩机1驱动故障告警 ' + this.DriverCode.CompressorDriverErrCode1 + ' ';
    //     }
    //     else 
    //     {
    //       this.deleteRow('压缩机1驱动故障告警' + this.DriverCode.CompressorDriverErrCode1 );
    //     }

    //     if (this.FluorineDriverErr1 & 0x0200) 
    //     {
    //       this.addRow('压缩机1AC电流过高锁定')
    //       ErrTextTmp += '压缩机1AC电流过高锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('压缩机1AC电流过高锁定');
    //     }

    //     if (this.FluorineDriverErr1 & 0x0400) 
    //     {
    //       this.addRow('压缩机1驱动故障锁定')
    //       ErrTextTmp += '压缩机1驱动故障锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('压缩机1驱动故障锁定');
    //     }

    //     if (this.FluorineDriverErr1 & 0x0800) 
    //     {
    //       this.addRow('风机1通讯故障')
    //       ErrTextTmp += '风机1通讯故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('风机1通讯故障');
    //     }

    //     if (this.FluorineDriverErr1 & 0x1000) 
    //     {
    //       this.addRow('风机1AC电流过高告警')
    //       ErrTextTmp += '风机1AC电流过高告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('风机1AC电流过高告警');
    //     }

    //     if (this.FluorineDriverErr1 & 0x2000) 
    //     {
    //       this.addRow('风机1驱动故障告警' + this.DriverCode.FanDriverErrCode1 )
    //       ErrTextTmp += '风机1驱动故障告警 ' + this.DriverCode.FanDriverErrCode1  + ' '
    //     }
    //     else 
    //     {
    //       this.deleteRow('风机1驱动故障告警' + this.DriverCode.FanDriverErrCode1);
    //     }

    //     if (this.FluorineDriverErr1 & 0x4000) 
    //     {
    //       this.addRow('风机1AC电流过高锁定')
    //       ErrTextTmp += '风机1AC电流过高锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('风机1AC电流过高锁定');
    //     }

    //     if (this.FluorineDriverErr1 & 0x8000) 
    //     {
    //       this.addRow('风机1驱动故障锁定')
    //       ErrTextTmp += '风机1驱动故障锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('风机1驱动故障锁定');
    //     }

    //   }

    //   if (uint16MudbusData[5] != this.FluorineSystemErr2)
    //   {
    //     this.FluorineSystemErr2 = uint16MudbusData[5];
    //     if (this.FluorineSystemErr2 & 0x0001) 
    //     {
    //       this.addRow('吸气温度传感器2故障')
    //       ErrTextTmp += '吸气温度传感器2故障 ' 
    //     }
    //     else 
    //     {
    //       this.deleteRow('吸气温度传感器2故障');
    //     }
    //     if (this.FluorineSystemErr2 & 0x0002) 
    //     {
    //       this.addRow('排气温度传感器2故障')
    //       ErrTextTmp += '排气温度传感器2故障 ' 
    //     }
    //     else 
    //     {
    //       this.deleteRow('排气温度传感器2故障');
    //     }
    //     if (this.FluorineSystemErr2 & 0x0004) 
    //     {
    //       this.addRow('冷凝温度传感器2故障')
    //       ErrTextTmp += '冷凝温度传感器2故障 ' 
    //     }
    //     else 
    //     {
    //       this.deleteRow('冷凝温度传感器2故障');
    //     }
    //     if (this.FluorineSystemErr2 & 0x0008) 
    //     {
    //       this.addRow('蒸发温度传感器2故障')
    //       ErrTextTmp += '蒸发温度传感器2故障 ' 
    //     }
    //     else 
    //     {
    //       this.deleteRow('蒸发温度传感器2故障');
    //     }
    //     if (this.FluorineSystemErr2 & 0x0010) 
    //     {
    //       this.addRow('液管温度传感器2故障')
    //       ErrTextTmp += '液管温度传感器2故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('液管温度传感器2故障');
    //     }
    //     if (this.FluorineSystemErr2 & 0x0020) 
    //     {
    //       this.addRow('低压压力传感器2故障')
    //       ErrTextTmp += '低压压力传感器2故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('低压压力传感器2故障');
    //     }
    //     if (this.FluorineSystemErr2 & 0x0040) 
    //     {
    //       this.addRow('高压压力传感器2故障')
    //       ErrTextTmp += '高压压力传感器2故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('高压压力传感器2故障');
    //     }
    //     if (this.FluorineSystemErr2 & 0x0080) 
    //     {
    //       this.addRow('冷凝温度2过高告警')
    //       ErrTextTmp += '冷凝温度2过高告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('冷凝温度2过高告警');
    //     }
    //     if (this.FluorineSystemErr2 & 0x0100) 
    //     {
    //       this.addRow('冷凝温度2过高锁定')
    //       ErrTextTmp += '冷凝温度2过高锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('冷凝温度2过高锁定');
    //     }
    //     if (this.FluorineSystemErr2 & 0x0200) 
    //     {
    //       this.addRow('蒸发温度2过低告警')
    //       ErrTextTmp += '蒸发温度2过低告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('蒸发温度2过低告警');
    //     }
    //     if (this.FluorineSystemErr2 & 0x0400) 
    //     {
    //       this.addRow('蒸发温度2过低锁定')
    //       ErrTextTmp += '蒸发温度2过低锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('蒸发温度2过低锁定');
    //     }
    //     if (this.FluorineSystemErr2 & 0x0800) 
    //     {
    //       this.addRow('蒸发温度2过高告警')
    //       ErrTextTmp += '蒸发温度2过高告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('蒸发温度2过高告警');
    //     }
    //     if (this.FluorineSystemErr2 & 0x1000) 
    //     {
    //       this.addRow('蒸发温度2过高锁定')
    //       ErrTextTmp += '蒸发温度2过高锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('蒸发温度2过高锁定');
    //     }
    //     if (this.FluorineSystemErr2 & 0x2000) 
    //     {
    //       this.addRow('排气温度2过高告警')
    //       ErrTextTmp += '排气温度2过高告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('排气温度2过高告警');
    //     }
    //     if (this.FluorineSystemErr2 & 0x4000) 
    //     {
    //       this.addRow('排气温度2过高锁定')
    //       ErrTextTmp += '排气温度2过高锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('排气温度2过高锁定');
    //     }
    //   }

    //   if (uint16MudbusData[6] != this.FluorineDriverErr2)
    //   {
    //     this.FluorineDriverErr2 = uint16MudbusData[6];
    //     if (this.FluorineDriverErr2 & 0x0004) 
    //     {
    //       this.addRow('高压开关2告警')
    //       ErrTextTmp += '高压开关2告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('高压开关2告警');
    //     }
    //     if (this.FluorineDriverErr2 & 0x0008) 
    //     {
    //       this.addRow('风机2驱动故障')
    //       ErrTextTmp += '风机2驱动故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('风机2驱动故障');
    //     }
    //     if (this.FluorineDriverErr2 & 0x0010) 
    //     {
    //       this.addRow('高压开关2故障')
    //       ErrTextTmp += '高压开关2故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('高压开关2故障');
    //     }
    //     if (this.FluorineDriverErr2 & 0x0020) 
    //     {
    //       this.addRow('高压开关2锁定')
    //       ErrTextTmp += '高压开关2锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('高压开关2锁定');
    //     }
    //     if (this.FluorineDriverErr2 & 0x0040) 
    //     {
    //       this.addRow('压缩机2通讯故障')
    //       ErrTextTmp += '压缩机2通讯故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('压缩机2通讯故障');
    //     }
    //     if (this.FluorineDriverErr2 & 0x0080) 
    //     {
    //       this.addRow('压缩机2AC电流过高告警')
    //       ErrTextTmp += '压缩机2AC电流过高告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('压缩机2AC电流过高告警');
    //     }
    //     if (this.FluorineDriverErr2 & 0x0100) 
    //     {
    //       this.addRow('压缩机2驱动故障告警' + this.DriverCode.CompressorDriverErrCode2)
    //       ErrTextTmp += '压缩机2驱动故障告警 ' + this.DriverCode.CompressorDriverErrCode2 + ' '
    //     }
    //     else 
    //     {
    //       this.deleteRow('压缩机2驱动故障告警' + this.DriverCode.CompressorDriverErrCode2);
    //     }
    //     if (this.FluorineDriverErr2 & 0x0200) 
    //     {
    //       this.addRow('压缩机2AC电流过高锁定')
    //       ErrTextTmp += '压缩机2AC电流过高锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('压缩机2AC电流过高锁定');
    //     }
    //     if (this.FluorineDriverErr2 & 0x0400) 
    //     {
    //       this.addRow('压缩机2驱动故障锁定')
    //       ErrTextTmp += '压缩机2驱动故障锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('压缩机2驱动故障锁定');
    //     }
    //     if (this.FluorineDriverErr2 & 0x0800) 
    //     {
    //       this.addRow('风机2通讯故障')
    //       ErrTextTmp += '风机2通讯故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('风机2通讯故障');
    //     }
    //     if (this.FluorineDriverErr2 & 0x1000) 
    //     {
    //       this.addRow('风机2AC电流过高告警')
    //       ErrTextTmp += '风机2AC电流过高告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('风机2AC电流过高告警');
    //     }
    //     if (this.FluorineDriverErr2 & 0x2000) 
    //     {
    //       this.addRow('风机2驱动故障告警' + this.DriverCode.FanDriverErrCode2)
    //       ErrTextTmp += '风机2驱动故障告警 ' + this.DriverCode.FanDriverErrCode2 + ' '
    //     }
    //     else 
    //     {
    //       this.deleteRow('风机2驱动故障告警' + this.DriverCode.FanDriverErrCode2);
    //     }
    //     if (this.FluorineDriverErr2 & 0x4000) 
    //     {
    //       this.addRow('风机2AC电流过高锁定')
    //       ErrTextTmp += '风机2AC电流过高锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('风机2AC电流过高锁定');
    //     }
    //     if (this.FluorineDriverErr2 & 0x8000) 
    //     {
    //       this.addRow('风机2驱动故障锁定')
    //       ErrTextTmp += '风机2驱动故障锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('风机2驱动故障锁定');
    //     }
    //   }

    //   if (uint16MudbusData[7] != this.WaterSystemErr)
    //   {
    //     this.WaterSystemErr = uint16MudbusData[7];
    //     if (this.WaterSystemErr & 0x0001) 
    //     {
    //       this.addRow('水温过高告警')
    //       ErrTextTmp += '水温过高告警 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('水温过高告警');
    //     }
    //     if (this.WaterSystemErr & 0x0002) 
    //     {
    //       this.addRow('水温过低告警')
    //       ErrTextTmp += '水温过低告警 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('水温过低告警');
    //     }
    //     if (this.WaterSystemErr & 0x0004) 
    //     {
    //       this.addRow('环境温度传感器故障')
    //       ErrTextTmp += '环境温度传感器故障 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('环境温度传感器故障');
    //     }
    //     if (this.WaterSystemErr & 0x0008) 
    //     {
    //       this.addRow('系统水温度传感器故障')
    //       ErrTextTmp += '系统水温度传感器故障 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('系统水温度传感器故障');
    //     }
    //     if (this.WaterSystemErr & 0x0010) 
    //     {
    //       this.addRow('出水温度传感器故障')
    //       ErrTextTmp += '出水温度传感器故障 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('出水温度传感器故障');
    //     }
    //     if (this.WaterSystemErr & 0x0020) 
    //     {
    //       this.addRow('进水温度传感器故障')
    //       ErrTextTmp += '进水温度传感器故障 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('进水温度传感器故障');
    //     }
    //     if (this.WaterSystemErr & 0x0040) 
    //     {
    //       this.addRow('出水压力传感器故障')
    //       ErrTextTmp += '出水压力传感器故障 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('出水压力传感器故障');
    //     }
    //     if (this.WaterSystemErr & 0x0080) 
    //     {
    //       this.addRow('进水压力传感器故障')
    //       ErrTextTmp += '进水压力传感器故障 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('进水压力传感器故障');
    //     }
    //     if (this.WaterSystemErr & 0x0100) 
    //     {
    //       this.addRow('水泵压差高锁定')
    //       ErrTextTmp += '水泵压差高锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('水泵压差高锁定');
    //     } 
    //     if (this.WaterSystemErr & 0x0200) 
    //     {
    //       this.addRow('水泵压差低锁定')
    //       ErrTextTmp += '水泵压差低锁定 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('水泵压差低锁定');
    //     }
    //     if (this.WaterSystemErr & 0x0400) 
    //     {
    //       this.addRow('补水警告')
    //       ErrTextTmp += '补水警告 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('补水警告');
    //     }
    //     if (this.WaterSystemErr & 0x0800) 
    //     {
    //       this.addRow('水流开关故障')
    //       ErrTextTmp += '水流开关故障 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('水流开关故障');
    //     }
    //     if (this.WaterSystemErr & 0x1000) 
    //     {
    //       this.addRow('水流开关保护锁定')
    //       ErrTextTmp += '水流开关保护锁定 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('水流开关保护锁定');
    //     }
    //     if (this.WaterSystemErr & 0x2000) 
    //     {
    //       this.addRow('水温差过大告警')
    //       ErrTextTmp += '水温差过大告警 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('水温差过大告警');
    //     }
    //     if (this.WaterSystemErr & 0x4000) 
    //     {
    //       this.addRow('水泵压差高告警')
    //       ErrTextTmp += '水泵压差高告警 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('水泵压差高告警');
    //     }
    //     if (this.WaterSystemErr & 0x8000) 
    //     {
    //       this.addRow('水泵压差低告警')
    //       ErrTextTmp += '水泵压差低告警 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('水泵压差低告警');
    //     }
    //   }

    //   if (uint16MudbusData[8] != this.WaterDriverErr)
    //   {
    //     this.WaterDriverErr = uint16MudbusData[8];
    //     if (this.WaterDriverErr & 0x0001) 
    //     {
    //       this.addRow('水泵通讯故障')
    //       ErrTextTmp += '水泵通讯故障'
    //     }
    //     else 
    //     {
    //       this.deleteRow('水泵通讯故障');
    //     }
    //     if (this.WaterDriverErr & 0x0002) 
    //     {
    //       this.addRow('水泵AC电流过高告警')
    //       ErrTextTmp += '水泵AC电流过高告警'
    //     }
    //     else 
    //     {
    //       this.deleteRow('水泵AC电流过高告警');
    //     }
    //     if (this.WaterDriverErr & 0x0004) 
    //     {
    //       this.addRow('水泵驱动故障告警' + this.DriverCode.PumpDriverErrCode)
    //       ErrTextTmp += '水泵驱动故障告警' + this.DriverCode.PumpDriverErrCode + ' '
    //     }
    //     else 
    //     {
    //       this.deleteRow('水泵驱动故障告警' + this.DriverCode.PumpDriverErrCode);
    //     }
    //     if (this.WaterDriverErr & 0x0008) 
    //     {
    //       this.addRow('水泵AC电流过高锁定')
    //       ErrTextTmp += '水泵AC电流过高锁定'
    //     }
    //     else 
    //     {
    //       this.deleteRow('水泵AC电流过高锁定');
    //     }
    //     if (this.WaterDriverErr & 0x0010) 
    //     {
    //       this.addRow('水泵驱动故障锁定')
    //       ErrTextTmp += '水泵驱动故障锁定'
    //     }
    //     else 
    //     {
    //       this.deleteRow('水泵驱动故障锁定');
    //     }
    //     if (this.WaterDriverErr & 0x0020) 
    //     {
    //       this.addRow('水流开关保护告警')
    //       ErrTextTmp += '水流开关保护告警'
    //     }
    //     else 
    //     {
    //       this.deleteRow('水流开关保护告警');
    //     }
    //   }

    //   if (uint16MudbusData[9] != this.SystemErr)
    //   {
    //     this.SystemErr = uint16MudbusData[9];
    //     if(this.SystemErr & 0x0001) 
    //     {
    //       this.addRow('CAN通讯故障')
    //       ErrTextTmp += 'CAN通讯故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('CAN通讯故障');
    //     }
    //     if(this.SystemErr & 0x0002) 
    //     {
    //       this.addRow('上位机通讯故障')
    //       ErrTextTmp += '上位机通讯故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('上位机通讯故障');
    //     }
    //     if(this.SystemErr & 0x0004) 
    //     {
    //       this.addRow('显示器通讯故障')
    //       ErrTextTmp += '显示器通讯故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('显示器通讯故障');
    //     }
    //     if(this.SystemErr & 0x0008) 
    //     {
    //       this.addRow('相序检测故障')
    //       ErrTextTmp += '相序检测故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('相序检测故障');
    //     }
    //     if(this.SystemErr & 0x0010) 
    //     {
    //       this.addRow('交流电压告警')
    //       ErrTextTmp += '交流电压告警 '
    //     } 
    //     else 
    //     {
    //       this.deleteRow('交流电压告警');
    //     }
    //     if(this.SystemErr & 0x0020) 
    //     {
    //       this.addRow('水浸开关锁定')
    //       ErrTextTmp += '水浸开关锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('水浸开关锁定');
    //     }
    //     if(this.SystemErr & 0x0040) 
    //     {
    //       this.addRow('门禁开关锁定')
    //       ErrTextTmp += '门禁开关锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('门禁开关锁定');
    //     }
    //     if(this.SystemErr & 0x0080) 
    //     {
    //       this.addRow('烟雾开关锁定')
    //       ErrTextTmp += '烟雾开关锁定 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('烟雾开关锁定');
    //     }
    //     if(this.SystemErr & 0x0100) 
    //     {
    //       this.addRow('外接告警')
    //       ErrTextTmp += '外接告警 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('外接告警');
    //     }
    //     if(this.SystemErr & 0x0200) 
    //     {
    //       this.addRow('散热风机故障')
    //       ErrTextTmp += '散热风机故障 '
    //     }
    //     else 
    //     {
    //       this.deleteRow('散热风机故障');
    //     }
    //   }

    //   if (ErrTextTmp === '') 
    //   {
    //     ErrTextTmp = '系统正常运行';
    //     this.infoTextContent = '系统正常运行';
    //   } 
    //   if ((this.infoTextContent !== ErrTextTmp) && ErrTextTmp!=='')
    //   {
    //     this.deleteRow('无故障');
    //     this.infoTextContent = ErrTextTmp;
    //     this.infoText += new Date().toLocaleString().substring(5) +'>>'+ ErrTextTmp + '\t\n';
    //   }

      


//   })

  },
  beforeDestroy(){
   
  }

}
</script scoped>
<style >
.conter {
  margin: 4px;
  background-color:#ffffff;
}
.serial {
  margin-bottom:5dx;
  margin-top:5dx;
}
.version-fie {
  box-sizing: border-box;
  height: 100%;
}
.indoor {
  flex: 2.7;
  background-color: #d7e4f2;
  margin-top: 4px;
  padding-bottom: 5px;
}

.myicon-refresh {
  font-size: 30px;
  cursor: pointer;
}
@keyframes refresh {
    0% {
        transform: rotate(0deg)
    }
    50% {
        transform: rotate(180deg)
    }
    100% {
        transform: rotate(360deg)
    }
}
.myicon-refresh.animate {
    animation: refresh 2s infinite;
}

.progress-box {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-family: "Helvetica Neue";
}

.el-input__inner[DangerColor="danger"] {
  background-color:red;
}

.el-input__inner[InfoColor="info"] {
  background-color:#EBEEF5;
}

.el-input__inner[WarningColor="warning"] {
  background-color: #E6A23C;
}

.el-input__inner[SuccessColor="success"] {
  background-color: #67C23A;
}

.el-textarea__inner {
  background-color:#ffffff !important;
  font-size: 13px !important;
  padding: 2px !important;
  color: red !important;
}


.el-hanler {
  padding: 5px !important;
  background-color: #606266;
}



.el-select {
  
  height:32px !important;
}

.el-input__inner {
   height:28px !important;
   border-radius:0px !important;
   color:#222222 !important;
   font-size: 12px !important;
}

.el-button--text {
  color:black !important;
}
.el-input__icon {
  line-height:30px  !important;
}

.line {
    height: 5px;
    background: #ba55d3;
}
.el-button--text {
  color:black;
}
</style>




