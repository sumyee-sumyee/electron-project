<template>
  <div class="manual-set">
    <el-row  style="margin-top:5px; ">
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-checkbox  v-model="CheckedData.EEVSet1" style="margin-right: 5px; margin-top: 3px;">膨胀阀1开度</el-checkbox>
          <InputNumber 
            :inputs.sync="ManualDataType.Data[0]" 
            style="min-width: 50px; max-width: 100px;" 
            size="mini" :disabled="!CheckedData.EEVSet1">
          </InputNumber> 
        </div>
      </el-col>

      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-checkbox  v-model="CheckedData.EEVSet2" style="margin-right: 5px; margin-top: 3px;">膨胀阀2开度</el-checkbox>
          <InputNumber 
            :inputs.sync="ManualDataType.Data[1]" 
            style="min-width: 50px; max-width: 100px;" 
            size="mini" :disabled="!CheckedData.EEVSet2">
          </InputNumber> 
        </div>
      </el-col>

      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;" >
          <el-checkbox  v-model="CheckedData.FanSet1" style="margin-right: 5px; margin-top: 3px;">风机1风速</el-checkbox>
          <InputNumber 
            :inputs.sync="ManualDataType.Data[4]" 
            style="min-width: 50px; max-width: 100px;" 
            size="mini" :disabled="!CheckedData.FanSet1">
          </InputNumber> 
        </div>
      </el-col>

      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;" >
          <el-checkbox  v-model="CheckedData.FanSet2" style="margin-right: 5px; margin-top: 3px;">风机2风速</el-checkbox>
          <InputNumber 
            :inputs.sync="ManualDataType.Data[5]" 
            style="min-width: 50px; max-width: 100px;" 
            size="mini" :disabled="!CheckedData.FanSet2">
          </InputNumber> 
        </div>
      </el-col>

      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-checkbox  v-model="CheckedData.CompSet1" style="margin-right: 5px; margin-top: 3px;">压机1频率</el-checkbox>
          <InputNumber 
            :inputs.sync="ManualDataType.Data[2]" 
            style="min-width: 50px; max-width: 100px;" 
            size="mini" :disabled="!CheckedData.CompSet1">
          </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-checkbox  v-model="CheckedData.CompSet2" style="margin-right: 5px; margin-top: 3px;">压机2频率</el-checkbox>
          <InputNumber 
            :inputs.sync="ManualDataType.Data[3]" 
            style="min-width: 50px; max-width: 100px;" 
            size="mini" :disabled="!CheckedData.CompSet2">
          </InputNumber> 
        </div>
      </el-col>
    </el-row> 

   
    <el-row  style="margin-top:5px; ">
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-checkbox  v-model="CheckedData.PumpSet" style="margin-right: 5px; margin-top: 3px;">水泵频率</el-checkbox>
          <InputNumber 
            :inputs.sync="ManualDataType.Data[9]" 
            style="min-width: 50px; max-width: 100px;" 
            size="mini" :disabled="!CheckedData.PumpSet">
          </InputNumber> 
        </div>
      </el-col>

      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-checkbox  v-model="CheckedData.Heater" style="margin-right: 5px; margin-top: 3px;">电加热开关</el-checkbox>
          <el-select 
            size="small" 
            v-model="SelectData.Heater" 
            :disabled="!CheckedData.Heater">
            <el-option label="开启"  :value="1"></el-option>
            <el-option label="关闭"  :value="2"></el-option>
          </el-select> 
        </div>
      </el-col>

      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;" >
          <el-checkbox  v-model="CheckedData.OilHeatStrip1" style="margin-right: 5px; margin-top: 3px;">油加热带1</el-checkbox>
          <el-select 
            size="small" 
            v-model="SelectData.OilHeatStrip1" 
            :disabled="!CheckedData.OilHeatStrip1">
            <el-option label="开启"  :value="1"></el-option>
            <el-option label="关闭"  :value="2"></el-option>
          </el-select> 
        </div>
      </el-col>

      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;" >
          <el-checkbox  v-model="CheckedData.OilHeatStrip2" style="margin-right: 5px; margin-top: 3px;">油加热带2</el-checkbox>
          <el-select 
            size="small" 
            v-model="SelectData.OilHeatStrip2" 
            :disabled="!CheckedData.OilHeatStrip2">
            <el-option label="开启"  :value="1"></el-option>
            <el-option label="关闭"  :value="2"></el-option>
          </el-select>  
        </div>
      </el-col>

      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-checkbox  v-model="CheckedData.HydraulicValve" style="margin-right: 5px; margin-top: 3px;">液路阀开关</el-checkbox>
          <el-select 
            size="small" 
            v-model="SelectData.HydraulicValve" 
            :disabled="!CheckedData.HydraulicValve">
            <el-option label="开启"  :value="1"></el-option>
            <el-option label="关闭"  :value="2"></el-option>
          </el-select>  
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-checkbox  v-model="CheckedData.WaterValve1" style="margin-right: 5px; margin-top: 3px;">水路阀开关</el-checkbox>
          <el-select 
            size="small" 
            v-model="SelectData.WaterValve1" 
            :disabled="!CheckedData.WaterValve1">
            <el-option label="开启"  :value="1"></el-option>
            <el-option label="关闭"  :value="2"></el-option>
          </el-select> 
        </div>
      </el-col>
    </el-row> 

    <el-row  style="margin-top:5px; " type="flex" justify="center">
      <el-col :span="9" style="min-height:1px;">
        <div></div>
      </el-col>
      <el-col :span="6">
        <el-button style="width:80% " 
          type="primary" plain size="mini" 
          @click="sendTestingMsg">  
          发送手动参数
        </el-button> 
      </el-col>
      <el-col :span="8" style="min-height:1px;">
        <div></div>
      </el-col>
    </el-row> 
  </div>  
