<template>
  <div >  
    <el-row style="margin-top: 15px;margin-left: 15px;" >
      <el-col :span="1">
      </el-col>
      <el-col :span="5">
        <div class="progress-box" >
          <el-button type="text" style="font-weight:600; width:40px; margin-right:5px;">端口</el-button>
          <el-select 
            class="select" 
            v-model="comport" 
            :disabled="this.currentStatue" 
            :no-data-text= "$t('placeholder.com')" 
            :placeholder="$t('placeholder.com')" 
            style="width:100%; margin-top:4px;">
            <el-option v-for="item in $store.state.SystemData.comOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <el-button style="margin-left:10px;" @click="refreshPortList" size="mini"  icon="el-icon-refresh"></el-button>
          <el-button 
            type="primary" 
            plain 
            v-if="currentStatue === false" 
            @click="startConnect" 
            size="mini"
            :disabled="$store.state.SystemData.comOptions.length===0">
            连接
          </el-button>
          <el-button type="primary" plain v-else @click="stopConnect" size="mini">断开</el-button>
        </div>
      </el-col>

      <el-col :span="4">
        <div class="progress-box" >
          <el-button type="text" style="font-weight:600; width:120px; margin-left:10px; margin-right:3px;">主控程序版本:</el-button>
          <el-input size="mini" v-model="HeaderData.MainVersion" readonly/>
        </div>
      </el-col>

      <el-col :span="4">
        <div class="progress-box" >
          <el-button type="text" style="font-weight:600; width:200px; margin-right:3px;">驱动程序版本:</el-button>
          <el-input size="mini" v-model="HeaderData.DriverVersion" readonly/>
        </div>
      </el-col>  

      <el-col :span="4">
        <div class="progress-box" >
          <el-button type="text" style="font-weight:600; width:200px; margin-right:3px;">硬件版本号:</el-button>
          <el-input size="mini"  v-model="HeaderData.HardwareVer" readonly/>
        </div>
      </el-col> 

       <el-col :span="4">
        <div class="progress-box" >
          <el-button type="text" style="font-weight:600; width:200px; margin-right:3px;">左右手:</el-button>
          <el-input size="mini"  v-model="HeaderData.HandType" readonly/>
        </div>
      </el-col> 

      <el-col :span="1">
        <div class="progress-box" >
        </div>
      </el-col> 
      <el-col :span="1">
        <div style="margin-top:4px;"> Ver:1.15</div>
      </el-col>
    </el-row> 
  </div>
</template>
<script>
import { ipcRenderer } from 'electron';
// import { setTimeout } from 'timers';
// import { EventBus } from "../../../../Utils/EventBus.js"
// import { LogUtils } from '../../../../json/LogUtils';
import {
    APP_EVENT_CONNECT_OK,
    APP_EVENT_CONNECT_NG,
    IPC_CHANNEL_STOP_DOWNLOAD,
    IPC_CHANNEL_REFRESH_COM_LIST,
    IPC_CHANNEL_START_CONNECT,
    APP_EVENT_COM_LIST,
  } from '../../../../js/constants/ElectronConstants'
  import {
    APP_REPORT_UART_DATA,
  } from '../../../../js/constants/IndoorConstants'
import { constants } from 'fs';

