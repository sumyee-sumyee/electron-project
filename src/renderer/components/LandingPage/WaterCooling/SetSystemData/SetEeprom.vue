<template>
  <div >
    <el-row  style="margin-top:17px; margin-left:15px; margin-right:15px;">
      <el-col :span="3" style="margin-left:30px;">
         <el-button type="text" style="margin-right:3px;">
              读取参数地址:
          </el-button >
      </el-col>
      <el-col :span="3" style="margin-top:3px;">
          <InputNumber
            :inputs.sync="ReadData.Address" 
            style="width: 100%;" 
            size="mini">
          </InputNumber>
      </el-col>

       <el-col :span="3" style="margin-left:30px;">
        <el-button type="text" style="margin-right:3px;">
              读取参数数据:
        </el-button >
      </el-col>
      <el-col :span="3" style="margin-top:3px;">
        <el-input size="mini" v-model="ReadData.Data" readonly/>
      </el-col>

      <el-col :span="5" style=" margin-left:30px; margin-top:3px;">
        <el-button 
          style="width:100%" 
          type="primary" plain 
          size="mini" 
          @click="sendReadDataMsg"> 
          获取地址参数
        </el-button> 
      </el-col>
    </el-row>

    <el-row  style=" margin-left:15px; margin-right:15px;">
      <el-col :span="3" style="margin-left:30px;">
         <el-button type="text" style="margin-right:3px;">
              输入参数地址:
          </el-button >
      </el-col>
      <el-col :span="3" style="margin-top:3px;">
          <InputNumber
            :inputs.sync="WirteData.Address" 
            style="width: 100%;" 
            size="mini">
          </InputNumber>
      </el-col>

       <el-col :span="3" style="margin-left:30px;">
        <el-button type="text" style="margin-right:3px;">
            输入参数数据:
        </el-button >
      </el-col>
      <el-col :span="3" style="margin-top:3px;">
        <InputNumber
            :inputs.sync="WirteData.Data" 
            style="width: 100%;" 
            size="mini">
        </InputNumber>
      </el-col>

      <el-col :span="5" style=" margin-left:30px; margin-top:3px;">
        <el-button 
          style="width:100%" 
          type="primary" plain 
          size="mini" 
          @click="sendWirteDataMsg"> 
          修改地址参数
        </el-button> 
      </el-col>
    </el-row>


    
  </div>   
</template>

<script>
  import InputNumber from '@/components/InputNumber'
  import InputHex from '@/components/InputHex'
  import { ipcRenderer } from 'electron'

// const { dialog } = require('electron').remote;
const { dialog } = require("@electron/remote")
// const { fs } = require('electron').remote;
const { fs } = require("@electron/remote")

// var remote = require('electron').remote;
const remote = require("@electron/remote")
var electronFs = remote.require('fs') ;

import {
  APP_CMD_SET_WIRTE_SYSTEM_DATA,
  APP_CMD_SET_READ_SYSTEM_DATA,
  APP_CMD_GET_SYSTEM_DATA,
} from '../../../../js/constants/IndoorConstants'

export default {
   data () {
    return {
        ReadData: {
          Length: 1,
          Address: '',
          Data: '',
        },
        WirteData: {
          Length: 1,
          Address: '',
          Data: 0,
        },
    }
  },
  components: {
    InputNumber,
    InputHex
  },

  methods: {
    sendWirteDataMsg () {
      ipcRenderer.send(APP_CMD_SET_WIRTE_SYSTEM_DATA, {
        Length: this.WirteData.Length,
        Address: this.WirteData.Address,
        Data: this.WirteData.Data,
      })
      
    },

    sendReadDataMsg () {
      ipcRenderer.send(APP_CMD_SET_READ_SYSTEM_DATA, {
        Length: this.ReadData.Length,
        Address: this.ReadData.Address,
      })
      
    },
  },

  created: function () {
     //Serial Data 
     ipcRenderer.on(APP_CMD_GET_SYSTEM_DATA, (event, arg) => {
        let uint8ModbusData = [], uint16MudbusData = [], int16MudbusData = [];

        uint8ModbusData = arg.slice(0, arg.length - 2);
        uint8ModbusData = uint8ModbusData.slice(3);

        for (let i = 0; i < (arg[2]/2); i++) {
          uint16MudbusData[i] = ((uint8ModbusData[i*2] << 8) | (uint8ModbusData[i*2 + 1]))
          if(uint16MudbusData[i] & 0x8000) {
            int16MudbusData[i] = -(65536 - uint16MudbusData[i]);
          } else {
            int16MudbusData[i] = uint16MudbusData[i];
          }
        }

        console.log("Read Param", arg);
        console.log("int16MudbusData[0]:", int16MudbusData[0]);

        this.ReadData.Data = int16MudbusData[0];
      })
  },

}
</script>

<style lang="less" scoped>
.progress-box {
  display: flex;
  align-items: center;
}
.el-select {
  width:100% !important;
  height:32px !important;
}


</style>