</template>

<script>
import InputNumber from '@/components/InputNumber'
import { ipcRenderer } from 'electron'
import { APP_CMD_SET_MANUAL_DATA } from '../../../../js/constants/IndoorConstants'
import { EventBus } from "../../../../Utils/EventBus"
export default {
   data () {
    return {
      CheckedData: { 
        Heater:false,
        HydraulicValve:false,
        WaterValve1:false,
        WaterValve2:false,
        WaterValve3:false,
        OilHeatStrip1:false,
        OilHeatStrip2:false,

        EEVSet1:false,
        EEVSet2:false,
        FanSet1:false,
        FanSet2:false,
        CompSet1:false,
        CompSet2:false,
        PumpSet:false,
      },
      ManualData: {

        EEVSetStep1: 0,
        EEVSetStep2: 0,
        FanSetSpeed1: 0,
        FanSetspeed2: 0,
        CompSetFreq1: 0,
        CompSetFreq2: 0,
        PumpSetFreq: 0,
      },
      SelectData: {
        Heater:2,
        HydraulicValve:2,
        WaterValve1:2,
        WaterValve2:2,
        WaterValve3:2,
        OilHeatStrip1:2,
        OilHeatStrip2:2,
      },

      ManualDataType: {
          ManualOnOffByte: 0,
          RelayOnOffByte: 0,
          Data: [0,0,0,0,0,0,0,0,0,0],
        }
    }
  },
  components: {
    InputNumber,
  },
 
  methods: {
    sendTestingMsg () {

      //手动模式标志位
      this.ManualDataType.ManualOnOffByte = 0;
      if (this.CheckedData.EEVSet1 === true) {
        this.ManualDataType.ManualOnOffByte |= 0x0010;
      }
      if (this.CheckedData.EEVSet2 === true) {
        this.ManualDataType.ManualOnOffByte |= 0x0020;
      }
      if (this.CheckedData.FanSet1 === true) {
        this.ManualDataType.ManualOnOffByte |= 0x0004;
      }
      if (this.CheckedData.FanSet2 === true) {
        this.ManualDataType.ManualOnOffByte |= 0x0008;
      }
      if (this.CheckedData.CompSet1 === true) {
        this.ManualDataType.ManualOnOffByte |= 0x0001;
      }
      if (this.CheckedData.CompSet2 === true) {
        this.ManualDataType.ManualOnOffByte |= 0x0002;
      }
      if (this.CheckedData.PumpSet === true) {
        this.ManualDataType.ManualOnOffByte |= 0x0040;
      }
      if (this.CheckedData.Heater === true) {
        this.ManualDataType.ManualOnOffByte |= 0x0080;
      }
      if (this.CheckedData.OilHeatStrip1 === true) {
        this.ManualDataType.ManualOnOffByte |= 0x0100;
      }
      if (this.CheckedData.OilHeatStrip2 === true) {
        this.ManualDataType.ManualOnOffByte |= 0x0200;
      }
      if (this.CheckedData.HydraulicValve === true) {
        //none
      }
      if (this.CheckedData.WaterValve1 === true) {
        //none
      }
      

      //继电器开关 251
      this.ManualDataType.RelayOnOffByte = 0;
      if (this.SelectData.Heater === 1) {
        this.ManualDataType.RelayOnOffByte |= 0x01;
      }
      if (this.SelectData.OilHeatStrip1 === 1) {
        this.ManualDataType.RelayOnOffByte |= 0x02;
      }
      if (this.SelectData.OilHeatStrip2 === 1) {
        this.ManualDataType.RelayOnOffByte |= 0x04;
      }


      ipcRenderer.send(APP_CMD_SET_MANUAL_DATA, {
        Data: this.ManualDataType.Data,
        Manual: this.ManualDataType.ManualOnOffByte,
        Relay: this.ManualDataType.RelayOnOffByte
      })
      
    }
  },
}
</script>

<style>
.progress-box {
  display: flex;
  align-items: center;
  font-size: 15px;
  height: 30px;
}
.manual-set .el-col-4{
  margin-top: 5px;
}
.manual-set .el-select{
  margin-top: 5px;
}
</style>