export default {
  name: 'landing-page',
  computed: {
    lang: {
        get() { return this.$store.state.SystemData.isCh},
        set() {}
      },
    comport: {
        get () { return this.$store.state.SystemData.comValue },
        set (value) { this.$store.dispatch('SetComPort', value) }
      }
  },
  data() {
    return {
      // comport: '',
      HeaderData: {
        MainVersion: '',
        DriverVersion: '',
        HardwareVer: '',
        HandType: ''
      },
      currentStatue: false,
      csbStatue: 'close',
    }

  },
  methods: {
    changelan () {
      this.$store.dispatch('ChangeLanFun')
    }, 
    refreshPortList () {
      ipcRenderer.send(IPC_CHANNEL_REFRESH_COM_LIST, 0)
    },
    startConnect () {
      ipcRenderer.send(IPC_CHANNEL_START_CONNECT, this.comport)
      this.currentStatue = true;
    },
    stopConnect () {
      ipcRenderer.send(IPC_CHANNEL_STOP_DOWNLOAD, 0)
      this.currentStatue = false;
    },
    // onComSelect (value) {
    //   console.log('onComSelect selected:', value)
    //   // this.$store.dispatch('SetComPort', value);
    // },
  },

  created: function () {
    console.log(this.$store.state.SystemData,'$store.state.SystemData.comOptions')
    ipcRenderer.on(APP_EVENT_CONNECT_OK, (event, arg) => {
      if (this.$store.state.SystemData.MonitorMode=== 'outdoor') {
        this.currentStatue = true;
      } 
    })
    ipcRenderer.on(APP_EVENT_CONNECT_NG, (event, arg) => {
      if (this.$store.state.SystemData.MonitorMode === 'outdoor') {
        this.currentStatue = false;
      }
    })
    ipcRenderer.on('APP_EVENT_COM_LIST', (event, comList) => {
        this.$store.dispatch('SetComList', comList);
    });

    

    //Serial Data 
    ipcRenderer.on(APP_REPORT_UART_DATA, (event, arg) => {
      let uint8ModbusData = [], uint16MudbusData = [];

      uint8ModbusData = arg.slice(0, arg.length - 2);
      uint8ModbusData = uint8ModbusData.slice(3);

      for (let i = 0; i < (arg[2]/2); i++) {
        uint16MudbusData[i] = ((uint8ModbusData[i*2] << 8) | (uint8ModbusData[i*2 + 1]))
      }

      if (arg[2] === (0x5F * 2)) {
        this.HeaderData.HardwareVer = '0x' + uint16MudbusData[0].toString(16).toUpperCase().padStart(2, '0');
        this.HeaderData.MainVersion = '0x' + uint16MudbusData[1].toString(16).toUpperCase().padStart(2, '0');
      } else if (arg[2] === (0x30 * 2)) {
        this.HeaderData.DriverVersion = 'V' + uint16MudbusData[0x1061-0x1060].toString(16).toUpperCase().padStart(2, '0') + 
        ' V' + uint16MudbusData[0x1062-0x1060].toString(16).toUpperCase().padStart(2, '0') + 
        ' V' + uint16MudbusData[0x1063-0x1060].toString(16).toUpperCase().padStart(2, '0') +
        ' V' + uint16MudbusData[0x1064-0x1060].toString(16).toUpperCase().padStart(2, '0') + 
        ' V' + uint16MudbusData[0x1065-0x1060].toString(16).toUpperCase().padStart(2, '0') +
        ' V' + uint16MudbusData[0x1066-0x1060].toString(16).toUpperCase().padStart(2, '0');

        if (uint16MudbusData[0x1060-0x1060] === 0) {
            this.HeaderData.HandType = '右手' 
        } else if (uint16MudbusData[0x1060-0x1060] === 1) {
            this.HeaderData.HandType = '左手'
        }
        
      }
  })

      //程序版本号
      function addPreZero(NumberSource){
        if (NumberSource < 10) {
          return '00' + NumberSource
        } 
        else if (NumberSource < 100) {
          return '0' + NumberSource
        } else {
          return NumberSource
        }
      }
      
      //CRC32补零
      function CRC32(NumberSource){

        // if (NumberSource != null) 
        { 
          if (NumberSource < 0X10) 
          {
            return '000' + NumberSource.toString(16).toUpperCase()
          } 
          else if (NumberSource < 0X100)
          {
            return '00' + NumberSource.toString(16).toUpperCase()
          } 
          else if (NumberSource < 0X1000)
          {
            return '0' + NumberSource.toString(16).toUpperCase()
          } 
          else 
          {
            return NumberSource.toString(16).toUpperCase()
          }
        }
      }
  },
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

.el-select {
  
  height:32px !important;
}

.el-input__inner {
   height:28px !important;
   border-radius:0px !important;
   color:#222222 !important;
   font-size: 12px !important;
}

.line {
    height: 5px;
    background: #ba55d3;
}
.el-button--text {
  color:black;
}
</style>




