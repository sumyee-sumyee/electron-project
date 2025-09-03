<template>
    <div class="out-table">
      <div class="block">
        <el-carousel height="150px" indicator-position="outside" :autoplay="false">
          <el-carousel-item>
            <el-checkbox-group v-model="checkList1" style="margin-top:2px">
              <el-row >
                <el-col :span="2" style="min-height:1px;" >
                  <div></div>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="1">设置电机01停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="2">设置电机02停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="3">设置电机03停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="4">设置电机04停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="5">设置电机05停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
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
                  <el-checkbox :label="6">设置电机06停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="7">设置电机07停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="8">设置电机08停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="9">设置电机09停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="10">设置电机10停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
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
                  <el-checkbox :label="11">设置电机11停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="12">设置电机12停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="13">设置电机13停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="14">设置电机14停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="15">设置电机15停止&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
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
                  <el-button size="mini" @click="saveCheckboxGroup1">发送电机关闭修改</el-button>
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
                <el-col :span="2" style="min-height:1px;" >
                  <div></div>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="1">电机01重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="2">电机02重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="3">电机03重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="4">电机04重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="5">电机05重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
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
                  <el-checkbox :label="6">电机06重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="7">电机07重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="8">电机08重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="9">电机09重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="10">电机10重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
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
                  <el-checkbox :label="11">电机11重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="12">电机12重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="13">电机13重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="14">电机14重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="15">电机15重置零点&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
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
                  <el-button size="mini" @click="saveCheckboxGroup2">发送电机重置零点修改</el-button>
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
                  <el-checkbox :label="1">电机01转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="2">电机02转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="3">电机03转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="4">电机04转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="5">电机05转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
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
                  <el-checkbox :label="6">电机06转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="7">电机07转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="8">电机08转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="9">电机09转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="10">电机10转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
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
                  <el-checkbox :label="11">电机11转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="12">电机12转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="13">电机13转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="14">电机14转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
                </el-col>
                <el-col :span="4">
                  <el-checkbox :label="15">电机15转子零位校准&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-checkbox>
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
                  <el-button size="mini" @click="saveCheckboxGroup3">发送电机转子零位校准修改</el-button>
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
      APP_TOUCH_BUTTON_SEND_MULT_CMD
    } from '../../../../js/constants/IndoorConstants'
  export default {
    name: "OutTable",
    data() {
      return {
        checkList1: [],
        checkList2: [],
        checkList3: [],
        Payload: {
          Data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        }
      };
    },
    props: {
      tabItem: String
    },
    methods: {
      saveCheckboxGroup1(){
        //console.log("checkList1>>", this.checkList1);
        for (var Index = 0; Index < 15; Index++) {
            this.Payload.Data[Index] = 1;
        }
        for (var i = 0; i < this.checkList1.length; i++) {
            switch(this.checkList1[i]) {
                case 1: 
                this.Payload.Data[0] = 0;
                break;
                case 2:
                this.Payload.Data[1] = 0;
                break;
                case 3:
                this.Payload.Data[2] = 0;
                break;
                case 4:
                this.Payload.Data[3] = 0;
                break;
                case 5:
                this.Payload.Data[4] = 0; 
                break;
                case 6:
                this.Payload.Data[5] = 0; 
                break;
                case 7:
                this.Payload.Data[6] = 0; 
                break;
                case 8:
                this.Payload.Data[7] = 0;
                break;
                case 9:
                this.Payload.Data[8] = 0;  
                break;
                case 10:
                this.Payload.Data[9] = 0;  
                break;
                case 11:
                this.Payload.Data[10] = 0; 
                break;
                case 12:
                this.Payload.Data[11] = 0;
                break;
                case 13:
                this.Payload.Data[12] = 0; 
                break;
                case 14:
                this.Payload.Data[13] = 0; 
                break;
                case 15:
                this.Payload.Data[14] = 0;
                break;
                default:
                    break;
            }
        }
        //console.log("this.Payload.Data>>", this.Payload.Data);
        ipcRenderer.send(APP_TOUCH_BUTTON_SEND_MULT_CMD, {
            CmdType: 'SetMotorEnableCmd',
            Data: this.Payload.Data,
        })
      },
      saveCheckboxGroup2(){
        //console.log("checkList2>>", this.checkList2);
        for (var Index = 0; Index < 15; Index++) {
            this.Payload.Data[Index] = 0;
        }
        for (var i = 0; i < this.checkList2.length; i++) {
            switch(this.checkList2[i]) {
                case 1: 
                this.Payload.Data[0] = 1;
                break;
                case 2:
                this.Payload.Data[1] = 1;
                break;
                case 3:
                this.Payload.Data[2] = 1;
                break;
                case 4:
                this.Payload.Data[3] = 1;
                break;
                case 5:
                this.Payload.Data[4] = 1; 
                break;
                case 6:
                this.Payload.Data[5] = 1; 
                break;
                case 7:
                this.Payload.Data[6] = 1; 
                break;
                case 8:
                this.Payload.Data[7] = 1;
                break;
                case 9:
                this.Payload.Data[8] = 1;  
                break;
                case 10:
                this.Payload.Data[9] = 1;  
                break;
                case 11:
                this.Payload.Data[10] = 1; 
                break;
                case 12:
                this.Payload.Data[11] = 1;
                break;
                case 13:
                this.Payload.Data[12] = 1; 
                break;
                case 14:
                this.Payload.Data[13] = 1; 
                break;
                case 15:
                this.Payload.Data[14] = 1;
                break;
                default:
                    break;
            }
        }
        //console.log("this.Payload.Data>>", this.Payload.Data);
        ipcRenderer.send(APP_TOUCH_BUTTON_SEND_MULT_CMD, {
            CmdType: 'ResetZeroPointCmd',
            Data: this.Payload.Data,
        })
      },
      saveCheckboxGroup3(){
        //console.log("checkList3>>", this.checkList3);
        for (var Index = 0; Index < 15; Index++) {
            this.Payload.Data[Index] = 0;
        }
        for (var i = 0; i < this.checkList3.length; i++) {
            switch(this.checkList3[i]) {
                case 1: 
                this.Payload.Data[0] = 1;
                break;
                case 2:
                this.Payload.Data[1] = 1;
                break;
                case 3:
                this.Payload.Data[2] = 1;
                break;
                case 4:
                this.Payload.Data[3] = 1;
                break;
                case 5:
                this.Payload.Data[4] = 1; 
                break;
                case 6:
                this.Payload.Data[5] = 1; 
                break;
                case 7:
                this.Payload.Data[6] = 1; 
                break;
                case 8:
                this.Payload.Data[7] = 1;
                break;
                case 9:
                this.Payload.Data[8] = 1;  
                break;
                case 10:
                this.Payload.Data[9] = 1;  
                break;
                case 11:
                this.Payload.Data[10] = 1; 
                break;
                case 12:
                this.Payload.Data[11] = 1;
                break;
                case 13:
                this.Payload.Data[12] = 1; 
                break;
                case 14:
                this.Payload.Data[13] = 1; 
                break;
                case 15:
                this.Payload.Data[14] = 1;
                break;
                default:
                    break;
            }
        }
        //console.log("this.Payload.Data>>", this.Payload.Data);
        ipcRenderer.send(APP_TOUCH_BUTTON_SEND_MULT_CMD, {
            CmdType: 'ZeroPointCheckCmd',
            Data: this.Payload.Data,
        })
      }, 
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