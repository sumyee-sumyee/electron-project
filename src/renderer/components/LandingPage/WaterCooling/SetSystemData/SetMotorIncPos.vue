<template>
  <div class="manual-set">

    <el-row  style="margin-top:0px; ">
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机01增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[0]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机02增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[1]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机03增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[2]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机04增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[3]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机05增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[4]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
    </el-row>

        <el-row  style="margin-top:0px; ">
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机06增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[5]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机07增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[6]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机08增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[7]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机09增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[8]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机10增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[9]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
    </el-row>

    <el-row  style="margin-top:0px; ">
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机11增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[10]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机12增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[11]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机13增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[12]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机14增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[13]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="4">
        <div class="progress-box" style="margin-right: 10px;">
          <el-button type="text" size = "mini" style="margin-right:3px;">设置电机15增量位置:</el-button >
          <InputNumber :inputs.sync="MotorIncPos.Data[14]" style="min-width: 50px; max-width: 100px;" size="mini"> </InputNumber> 
        </div>
      </el-col>
      <el-col :span="2"><el-button type="text" style="margin-right:3px;"></el-button ></el-col>
    </el-row>

    <el-row  style="margin-top:1px; " type="flex" justify="center">
      <el-col :span="9" style="min-height:1px;">
        <div></div>
      </el-col>
      <el-col :span="6">
        <el-button style="width:80% " 
          type="primary" plain size="mini" 
          @click="sendMotorIncPosMsg">  
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
        MotorIncPos: {
          Data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        }
    }
  },
  components: {
    InputNumber,
  },
 
  methods: {
    sendMotorIncPosMsg () {
   
        const uint32Data = this.MotorIncPos.Data.map(v => {
            const num = Number(v);
            return num >>> 0;
        });
        //console.log('sendMotorIncPosMsg', uint32Data);
        ipcRenderer.send(APP_TOUCH_BUTTON_SEND_MULT_CMD, {
            CmdType: 'SetMotorIncPosCmd',
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
