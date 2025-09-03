<template>
  <div >
      <el-row :gutter="20" style="margin-top:5px; margin-bottom:15px; margin-left:15px; margin-right:15px;">
        <el-col :span="2" style='margin-right:25px; ' >
            <el-button type="text" size="small">{{$t('SettingInfo.SaveInfo')}}</el-button>
        </el-col>
        <el-col :span="14" style='margin-top:3px;'>
            <el-input 
              class="my-input" 
              v-model="filename" 
              :placeholder="$t('SettingInfo.SaveTip')"
              size="small" readonly>
            </el-input>
        </el-col>
        <el-col :span="4" style='margin-top:3px;'>
            <el-button 
              type="primary" 
              size='mini' 
              plain 
              style="width:75%; margin-right:3px;" 
              @click="SaveFile"
              :disabled='this.isSaving'>
              {{$t('SettingInfo.SaveButton')}}
            </el-button> 
        </el-col>
    </el-row>  


    <el-row :gutter="20" style="margin-top:15px;  margin-left:15px; margin-right:15px;">
        <el-col :span="2" style='margin-right:25px; ' >
            <el-button type="text" size="small">{{$t('SettingInfo.SaveEnable')}}</el-button>
        </el-col>
        <el-col :span="4" style="margin-right:5px;">
          <el-switch  
          size="mini"
            style="margin-top:10px;" 
            v-model="switchValue" 
            active-color="#13ce66" 
            inactive-color="#ff4949" 
            :active-text="$t('serialData.open')" 
            :inactive-text="$t('serialData.close')"
            :disabled="$store.state.SystemData.OutcsvFilePath===null">
          </el-switch>
        </el-col>

       
    </el-row>   

  </div>   
</template>
<script>
  import InputNumber from '@/components/InputNumber'
  import InputHex from '@/components/InputHex'
  import { ipcRenderer } from 'electron'
  import {APP_EVENT_STORE_FILE_DIALOG} from '../../../../js/constants/IndoorConstants'
  import {
    APP_EVENT_INIT_XLSX,
    APP_EVENT_CLOSE_XLSX,
    IPC_CHANNEL_STORE_FILE_DIALOG,
  } from '../../../../js/constants/ElectronConstants'
export default {
  data () {
    return {
      switchValue:false,
      isSaving:false,
      SysSwitch:false,
      TempSwitch:false,
      isTemp:false,
      isSys:false,
    }
  },
  components: {
    InputNumber,
    InputHex
  },
  computed: {
    filename: {
      get () { return this.$store.state.SystemData.OutcsvFilePath },
      set (value) {this.$store.dispatch('SetOutCsvFilePath', value)}
    }
  },
  methods: {
    SaveFile () {
      ipcRenderer.send(IPC_CHANNEL_STORE_FILE_DIALOG, 0)
    },
    openTemp () {
      ipcRenderer.send('openTempWindow')
      this.isTemp = true
    },
    openSys () {
      ipcRenderer.send('openSysWindow')
      this.isSys = true
    }
  },
  created: function () {
    ipcRenderer.on('closeTemp', (event, arg) => {
      this.isTemp = false
    })
    ipcRenderer.on('closeSys', (event, arg) => {
      this.isSys = false
    })
    ipcRenderer.on('APP_EVENT_STORE_FILE_DIALOG', (event, filePath) => {
        console.log(filePath)
        this.$store.dispatch('SetOutCsvFilePath', filePath)
    })
  },
  watch: {
    ['switchValue'](value) {
        if(this.$store.state.SystemData.OutcsvFilePath) {
            if (value) {
                this.isSaving = true;
                ipcRenderer.send(APP_EVENT_INIT_XLSX, 0)
            } else { 
                this.isSaving = false;
                ipcRenderer.send(APP_EVENT_CLOSE_XLSX, 0)
            }
        } else {
            //this.switchValue = false
            this.$alert(this.$t('settings.xlsxTip'), this.$t('settings.warn'), {
                confirmButtonText: this.$t('settings.true'),
                callback: action => {}
            });
        }
    }, 
    // ['TempSwitch'] (value) {
    //   if (value) {
    //     ipcRenderer.send('openTempWindow')
    //   } else {
    //     ipcRenderer.send('closeTempWindow')
    //   }
    // },
    // ['SysSwitch'](value) {
    //   if (value) {
    //     ipcRenderer.send('openSysWindow')
    //   } else {
    //     ipcRenderer.send('closeSysWindow')
    //   }
    // },
  }
}
</script>

<style lang="less" scoped>
.progress-box {
  display: flex;
  align-items: center;
}


</style>
