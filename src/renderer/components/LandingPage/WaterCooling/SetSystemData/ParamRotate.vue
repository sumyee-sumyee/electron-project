<template>
  <div class="out-table">
    <div class="block">
      <el-carousel
        height="150px"
        indicator-position="outside"
        :autoplay="false"
        v-if="isShow"
      >
        <el-carousel-item>
          <el-radio-group v-model="radio1" style="margin-top:10px">
            <el-row>
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="4">
                <el-radio :label="1">制冷设置温度</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="2">制冷回差温度</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">制热设置温度</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">制热回差温度</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="5">高温报警温度</el-radio>
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
                <el-radio :label="6">低温报警温度</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="7">水温温差过高报警值</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="8">水泵最高运行频率</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="9">水泵最低运行频率</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="10">水泵默认频率</el-radio>
              </el-col>
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="3" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="16">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="请输入数据" v-model="EEPROMType.Data[0]"></el-input>
                </div>
              </el-col>
              <el-col :span="3">
                <el-button size="mini" @click="saveRadio1">确认修改</el-button>
              </el-col>
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
            </el-row>
          </el-radio-group>
        </el-carousel-item>
        <el-carousel-item>
          <el-radio-group v-model="radio2" style="margin-top:10px">
            <el-row type="flex" justify="center">
              <!-- <el-col :span="1" style="min-height:1px;">
                <div></div>
              </el-col>-->
              <el-col :span="3">
                <el-radio :label="1">水泵升频幅度</el-radio>
              </el-col>
              <el-col :span="3">
                <el-radio :label="2">水泵降频幅度</el-radio>
              </el-col>
              <el-col :span="3">
                <el-radio :label="3">水泵频率调节周期</el-radio>
              </el-col>
              <el-col :span="3">
                <el-radio :label="4">水泵压差设定值</el-radio>
              </el-col>
              <el-col :span="3">
                <el-radio :label="5">水泵压差回差值</el-radio>
              </el-col>
              <el-col :span="3">
                <el-radio :label="6">水温温差设定值</el-radio>
              </el-col>
              <el-col :span="3  ">
                <el-radio :label="7">水温温差回差值</el-radio>
              </el-col>
              <!-- <el-col :span="1" style="min-height:1px;">
                <div></div>
              </el-col>-->
            </el-row>
            <el-row type="flex" justify="center">
              <!-- <el-col :span="1" style="min-height:1px;">
                <div></div>
              </el-col>-->
              <el-col :span="3">
                <el-radio :label="8">压缩机最高运行频率</el-radio>
              </el-col>
              <el-col :span="3">
                <el-radio :label="9">压缩机最低运行频率</el-radio>
              </el-col>
              <el-col :span="3">
                <el-radio :label="10">压缩机标况测试频率</el-radio>
              </el-col>
              <el-col :span="3">
                <el-radio :label="11">压缩机回油运行频率</el-radio>
              </el-col>
              <el-col :span="3">
                <el-radio :label="12">压缩机启动平台频率</el-radio>
              </el-col>
              <el-col :span="3">
                <el-radio :label="13">压缩机平台频率运行时间</el-radio>
              </el-col>
              <el-col :span="3">
                <el-radio :label="14">压缩机频率调节周期</el-radio>
              </el-col>
              <!-- <el-col :span="1" style="min-height:1px;">
                <div></div>
              </el-col>-->
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="17">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="请输入数据" v-model="EEPROMType.Data[0]"></el-input>
                </div>
              </el-col>
              <el-col :span="3">
                <el-button size="mini" @click="saveRadio2">确认修改</el-button>
              </el-col>
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
            </el-row>
          </el-radio-group>
        </el-carousel-item>
        <el-carousel-item>
          <el-radio-group v-model="radio3" style="margin-top:10px">
            <el-row type="flex" justify="center">
              <!-- <el-col :span="1" style="min-height:1px;">
                <div></div>
              </el-col>-->
              <el-col :span="4">
                <el-radio :label="1">压缩机能调调节频率&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="2">压缩机抽空低压压力</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">冷凝器过高设置温度</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">蒸发器过高设置温度</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="5">蒸发器过低设置温度</el-radio>
              </el-col>
              <!-- <el-col :span="1" style="min-height:1px;">
                <div></div>
              </el-col>-->
            </el-row>
            <el-row type="flex" justify="center">
              <!-- <el-col :span="1" style="min-height:1px;">
                <div></div>
              </el-col>-->
              <el-col :span="4">
                <el-radio :label="6">排气过高设置温度</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="7">风机最大转速</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="8">风机最小转速&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="9">风机最低转速压力</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="10">风机最高转速压力</el-radio>
              </el-col>
              <!-- <el-col :span="1" style="min-height:1px;">
                <div></div>
              </el-col>-->
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="17 ">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="请输入数据" v-model="EEPROMType.Data[0]"></el-input>
                </div>
              </el-col>
              <el-col :span="3">
                <el-button size="mini" @click="saveRadio3">确认修改</el-button>
              </el-col>
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
            </el-row>
          </el-radio-group>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import { ipcRenderer } from 'electron'
  import {
    APP_TOUCH_BUTTON_SEND_MULT_CMD,
  } from '../../../../js/constants/IndoorConstants'
