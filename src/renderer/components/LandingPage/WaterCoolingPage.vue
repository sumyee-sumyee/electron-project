<template>
  <div class="conter" >  
  <fieldset  style="height: 850px">
    <el-container style="height: 100%;" class="my-main">
      <el-header height=80%; width=100%;  class="my-main">
       <fieldset style="background-color:#C0C4CC; border-color: white; height: 58px;"> 
          <DriverInfoPage></DriverInfoPage>
       </fieldset> 
      </el-header>
      <div class="line"></div>
      <el-container>
        <el-aside  class= "my-main" tyle="width: 23%; height: 100%;">
            <WarningPage></WarningPage>
        </el-aside>

        <el-container>
          <el-main class="my-main"> 
            <fieldset  style=" background-color:#C0C4CC"> 
              <SystemInfoPage></SystemInfoPage>
            </fieldset>
          </el-main>

          <el-footer class="my-footer">
            <fieldset fieldset style=" border-color: white; height: 200px">
              <el-tabs type="border-card"  style=" height: 195px">
                <el-tab-pane style="height:110px" label="手动模式"><ManualSetPage></ManualSetPage></el-tab-pane>
                <el-tab-pane style="height:110px" label="故障屏蔽"><MaskSetPage></MaskSetPage></el-tab-pane>
                <el-tab-pane style="height:110px" label="参数修改"><SetEepromPage></SetEepromPage></el-tab-pane>
                <el-tab-pane style="height:110px" label="参数界面"><SetParamTablePage></SetParamTablePage></el-tab-pane>
                <el-tab-pane style="height:110px" label="数据监控"><ValueWatchPage></ValueWatchPage></el-tab-pane>
                <el-tab-pane style="height:110px" label="数据保存"><DataSavePage></DataSavePage></el-tab-pane>
              </el-tabs>
            </fieldset>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </fieldset>
  </div>
</template>
<script>
//Vue框架引用
// import { ipcRenderer } from 'electron';
// import { setTimeout } from 'timers';
// import { EventBus } from "../../Utils/EventBus.js"
// import { LogUtils } from '../../json/LogUtils';

//信息数据页面
import DriverInfoPage from '@/components/LandingPage/WaterCooling/SystemInformation/DriverInfoPage' 
import SystemInfoPage from '@/components/LandingPage/WaterCooling/SystemInformation/SystemInfoPage' 
import WarningPage from '@/components/LandingPage/WaterCooling/SystemInformation/WarningPage' 

//设置数据页面
import SetEepromPage from '@/components/LandingPage/WaterCooling/SetSystemData/SetEeprom' 
import ManualSetPage from '@/components/LandingPage/WaterCooling/SetSystemData/ManualSet' 
import MaskSetPage from '@/components/LandingPage/WaterCooling/SetSystemData/MaskSet' 
import BurnParamPage from '@/components/LandingPage/WaterCooling/SetSystemData/BurnParam' 
import ValueWatchPage from '@/components/LandingPage/WaterCooling/SetSystemData/ValueWatch' 
import DataSavePage from '@/components/LandingPage/WaterCooling/SetSystemData/DataSave' 
import SetParamTablePage from '@/components/LandingPage/WaterCooling/SetSystemData/SetParamTable'
import {
    APP_EVENT_CONNECT_OK,
    APP_EVENT_CONNECT_NG,
    IPC_CHANNEL_STOP_DOWNLOAD,
    IPC_CHANNEL_REFRESH_COM_LIST,
    IPC_CHANNEL_START_CONNECT,
    IPC_CHANNEL_DATA_REFRESH,
    APP_EVENT_INIT_XLSX,
    APP_EVENT_CLOSE_XLSX,
    APP_EVENT_OPEN_XLSX,
    APP_EVENT_WRITE_XLSX,
    APP_EVENT_STOP_XLSX,
    APP_EVENT_CLEAN_DATA,
    IPC_CHANNEL_DATA_REFRESH_CUBE
  } from '../../js/constants/ElectronConstants'
import { constants } from 'fs';

export default {
  name: 'landing-page',
  components: {DriverInfoPage, SystemInfoPage, WarningPage, SetEepromPage, ManualSetPage, MaskSetPage, BurnParamPage,ValueWatchPage, DataSavePage, SetParamTablePage},
  computed: {
   
  },
  data() {
    return {

    }
  },
  methods: {
     
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
.my-menu /deep/ .el-menu-item {
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
}

.el-hanler {
  padding: 5px !important;
  background-color: #606266;
}


.el-select {
  
  height:32px !important;
}

.el-input__inner {
   height:24px !important;
   border-radius:0px !important;
   color:#222222 !important;
   font-size: 12px !important;
}

.el-button--text {
  color:black !important;
}
.el-input__icon {
  line-height:30px  !important;
}

.line {
    height: 5px;
    background: #ba55d3;
}
.el-button--text {
  color:black;
}
.my-main{
  line-height: unset !important;
  text-align: left !important;
  
  padding-top: 2px !important;
  padding-bottom: 7px !important;
  padding-right: 2px !important;
  padding-left: 2px !important;

}
.conter .my-footer{
  
  background-color: #d7e4f2; 
  height: 200px !important;
  line-height: unset !important;
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  padding-right: 2px !important;
  padding-left: 2px !important;
}
</style> 





