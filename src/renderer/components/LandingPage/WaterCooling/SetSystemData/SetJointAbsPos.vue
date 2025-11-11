<template>
  <div class="manual-set">
    <el-row  style="margin-top:0px; ">
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节01绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节02绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[1]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节03绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[2]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节04绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[3]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节05绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[4]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
    </el-row>

        <el-row  style="margin-top:0px; ">
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节06绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[5]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节07绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[6]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节08绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[7]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节09绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[8]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节10绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[9]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
    </el-row>

        <el-row  style="margin-top:0px; ">
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节11绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[10]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节12绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[11]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节13绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[12]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节14绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[13]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置关节15绝对位置:</el-button >
          <InputNumber :inputs.sync="JointPosData.Data[14]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
    </el-row>

    <el-row  style="margin-top:10px; margin-left:15px; margin-right:15px;">
     <el-col :span="5" style="min-height:1px;">
        <div></div>
      </el-col>
      <el-col :span="9" >
         <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">关节控制单位:</el-button >
          <el-input size="mini" v-model="showJointUnit" style="min-width: 70px; max-width: 150px;" readonly/>
        </div>
      </el-col>
      <el-col :span="8" >
        <el-button size="mini" @click="sendJointPosMsg">发送手动参数</el-button>
        <el-button size="mini" @click="switchJointUnit">切换关节单位</el-button>
      </el-col> 
      <el-col :span="6" style="min-height:1px;">
        <div></div>
      </el-col>
    </el-row>   
  </div>  
</template>

<script>
import InputNumber from '@/components/InputNumber'
import { ipcRenderer } from 'electron'
import { APP_TOUCH_BUTTON_SEND_MULT_CMD, APP_MAIN_SWITCH_JOINT_UNIT } from '../../../../js/constants/IndoorConstants'
export default {
   data () {
    return {
      showJointUnit: '度数(单位:1°)',
      JointPosData: {
          Data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        }
    }
  },
  components: {
    InputNumber,
  },
 
  methods: {
    sendJointPosMsg () {
       
        let int32Data = this.JointPosData.Data.map(v => Number(v));

        if (this.showJointUnit === '度数(单位:1°)') {
            int32Data = int32Data.map(val => {
              if (val < 0) {
                return Math.round(32768 - (Math.abs(val) * 65536) / 360);
              } else {
                return Math.round((val * 65536) / 360) + 32768;
              }
          });
        }
        console.log('sendJointPosMsg', int32Data);
        ipcRenderer.send(APP_TOUCH_BUTTON_SEND_MULT_CMD, {
            CmdType: 'SetJointAbsPosCmd',
            Data: int32Data,
        });
      
    },
    switchJointUnit () {
    
        if ( this.showJointUnit === '标量值') {
            this.showJointUnit = '度数(单位:1°)';
            for (let index = 0; index < this.JointPosData.Data.length; index++) {
                this.JointPosData.Data[index] = Math.round((this.JointPosData.Data[index] - 32768) * 360 / 65536);
            }
            ipcRenderer.send(APP_MAIN_SWITCH_JOINT_UNIT, {
                Type: 'Degree',
            })
        } else if (this.showJointUnit === '度数(单位:1°)') {
            this.showJointUnit = '标量值';
            for (let index = 0; index < this.JointPosData.Data.length; index++) {
                this.JointPosData.Data[index] = Math.round((this.JointPosData.Data[index] * 65536) / 360) + 32768;
            }
            ipcRenderer.send(APP_MAIN_SWITCH_JOINT_UNIT, {
                Type: 'Scalar',
            })
        }
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
.el-carousel__container {
transition: none !important;
}
.el-carousel__item {
transition: none !important;
}
</style>