export default {
  name: "OutTable",
  data() {
    return {
      radio1: 1,
      radio2: 1,
      radio3: 1,
      DataInput: "",
      EEPROMType: {
        Length: 1,
        Address: '',
        Data: [0, 0, 0]
      }
    };
  },
  props: {
    tabItem: String
  },
  methods: {
    saveRadio1() {
      switch (this.radio1) {
        case 1:
          this.EEPROMType.Address = '29';
          break;
        case 2:
          this.EEPROMType.Address = '28';
          break;
        case 3:
          this.EEPROMType.Address = '27';
          break;
        case 4:
          this.EEPROMType.Address = '26';
          break;
        case 5:
          this.EEPROMType.Address = '25';
          break;
        case 6:
          this.EEPROMType.Address = '24';
          break;
        case 7:
          this.EEPROMType.Address = '23';
          break;
        case 8:
          this.EEPROMType.Address = '22';
          break;
        case 9:
          this.EEPROMType.Address = '21';
          break;
        case 10:
          this.EEPROMType.Address = '20';
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_TOUCH_BUTTON_SEND_MULT_CMD, {
        Length: this.EEPROMType.Length,
        Address: this.EEPROMType.Address,
        Data: this.EEPROMType.Data,
        Monitor: false
      })
      //console.log("radio1>>", this.radio1);
    },
    saveRadio2() {
       switch (this.radio2) {
        case 1:
          this.EEPROMType.Address = '4A';
          break;
        case 2:
          this.EEPROMType.Address = '4B';
          break;
        case 3:
          this.EEPROMType.Address = '4C';
          break;
        case 4:
          this.EEPROMType.Address = '4D';
          break;
        case 5:
          this.EEPROMType.Address = '4E';
          break;
        case 6:
          this.EEPROMType.Address = '4F';
          break;
        case 7:
          this.EEPROMType.Address = '50';
          break;
        case 8:
          this.EEPROMType.Address = '51';
          break;
        case 9:
          this.EEPROMType.Address = '52';
          break;
        case 10:
          this.EEPROMType.Address = '53';
          break;
         case 11:
          this.EEPROMType.Address = '54';
          break;
        case 12:
          this.EEPROMType.Address = '55';
          break;
        case 13:
          this.EEPROMType.Address = '56';
          break;
        case 14:
          this.EEPROMType.Address = '57';
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_TOUCH_BUTTON_SEND_MULT_CMD, {
        Length: this.EEPROMType.Length,
        Address: this.EEPROMType.Address,
        Data: this.EEPROMType.Data,
        Monitor: false
      })
      //console.log("radio2>>", this.radio2);
    },
    saveRadio3() {
       switch (this.radio3) {
        case 1:
          this.EEPROMType.Address = '2A';
          break;
        case 2:
          this.EEPROMType.Address = '2B';
          break;
        case 3:
          this.EEPROMType.Address = '2C';
          break;
        case 4:
          this.EEPROMType.Address = '2D';
          break;
        case 5:
          this.EEPROMType.Address = '2E';
          break;
        case 6:
          this.EEPROMType.Address = '2F';
          break;
        case 7:
          this.EEPROMType.Address = '30';
          break;
        case 8:
          this.EEPROMType.Address = '31';
          break;
        case 9:
          this.EEPROMType.Address = '36';
          break;
        case 10:
          this.EEPROMType.Address = '37';
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_TOUCH_BUTTON_SEND_MULT_CMD, {
        Length: this.EEPROMType.Length,
        Address: this.EEPROMType.Address,
        Data: this.EEPROMType.Data,
        Monitor: false
      })
      //console.log("radio3>>", this.radio3);
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
  margin-bottom: 10px;
}
.el-col {
  text-align: center;
}
</style>