<template>
    <div id="wrapper">
        <el-tabs style="height: 220px;" v-model="mode" >
            <el-tab-pane value="Outdoor" :disabled="!ChangeEn" label="自变量灵巧手监控"><WaterCooling></WaterCooling></el-tab-pane>
            <el-tab-pane :disabled="!ChangeEn" :label="$t('Title.Information')" ><system-information></system-information></el-tab-pane>
        </el-tabs>
    </div>  
</template>
<script>
import { EventBus } from "../Utils/EventBus.js"
import { ipcRenderer } from 'electron';
import WaterCooling from '@/components/LandingPage/WaterCoolingPage' 
import SystemInformation from '@/components/LandingPage/SystemInformation'
import {
  APP_EVENT_CLEAN_DATA,
  APP_REPORT_DIALOG_PROMPT,
} from '../js/constants/ElectronConstants'
 
export default {
    name: 'landing-page',
    components: { WaterCooling, SystemInformation},
    data () {
      return {
        ChangeEn:true,
        mode: '',
      }
    },
    created: function () {
      ipcRenderer.on('APP_EVENT_CHANGE_MODE', (event, arg) => {
        this.ChangeEn = arg
      })
      ipcRenderer.on(APP_REPORT_DIALOG_PROMPT, (event, arg) => {
        console.log("123 Msg >>", arg.ErrorCode)
        switch (arg.ErrorCode) {
          case 'no serial':
              alert(this.$t('settings.noConnect'))
            break;
          case 'send ok':
              alert(this.$t('settings.sendOK'))
            break;
          case 'send ng':
              alert(this.$t('settings.sendNG'))
            break;
          case 'password error':
              alert(this.$t('settings.passwordNG'))
            break;
          case 'address error':
              alert(this.$t('settings.addressNG'))
            break;
          default:
            break;
        }
      });
      EventBus.$on(APP_REPORT_DIALOG_PROMPT, (event) => {
        switch (event.ErrorCode) {
          case 'no serial':
              alert(this.$t('settings.noConnect'))
            break;
          case 'send ok':
              alert(this.$t('settings.sendOK'))
            break;
          case 'send ng':
              alert(this.$t('settings.sendNG'))
            break;
          case 'password error':
              alert(this.$t('settings.passwordNG'))
            break;
          case 'address error':
              alert(this.$t('settings.addressNG'))
            break;
          default:
            break;
        }
      });
    },
    watch: {
      ['mode'](value) {
        console.log(">>>", value)
        if (value == '1') {
          this.$store.dispatch('SetMode', 'indoor')
          //this.$store.dispatch('CleanFilelist') //清空路径
          console.log("Indoor");

          EventBus.$emit(APP_EVENT_CLEAN_DATA, 0);
        } else if (value == '0') {
          this.$store.dispatch('SetMode', 'outdoor')
          //this.$store.dispatch('CleanFilelist') //清空路径
          console.log("Outdoor");

           EventBus.$emit(APP_EVENT_CLEAN_DATA, 0);
        } else {
          // eslint
        }
          
      },
    },
}
</script>

<style scoped>
#wrapper {
  padding: 10px;
}
</style>

