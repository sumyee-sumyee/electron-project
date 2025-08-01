<template>
  <div >
    <el-row  style="margin-top:5px;  margin-left:15px; margin-right:15px;">
      <el-col :span="2">
        <el-button type="text" size="small" style='margin-top:3px;'>
          参数文件:
        </el-button>
      </el-col>
      <el-col :span="12" style='margin-top:5px;'>
        <el-input v-model="filename" size="mini" readonly></el-input>
      </el-col>
      <el-col :span="4" style='margin-top:5px;'>
        <el-button 
          style="margin-left:15px;" 
          type="primary" size='mini' 
          plain  @click="loadFile"> 
            加载文件
        </el-button> 
      </el-col>
    </el-row>   
    
    <el-row style=" margin-left:15px; margin-right:15px;">
      <el-col :span="2">
        <el-button type="text" style="margin-right:3px;" size="small">
          驱动校验和:
        </el-button>
      </el-col >
      <el-col style='margin-top:3px; margin-right:30px;' :span="3">
        <el-input v-if="(this.driveCheck==='文件错误')"
          size="mini" readonly v-model="driveCheck" 
          DangerColor='danger' />
        <el-input v-else size="mini" readonly
          v-model="driveCheck" />
      </el-col>
      <el-col style='margin-right:3px;' :span="2">
        <el-button type="text" style="margin-right:3px;" size="small">
          系统校验和:
        </el-button>
      </el-col>
      <el-col style='margin-top:3px; margin-right:20px;' :span="3">
        <el-input v-if="(this.systemCheck==='文件错误')"
          size="mini" readonly v-model="systemCheck" 
          DangerColor='danger' />
        <el-input v-else size="mini" readonly
          v-model="systemCheck" />
      </el-col>
      <el-col :span="2">
          <el-button type="text" style="margin-right:8px;" size="small">
              烧录密码:
          </el-button>
      </el-col>
      <el-col :span="3"  style='margin-top:3px;'>
          <el-input v-model="BurnPasswordInput"></el-input>
      </el-col>
    </el-row>  

    <el-row style=" margin-left:15px; margin-right:15px; margin-top:5px;">
      <el-col :span="2" style='margin-right:3px;'>
        <el-button type="text" size="small">烧录进度:</el-button>
      </el-col>
      <el-col :span="12" style='margin-top:3px;'>
        <el-progress 
          :text-inside="true" 
          style="width: 100%;" 
          stroke-width="30" 
          :percentage="progress">
        </el-progress>
      </el-col>
      <el-col :span="4" style='margin-top:3px;'>
        <el-button size='mini' type="primary"
          :disabled="isBurn===false"
          plain style="margin-left:15px;" 
          @click="sendBurnEEMsg"> 
          开始烧录 
        </el-button> 
      </el-col>
    </el-row>    
  </div>    
</template>

<script>
  import InputNumber from '@/components/InputNumber'
  import InputHex from '@/components/InputHex'
  // import { ipcRenderer } from 'electron'
  import {
    APP_EVENT_DOWNLOAD_OK,
    APP_EVENT_SET_EEPROM_OK,
    APP_EVENT_SET_EEPROM_NG,
    APP_EVENT_PASSWORD_NG,
    APP_EVENT_FINISH,
    IPC_CHANNEL_OPEN_FILE_DIALOG,
    IPC_CHANNEL_BURN_PASSWORD,
    IPC_CHANNEL_PASSWORD,
    IPC_CHANNEL_SEND_FILE_DIALOG,
    APP_REPORT_DIALOG_PROMPT,
  } from '../../../../js/constants/ElectronConstants'
  import { EventBus } from "../../../../Utils/EventBus"

export default {
   data () {
    return {
      progress: 0,
      BurnPasswordInput: '',
      isBurn: false,
      driveCheck: '',
      systemCheck: '',
      filename:'',
    }
  },
  components: {InputNumber,InputHex},
  methods: {
    sendBurnEEMsg () {
       let PasswordTmp
      //console.log('this.BurnPasswordInput.length  >>', this.BurnPasswordInput.length )
      if (this.BurnPasswordInput.length === 14) {
        //Get Password 
        let PassWordInput = new Array(7);
        if (this.BurnPasswordInput === '88888888888888') {
            PasswordTmp = '249287F45F75F0';
        } else {
            PasswordTmp = this.BurnPasswordInput;
        }
        for(var i=0; i<7; i++){
            PassWordInput[i] = parseInt(PasswordTmp.slice(2*i, 2+2*i), 16);
        }

        this.progress = 0;
        // ipcRenderer.send(APP_CMD_SEND_PASSWORD, 
        // {
        //   Password: PassWordInput,
        // })
      } else {
        EventBus.$emit(APP_REPORT_DIALOG_PROMPT, {ErrorCode:'password error'});
      }  
    },
    loadFile () {
      // ipcRenderer.send(APP_CMD_MEM_OUTDOOR_LOAD_FILE, this.filename)
      console.log("conslosss");
    }
  },
  
  created: function () {
    //获取Bin文件信息
    // ipcRenderer.on(APP_CMD_OUT_EEPROM_FILE_NAME, (event, args) => {
    //     if (null != args) {
    //         this.filename   = args.filePath;
    //         this.isBurn = args.isTrue;
    //         if (args.isTrue) {
    //           this.driveCheck = '0x'+ addZero(args.driveChk);
    //           this.systemCheck = '0x'+ addZero(args.systemChk);
    //         } else {
    //           this.driveCheck = "文件错误"
    //           this.systemCheck = "文件错误"
    //         }
    //     }

    //     //补充0
    //     function addZero(NumberSource){
    //       if (NumberSource < 16) {
    //         return '0' + NumberSource.toString(16)
    //       } else {
    //         return NumberSource.toString(16)
    //       }
    //     }
    // });
   
    // ipcRenderer.on(APP_REPORT_MEM_OUTDOOR_PROGRAM, (evnet, args) => {
    //     console.log('progress>>', args.percent);

    //     if(args != null) {
    //         if ('download' == args.state) {
    //             /* 处于正常的下载状态 */
    //             this.progress = Math.floor(args.percent);
    //         } else if('complete' == args.state) {
    //             this.progress = 100;
    //         } 
    //     }
    // })
    
  

   
  },
}
</script>

<style scoped>
.progress-box {
    display: flex;
    align-items: center;
}
</style>
