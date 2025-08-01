<template>
    <div class="out-table">
      <div class="block">
        <el-carousel
          height="150px"
          indicator-position="outside"
          :autoplay="false"
        >
          <el-carousel-item>
            <el-checkbox-group v-model="checkList1" style="margin-top:2px">
              <el-row >
                <el-col :span="2" style="min-height:1px;" >
                  <div></div>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="1">吸气温度传感器1故障&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="2">排气温度传感器1故障&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="3">冷凝温度传感器1故障&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="4">蒸发温度传感器1故障&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="5">液管温度传感器1故障&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="6">低压压力传感器1故障&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="7">高压压力传感器1故障&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="8">冷凝温度1过高告警&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="9">冷凝温度1过高锁定&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="10">蒸发温度1过低告警&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="11">蒸发温度1过低锁定&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="12">蒸发温度1过高告警&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="13">蒸发温度1过高锁定&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="14">排气温度1过高告警&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="15">排气温度1过高锁定&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="20">
                  <el-button size="mini" @click="saveCheckboxGroup1">确认【氟系统1传感器故障屏蔽】修改</el-button>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
            </el-checkbox-group>
          </el-carousel-item>
        
          <el-carousel-item>
            <el-checkbox-group v-model="checkList2" style="margin-top:2px">
              <el-row >
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="1">高压开关1告警&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="2">风机1驱动故障&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="3">高压开关1故障&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="4">高压开关1锁定&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="5">压缩机1通讯故障&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="6">压缩机1AC电流过高告警</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="7">压缩机1驱动故障告警&ensp;</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
            
              <el-row >
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="8">压缩机1AC电流过高锁定</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="9">压缩机1驱动故障锁定&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="10">风机1通讯故障&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="11">风机1AC电流过高告警</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="12">风机1驱动故障告警&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="13">风机1AC电流过高锁定&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="14">风机1驱动故障锁定&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="20">
                  <el-button size="mini" @click="saveCheckboxGroup2">确认【氟系统1驱动故障屏蔽】修改</el-button>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
            </el-checkbox-group>
          </el-carousel-item>

          <el-carousel-item>
            <el-checkbox-group v-model="checkList3" style="margin-top:2px">
              <el-row >
                <el-col :span="2" style="min-height:1px;" >
                  <div></div>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="1">吸气温度传感器2故障&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="2">排气温度传感器2故障&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="3">冷凝温度传感器2故障&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="4">蒸发温度传感器2故障&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="5">液管温度传感器2故障&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="6">低压压力传感器2故障&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="7">高压压力传感器2故障&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="8">冷凝温度2过高告警&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="9">冷凝温度2过高锁定&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="10">蒸发温度2过低告警&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="11">蒸发温度2过低锁定&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="12">蒸发温度2过高告警&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="13">蒸发温度2过高锁定&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="14">排气温度2过高告警&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="15">排气温度2过高锁定&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="20">
                  <el-button size="mini" @click="saveCheckboxGroup3">确认【氟系统2传感器故障屏蔽】修改</el-button>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
            </el-checkbox-group>
          </el-carousel-item>

          <el-carousel-item>
            <el-checkbox-group v-model="checkList4" style="margin-top:2px">
              <el-row >
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="1">高压开关2告警&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="2">风机2驱动故障&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="3">高压开关2故障&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="4">高压开关2锁定&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="5">压缩机2通讯故障&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="6">压缩机2AC电流过高告警</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="7">压缩机2驱动故障告警&ensp;</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row >
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="8">压缩机2AC电流过高锁定</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="9">压缩机2驱动故障锁定&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="10">风机2通讯故障&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="11">风机2AC电流过高告警</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="12">风机2驱动故障告警&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="13">风机2AC电流过高锁定&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="14">风机2驱动故障锁定&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="20">
                  <el-button size="mini" @click="saveCheckboxGroup4">确认【氟系统2驱动故障屏蔽】修改</el-button>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
            </el-checkbox-group>
          </el-carousel-item>
        
          <el-carousel-item>
            <el-checkbox-group v-model="checkList5" style="margin-top:10px">
              <el-row >
                <el-col :span="3">
                  <el-checkbox :label="1">水温过高告警&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="2">水温过低告警&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="3">环境温度传感器故障</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="4">系统水温传感器故障</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="5">出水温度传感器故障</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="6">进水温度传感器故障</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="7">出水压力传感器故障&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="8">进水压力传感器故障&ensp;&ensp;</el-checkbox>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="3">
                  <el-checkbox :label="9">水泵压差高锁定</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="10">水泵压差低锁定</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="11">补水告警&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="12">水流开关故障&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="13">水流开关保护锁定&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="14">水温差过大告警&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="15">水泵压差高告警&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="3">
                  <el-checkbox :label="16">水泵压差低告警&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="20">
                  <el-button size="mini" @click="saveCheckboxGroup5">确认【水系统传感器故障屏蔽】修改</el-button>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
            </el-checkbox-group>
          </el-carousel-item>

          <el-carousel-item>
            <el-checkbox-group v-model="checkList6" style="margin-top:20px">
              <el-row >
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="6">
                  <el-checkbox :label="1">水泵通讯故障&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="6">
                  <el-checkbox :label="2">水泵AC电流过高告警</el-checkbox>
                </el-col>
                <el-col :span="6">
                  <el-checkbox :label="3">水泵驱动故障告警</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row >
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="6">
                  <el-checkbox :label="4">水泵AC电流过高锁定</el-checkbox>
                </el-col>
                <el-col :span="6">
                  <el-checkbox :label="5">水泵驱动故障锁定&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="6">
                  <el-checkbox :label="6">水流开关保护告警</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center" style="margin-top:20px">
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="20">
                  <el-button size="mini" @click="saveCheckboxGroup6">确认【水系统驱动故障屏蔽】修改</el-button>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
            </el-checkbox-group>
          </el-carousel-item>

          <el-carousel-item>
            <el-checkbox-group v-model="checkList7" style="margin-top:10px">
              <el-row >
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="1">CAN通讯故障</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="2">上位机通讯故障</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="3">显示器通讯故障</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="4">相序检测故障</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="5">交流电压告警 </el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="6">水浸开关锁定</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="7">门禁开关锁定&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="8">烟雾开关锁定&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="9">外接告警&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="10">扇热风机故障</el-checkbox>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
                <el-col :span="20">
                  <el-button size="mini" @click="saveCheckboxGroup7">确认【系统故障屏蔽】修改</el-button>
                </el-col>
                <el-col :span="2" style="min-height:1px;">
                  <div></div>
                </el-col>
              </el-row>
            </el-checkbox-group>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </template>
  
  <script>
    import { ipcRenderer } from 'electron'
    import {
      APP_SEND_SIGNAL_DATA_06_CMD
    } from '../../../../js/constants/IndoorConstants'
  export default {
    name: "OutTable",
    data() {
      return {
        checkList1: [],
        checkList2: [],
        checkList3: [],
        checkList4: [],
        checkList5: [],
        checkList6: [],
        checkList7: [],
        EEPROMType: {
          Length: 1,
          Address: 0,
          Data: 0,
        }
      };
    },
    props: {
      tabItem: String
    },
    methods: {
      saveCheckboxGroup1(){
        console.log("checkList1>>", this.checkList1);
        this.EEPROMType.Data = 0;
        for (var i = 0; i < this.checkList1.length; i++) {
          switch(this.checkList1[i]) {
            case 1: 
              this.EEPROMType.Data |= 0x0001; 
              break;
            case 2:
              this.EEPROMType.Data |= 0x0002; 
              break;
            case 3:
              this.EEPROMType.Data |= 0x0004; 
              break;
            case 4:
              this.EEPROMType.Data |= 0x0008;  
              break;
            case 5:
              this.EEPROMType.Data |= 0x0010; 
              break;
            case 6:
              this.EEPROMType.Data |= 0x0020; 
              break;
            case 7:
              this.EEPROMType.Data |= 0x0040; 
              break;
            case 8:
              this.EEPROMType.Data |= 0x0080; 
              break;
            case 9:
              this.EEPROMType.Data |= 0x0100; 
              break;
            case 10:
              this.EEPROMType.Data |= 0x0200;  
              break;
            case 11:
              this.EEPROMType.Data |= 0x0400; 
              break;
            case 12:
              this.EEPROMType.Data |= 0x0800; 
              break;
            case 13:
              this.EEPROMType.Data |= 0x1000; 
              break;
            case 14:
              this.EEPROMType.Data |= 0x2000; 
              break;
            case 15:
              this.EEPROMType.Data |= 0x4000; 
              break;
            default:
                break;
          }
        }

        this.EEPROMType.Address = 234;
        ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
          Length: this.EEPROMType.Length,
          Address: this.EEPROMType.Address,
          Data: this.EEPROMType.Data,
        })
           
      },
      saveCheckboxGroup2(){
        console.log("checkList2>>", this.checkList2);
        this.EEPROMType.Data = 0;
        for (var i = 0; i < this.checkList2.length; i++) {
          switch(this.checkList2[i]) {
            case 1: 
              this.EEPROMType.Data |= 0x0004; 
              break;
            case 2:
              this.EEPROMType.Data |= 0x0008; 
              break;
            case 3:
              this.EEPROMType.Data |= 0x0010; 
              break;
            case 4:
              this.EEPROMType.Data |= 0x0020; 
              break;
            case 5:
              this.EEPROMType.Data |= 0x0040; 
              break;
            case 6:
              this.EEPROMType.Data |= 0x0080; 
              break;
            case 7:
              this.EEPROMType.Data |= 0x0100; 
              break;
            case 8:
              this.EEPROMType.Data |= 0x0200; 
              break;
            case 9:
              this.EEPROMType.Data |= 0x0400; 
              break;
            case 10:
              this.EEPROMType.Data |= 0x0800; 
              break;
            case 11:
              this.EEPROMType.Data |= 0x1000; 
              break;
            case 12:
              this.EEPROMType.Data |= 0x2000; 
              break;
            case 13:
              this.EEPROMType.Data |= 0x4000; 
              break;
            case 14:
              this.EEPROMType.Data |= 0x8000; 
              break;
            default:
                break;
          }
        }

        this.EEPROMType.Address = 235;
        ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
          Length: this.EEPROMType.Length,
          Address: this.EEPROMType.Address,
          Data: this.EEPROMType.Data,
        })
      },
      saveCheckboxGroup3(){
        console.log("checkList3>>", this.checkList3);
        this.EEPROMType.Data = 0;
        for (var i = 0; i < this.checkList3.length; i++) {
          switch(this.checkList3[i]) {
            case 1: 
              this.EEPROMType.Data |= 0x0001; 
              break;
            case 2:
              this.EEPROMType.Data |= 0x0002; 
              break;
            case 3:
              this.EEPROMType.Data |= 0x0004; 
              break;
            case 4:
              this.EEPROMType.Data |= 0x0008;  
              break;
            case 5:
              this.EEPROMType.Data |= 0x0010;  
              break;
            case 6:
              this.EEPROMType.Data |= 0x0020; 
              break;
            case 7:
              this.EEPROMType.Data |= 0x0040; 
              break;
            case 8:
              this.EEPROMType.Data |= 0x0080; 
              break;
            case 9:
              this.EEPROMType.Data |= 0x0100;  
              break;
            case 10:
              this.EEPROMType.Data |= 0x0200; 
              break;
            case 11:
              this.EEPROMType.Data |= 0x0400; 
              break;
            case 12:
              this.EEPROMType.Data |= 0x0800; 
              break;
            case 13:
              this.EEPROMType.Data |= 0x1000; 
              break;
            case 14:
              this.EEPROMType.Data |= 0x2000; 
              break;
            case 15:
              this.EEPROMType.Data |= 0x4000; 
              break;
            default:
                break;
          }
        }

        this.EEPROMType.Address = 236;
        ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
          Length: this.EEPROMType.Length,
          Address: this.EEPROMType.Address,
          Data: this.EEPROMType.Data,
        })
      }, 
      saveCheckboxGroup4(){
        console.log("checkList4>>", this.checkList4);
        this.EEPROMType.Data = 0;
        for (var i = 0; i < this.checkList4.length; i++) {
          switch(this.checkList4[i]) {
            case 1: 
              this.EEPROMType.Data |= 0x0004; 
              break;
            case 2:
              this.EEPROMType.Data |= 0x0008; 
              break;
            case 3:
              this.EEPROMType.Data |= 0x0010; 
              break;
            case 4:
              this.EEPROMType.Data |= 0x0020; 
              break;
            case 5:
              this.EEPROMType.Data |= 0x0040; 
              break;
            case 6:
              this.EEPROMType.Data |= 0x0080; 
              break;
            case 7:
              this.EEPROMType.Data |= 0x0100; 
              break;
            case 8:
              this.EEPROMType.Data |= 0x0200; 
              break;
            case 9:
              this.EEPROMType.Data |= 0x0400; 
              break;
            case 10:
              this.EEPROMType.Data |= 0x0800; 
              break;
            case 11:
              this.EEPROMType.Data |= 0x1000; 
              break;
            case 12:
              this.EEPROMType.Data |= 0x2000; 
              break;
            case 13:
              this.EEPROMType.Data |= 0x4000; 
              break;
            case 14:
              this.EEPROMType.Data |= 0x8000; 
              break;
            default:
                break;
          }
        }

        this.EEPROMType.Address = 237;
        ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
          Length: this.EEPROMType.Length,
          Address: this.EEPROMType.Address,
          Data: this.EEPROMType.Data,
        })
      },
      saveCheckboxGroup5(){
        console.log("checkList5>>", this.checkList5);

        this.EEPROMType.Data = 0;
        for (var i = 0; i < this.checkList5.length; i++) {
          switch(this.checkList5[i]) {
            case 1: 
              this.EEPROMType.Data |= 0x0001; // 水温高温告警 bit0
              break;
            case 2:
              this.EEPROMType.Data |= 0x0002; // 进水压力传感器故障 bit7
              break;
            case 3:
              this.EEPROMType.Data |= 0x0004; // 环境温度传感器故障  bit2
              break;
            case 4:
              this.EEPROMType.Data |= 0x0008; // 水泵压差低告警 bit9
              break;
            case 5:
              this.EEPROMType.Data |= 0x0010; // 出水温度传感器故障  bit4
              break;
            case 6:
              this.EEPROMType.Data |= 0x0020; // 水流开关保护告警 bit11
              break;
            case 7:
              this.EEPROMType.Data |= 0x0040; // 补水警告 bit10
              break;
            case 8:
              this.EEPROMType.Data |= 0x0080; // 水温低温告警 bit1
              break;
            case 9:
              this.EEPROMType.Data |= 0x0100; // 出水压力传感器故障 bit6
              break;
            case 10:
              this.EEPROMType.Data |= 0x0200; //系统水温传感器故障  bit3
              break;
             case 11:
              this.EEPROMType.Data |= 0x0400; //水泵压差高告警 bit8
              break;
            case 12:
              this.EEPROMType.Data |= 0x0800; //进水温度传感器故障 bit5
              break;
            case 13:
              this.EEPROMType.Data |= 0x1000; //水流开关保护锁定 bit12
              break;
            case 14:
              this.EEPROMType.Data |= 0x2000; // 温差过大告警 bit13
              break;
            case 15:
              this.EEPROMType.Data |= 0x4000; //水流开关保护锁定 bit12
              break;
            case 16:
              this.EEPROMType.Data |= 0x8000; // 温差过大告警 bit13
              break;
            default:
                break;
          }
        }

        this.EEPROMType.Address = 238;
        ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
          Length: this.EEPROMType.Length,
          Address: this.EEPROMType.Address,
          Data: this.EEPROMType.Data,
        })
      },
      saveCheckboxGroup6(){
        console.log("checkList6>>", this.checkList6);
        this.EEPROMType.Data = 0;
        for (var i = 0; i < this.checkList6.length; i++) {
          switch(this.checkList6[i]) {
            case 1: 
              this.EEPROMType.Data |= 0x0001; 
              break;
            case 2:
              this.EEPROMType.Data |= 0x0002; 
              break;
            case 3:
              this.EEPROMType.Data |= 0x0004; 
              break;
            case 4:
              this.EEPROMType.Data |= 0x0008; 
              break;  
            case 5:
              this.EEPROMType.Data |= 0x0010; 
              break;
        
            default:
                break;
          }
        }

        this.EEPROMType.Address = 239;
        ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
          Length: this.EEPROMType.Length,
          Address: this.EEPROMType.Address,
          Data: this.EEPROMType.Data,
        })
       
      },
      saveCheckboxGroup7(){
        console.log("checkList7>>", this.checkList7);
        this.EEPROMType.Data = 0;
        for (var i = 0; i < this.checkList7.length; i++) {
          switch(this.checkList7[i]) {
            case 1: 
              this.EEPROMType.Data |= 0x0001; 
              break;
            case 2:
              this.EEPROMType.Data |= 0x0002; 
              break;
            case 3:
              this.EEPROMType.Data |= 0x0004; 
              break;
            case 4:
              this.EEPROMType.Data |= 0x0008; 
              break;
            case 5:
              this.EEPROMType.Data |= 0x0010; 
              break;
            case 6:
              this.EEPROMType.Data |= 0x0020; 
              break;
            case 7:
              this.EEPROMType.Data |= 0x0040; 
              break;
            case 8:
              this.EEPROMType.Data |= 0x0080; 
              break;
            case 9:
              this.EEPROMType.Data |= 0x0100; 
              break;
            case 10:
              this.EEPROMType.Data |= 0x0200; 
              break;
            default:
                break;
          }
        }

        this.EEPROMType.Address = 240;
        ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
          Length: this.EEPROMType.Length,
          Address: this.EEPROMType.Address,
          Data: this.EEPROMType.Data,
        }) 
      }

    },
    computed:{
      isShow(){
        return this.tabItem==="4"?true:false
      }
    }
  };
  </script>
  
  <style scoped>
  .table-input {
    display: flex;
  }
  .el-row {
    margin-bottom: 4px;
  }
  .el-col {
    text-align: center;
  }
  .el-col-5{
    margin-bottom: 4px;
  }
  .el-col-3{
    margin-bottom: 4px;
  }
  </style>