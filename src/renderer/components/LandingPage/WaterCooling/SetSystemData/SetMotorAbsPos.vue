<template>
  <div class="manual-set">
    <el-row  style="margin-top:0px; ">
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机01绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机02绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机03绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机04绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机05绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
    </el-row>

    <el-row  style="margin-top:0px; ">
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机06绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机07绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机08绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机09绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机10绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
    </el-row>

        <el-row  style="margin-top:0px; ">
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机11绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机12绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机13绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机14绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机15绝对位置:</el-button >
          <InputNumber :inputs.sync="MotorAbsPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
    </el-row>

    <el-row  style="margin-top:4px; " type="flex" justify="center">
      <el-col :span="9" style="min-height:1px;">
        <div></div>
      </el-col>
      <el-col :span="6">
        <el-button style="width:80% " 
          type="primary" plain size="mini" 
          @click="sendMotorAbsPosMsg">  
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
import { APP_TOUCH_BUTTON_SEND_MULT_CMD } from '../../../../js/constants/IndoorConstants'
export default {
   data () {
    return {
      MotorAbsPos: {
          Data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        }
    }
  },
  components: {
    InputNumber,
  },
 
  methods: {
    sendMotorAbsPosMsg () {
        const uint32Data = this.MotorAbsPos.Data.map(v => {
            const num = Number(v);
            return num >>> 0;
        });
        //console.log('sendJointPosMsg', uint32Data);
        ipcRenderer.send(APP_TOUCH_BUTTON_SEND_MULT_CMD, {
            CmdType: 'SetMotorAbsPosCmd',
            Data: uint32Data,
        });
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
