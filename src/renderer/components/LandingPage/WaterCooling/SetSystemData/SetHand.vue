<template>
  <div class="manual-set">
    <el-row  style="margin-top:15px; " type="flex" justify="center">
      <el-col :span="3" style="min-height:1px;">
        <div></div>
      </el-col>
      <el-col :span="6">
        <el-button style="width:80% " type="primary" plain size="small" @click="sendJointResetCmd">灵巧手关节复位</el-button> 
      </el-col>
      <el-col :span="6">
        <el-button style="width:80% " type="primary" plain size="small" @click="sendModeChageCmd">灵巧手模式切换</el-button> 
      </el-col>
      <el-col :span="6">
        <el-button style="width:80% " type="primary" plain size="small" @click="sendFlashSaveCmd">灵巧手参数保存</el-button> 
      </el-col>
      <el-col :span="3" style="min-height:1px;">
        <div></div>
      </el-col>
    </el-row> 
    <el-row  style="margin-top:25px; " type="flex" justify="center">
      <el-col :span="3" style="min-height:1px;">
        <div></div>
      </el-col>
      <el-col :span="6">
        <el-button style="width:80% " type="primary" plain size="small" @click="sendMotorZeroCheckCmd">全部电机零位校准</el-button> 
      </el-col>
      <el-col :span="6">
        <el-button style="width:80% " type="primary" plain size="small" @click="sendClearErrorCmd">全部电机故障清除</el-button> 
      </el-col>
      <el-col :span="6">
        <el-button style="width:80% " type="primary" plain size="small" @click="sendMotorReadyCmd">全部电机使能准备</el-button> 
      </el-col>
      <el-col :span="3" style="min-height:1px;">
        <div></div>
      </el-col>
    </el-row> 
  </div>  
</template>

<script>
import InputNumber from '@/components/InputNumber'
import { ipcRenderer } from 'electron'
import { APP_TOUCH_BUTTON_SEND_SINGLE_CMD } from '../../../../js/constants/IndoorConstants'
export default {
   data () {
    return {
    }
  },
  components: {
    InputNumber,
  },
 
  methods: {
     sendJointResetCmd () {
        ipcRenderer.send(APP_TOUCH_BUTTON_SEND_SINGLE_CMD, {
            CmdType: 'JointResetCmd',
        })
    },
    sendModeChageCmd () {
        ipcRenderer.send(APP_TOUCH_BUTTON_SEND_SINGLE_CMD, {
            CmdType: 'ModeSwitchCmd',
        })
    },
    sendFlashSaveCmd () {
        ipcRenderer.send(APP_TOUCH_BUTTON_SEND_SINGLE_CMD, {
            CmdType: 'FlashSaveCmd',
        })
    },
    sendMotorZeroCheckCmd () {
        ipcRenderer.send(APP_TOUCH_BUTTON_SEND_SINGLE_CMD, {
            CmdType: 'ZoreCheckCmd',
        })
    },
    sendClearErrorCmd () {
        ipcRenderer.send(APP_TOUCH_BUTTON_SEND_SINGLE_CMD, {
            CmdType: 'ClearErrorCmd',
        })
    },
    sendMotorReadyCmd () {
        ipcRenderer.send(APP_TOUCH_BUTTON_SEND_SINGLE_CMD, {
            CmdType: 'ReadyCmd',
        })
    },
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
