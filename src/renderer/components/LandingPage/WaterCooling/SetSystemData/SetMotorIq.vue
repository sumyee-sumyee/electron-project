<template>
  <div >

    <el-row  style=" margin-top:0px; margin-left:15px; margin-right:15px;">
      <el-col :span="2" style="min-height:1px;">
        <div></div>
      </el-col>
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;" >电机01最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data01" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[0]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col>
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;">电机02最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data02" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[1]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col>
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;" >电机03最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data03" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[2]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col>  
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;" >电机04最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data04" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[3]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col>  
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;" >电机05最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data05" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[4]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col> 
      <el-col :span="2" style="min-height:1px;">
        <div></div>
      </el-col>
    </el-row>   


  <el-row  style="margin-top:5px; margin-left:15px; margin-right:15px;">
     <el-col :span="2" style="min-height:1px;">
        <div></div>
      </el-col>
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;" >电机06最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data06" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[5]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col>
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;">电机07最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data07" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[6]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col>
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;">电机08最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data08" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[7]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col>  
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;">电机09最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data09" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[8]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col>  
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;">电机10最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data10" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[9]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col> 
      <el-col :span="2" style="min-height:1px;">
        <div></div>
      </el-col>
  </el-row>   

  <el-row  style="margin-top:5px; margin-left:15px; margin-right:15px;">
     <el-col :span="2" style="min-height:1px;">
        <div></div>
      </el-col>
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;" >电机11最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data11" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[10]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col>
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;" >电机12最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data12" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[11]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col>
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;" >电机13最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data13" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[12]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col>  
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;" >电机14最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data14" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[13]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col>  
      <el-col :span="4" >
        <div class="progress-box">
          <el-button type="text" style="margin-right:5px;" >电机15最大电流:</el-button>
          <el-input v-model="MotorIqRead.Data15" style="width: 100%;" size="mini" readonly/>
          <InputHex :inputs.sync="MotorIqWrite.Data[14]" style="width: 100%;" size="mini" ></InputHex>
        </div>
      </el-col> 
      <el-col :span="2" style="min-height:1px;">
        <div></div>
      </el-col>
  </el-row>   

  
  <el-row  style="margin-top:0px; margin-left:15px; margin-right:15px;">
     <el-col :span="6" style="min-height:1px;">
        <div></div>
      </el-col>
      <el-col :span="8" >
        <el-button size="mini" @click="ReadMotorIq">读取电机最大电流</el-button>
      </el-col>
      <el-col :span="8" >
        <el-button size="mini" @click="WriteMotorIq">写入电机最大电流</el-button>
      </el-col> 
      <el-col :span="6" style="min-height:1px;">
        <div></div>
      </el-col>
  </el-row>   
</div>    
</template>

<script>
import InputNumber from '@/components/InputNumber'
import InputHex from '@/components/InputHex'
import { ipcRenderer } from 'electron'
import { APP_TOUCH_BUTTON_SEND_MULT_CMD } from '../../../../js/constants/IndoorConstants'
import { APP_TOUCH_BUTTON_READ_CMD } from '../../../../js/constants/IndoorConstants'
import { APP_REPORT_TOUCH_READ_DATA } from '../../../../js/constants/IndoorConstants'
export default {
    data () {
        return {
            MotorIqRead: {
                Data01: '',
                Data02: '',
                Data03: '',
                Data04: '',
                Data05: '',
                Data06: '',
                Data07: '',
                Data08: '',
                Data09: '',
                Data10: '',
                Data11: '',
                Data12: '',
                Data13: '',
                Data14: '',
                Data15: '',
            },
            MotorIqWrite: {
                Data: [80,80,80,80,80,80,80,80,80,80,80,80,80,80,80],
            },
        }
    },
    components: {
        InputNumber,
        InputHex
    },
    methods: {
        ReadMotorIq () {
            console.log("ReadMotorIq")
            ipcRenderer.send(APP_TOUCH_BUTTON_READ_CMD, {
                CmdType: 'ReadMotorIqCmd',
            });
        
        },
        WriteMotorIq () {
            const uint16Data = this.MotorIqWrite.Data.map(v => {
            const num = Number(v);
            return num < 0 ? (num & 0xFFFF) : num;
            });
            ipcRenderer.send(APP_TOUCH_BUTTON_SEND_MULT_CMD, {
                CmdType: 'SetMotorIqCmd',
                Data: uint16Data,
            });
        
        }
    },
    created: function () {
        ipcRenderer.on(APP_REPORT_TOUCH_READ_DATA, (event, arg) => {
            let uint8ModbusData = [], uint16MudbusData = [];
            console.log("recv:", arg)
            if ((arg[1] === 0x03) && (arg[2] === 30)) {
                uint8ModbusData = arg.slice(0, arg.length - 2);
                uint8ModbusData = uint8ModbusData.slice(3);
                for (let i = 0; i < (arg[2]/2); i++) {
                    uint16MudbusData[i] = ((uint8ModbusData[i*2] << 8) | (uint8ModbusData[i*2 + 1]))
                }

            
                this.MotorIqRead.Data01 = (uint16MudbusData[0] / 100).toString() + 'A';
                this.MotorIqRead.Data02 = (uint16MudbusData[1] / 100).toString() + 'A';
                this.MotorIqRead.Data03 = (uint16MudbusData[2] / 100).toString() + 'A';
                this.MotorIqRead.Data04 = (uint16MudbusData[3] / 100).toString() + 'A';
                this.MotorIqRead.Data05 = (uint16MudbusData[4] / 100).toString() + 'A';
                this.MotorIqRead.Data06 = (uint16MudbusData[5] / 100).toString() + 'A';
                this.MotorIqRead.Data07 = (uint16MudbusData[6] / 100).toString() + 'A';
                this.MotorIqRead.Data08 = (uint16MudbusData[7] / 100).toString() + 'A';
                this.MotorIqRead.Data09 = (uint16MudbusData[8] / 100).toString() + 'A';
                this.MotorIqRead.Data10 = (uint16MudbusData[9] / 100).toString() + 'A';
                this.MotorIqRead.Data11 = (uint16MudbusData[10] / 100).toString() + 'A';
                this.MotorIqRead.Data12 = (uint16MudbusData[11] / 100).toString() + 'A';
                this.MotorIqRead.Data13 = (uint16MudbusData[12] / 100).toString() + 'A';
                this.MotorIqRead.Data14 = (uint16MudbusData[13] / 100).toString() + 'A';
                this.MotorIqRead.Data15 = (uint16MudbusData[14] / 100).toString() + 'A';
         
            } 
        });
    }
}
</script>

<style scoped>
.progress-box {
  display: flex;
  align-items: center;
}
.el-col-4{
  margin-left: 8px;
}
</style>
