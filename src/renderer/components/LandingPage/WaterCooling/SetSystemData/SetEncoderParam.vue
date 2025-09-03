<template>
  <div class="out-table">
    <div class="block">
      <el-carousel
        height="150px"
        indicator-position="outside"
        :autoplay="false"
      >
        <el-carousel-item>
          <el-radio-group v-model="radio1" style="margin-top:0px">
            <el-row type="flex" justify="center">
              <el-col :span="2" >
                <div></div>
              </el-col>
              <el-col :span="4">
                <el-radio :label="1">编码器01零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="2">编码器02零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">编码器03零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">编码器04零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="5">编码器05零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="2" >
                <div></div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" >
                <div></div>
              </el-col>
              <el-col :span="4">
                <el-radio :label="6">编码器06零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="7">编码器07零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="8">编码器08零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="9">编码器09零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="10">编码器10零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="2">
                <div></div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2">
                <div></div>
              </el-col>
              <el-col :span="4">
                <el-radio :label="11">编码器11零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="12">编码器12零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="13">编码器13零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="14">编码器14零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="15">编码器15零点偏置&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="2">
                <div></div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="3" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="12">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="0:不设置,1:0°,2:90°,3:180°,4:270°" v-model="DataType.SetZeroPoint"></el-input>
                </div>
              </el-col>
              <el-col :span="7">
                <el-button size="mini" @click="saveRadio1">确认修改</el-button>
              </el-col>
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
            </el-row>
          </el-radio-group>
        </el-carousel-item>
        <el-carousel-item>
          <el-radio-group v-model="radio2" style="margin-top:0px">
            <el-row type="flex" justify="center">
              <el-col :span="2" >
                <div></div>
              </el-col>
              <el-col :span="4">
                <el-radio :label="1">编码器01顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="2">编码器02顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">编码器03顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">编码器04顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="5">编码器05顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="2" >
                <div></div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" >
                <div></div>
              </el-col>
              <el-col :span="4">
                <el-radio :label="6">编码器06顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="7">编码器07顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="8">编码器08顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="9">编码器09顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="10">编码器10顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="2">
                <div></div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2">
                <div></div>
              </el-col>
              <el-col :span="4">
                <el-radio :label="11">编码器11顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="12">编码器12顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="13">编码器13顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="14">编码器14顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="15">编码器15顺逆方向&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="2">
                <div></div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="17">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="0:顺时针, 1:逆时针" v-model="DataType.SetDirValue"></el-input>
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
          <el-radio-group v-model="radio3" style="margin-top:0px">
             <el-row type="flex" justify="center">
              <el-col :span="2" >
                <div></div>
              </el-col>
              <el-col :span="4">
                <el-radio :label="1">关节和电机01映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="2">关节和电机02映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">关节和电机03映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">关节和电机04映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="5">关节和电机05映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="2" >
                <div></div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" >
                <div></div>
              </el-col>
              <el-col :span="4">
                <el-radio :label="6">关节和电机06映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="7">关节和电机07映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="8">关节和电机08映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="9">关节和电机09映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="10">关节和电机10映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="2">
                <div></div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2">
                <div></div>
              </el-col>
              <el-col :span="4">
                <el-radio :label="11">关节和电机11映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="12">关节和电机12映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="13">关节和电机13映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="14">关节和电机14映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="15">关节和电机15映射关系&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="2">
                <div></div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="17 ">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="0:手指弯曲关节增大, 1:手指弯曲关节减少" v-model="DataType.JointandMotorMap"></el-input>
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
  import { APP_TOUCH_BUTTON_SEND_SINGLE_CMD} from '../../../../js/constants/IndoorConstants'
export default {
  name: "OutTable",
  data() {
    return {
      radio1: 1,
      radio2: 1,
      radio3: 1,
      Address: 0x00,
      DataType: {
        SetZeroPoint: 0,
        SetDirValue: 0,
        JointandMotorMap: 0,
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
          this.Address = 0xBB;
          break;
        case 2:
          this.Address = 0xBC;
          break;
        case 3:
          this.Address = 0xBD;
          break;
        case 4:
          this.Address = 0xBE;
          break;
        case 5:
          this.Address = 0xBF;
          break;
        case 6:
          this.Address = 0xC0;
          break;
        case 7:
          this.Address = 0xC1;
          break;
        case 8:
          this.Address = 0xC2;
          break;
        case 9:
          this.Address = 0xC3;
          break;
        case 10:
          this.Address = 0xC4;
          break;
        case 11:
          this.Address = 0xC5;
          break;
        case 12:
          this.Address = 0xC6;
          break;
        case 13:
          this.Address = 0xC7;
          break;
        case 14:
          this.Address = 0xC8;
          break;
        case 15:
          this.Address = 0xC9;
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_TOUCH_BUTTON_SEND_SINGLE_CMD, {
        CmdType: 'SetEncoder',
        Address: this.Address,
        Data: this.DataType.SetZeroPoint,

      })
      //console.log("radio1>>", this.radio1);
    },
    saveRadio2() {
      switch (this.radio2) {
        case 1:
          this.Address = 0xCA;
          break;
        case 2:
          this.Address = 0xCB;
          break;
        case 3:
          this.Address = 0xCC;
          break;
        case 4:
          this.Address = 0xCD;
          break;
        case 5:
          this.Address = 0xCE;
          break;
        case 6:
          this.Address = 0xCF;
          break;
        case 7:
          this.Address = 0xD0;
          break;
        case 8:
          this.Address = 0xD1;
          break;
        case 9:
          this.Address = 0xD2;
          break;
        case 10:
          this.Address = 0xD3;
          break;
        case 11:
          this.Address = 0xD4;
          break;
        case 12:
          this.Address = 0xD5;
          break;
        case 13:
          this.Address = 0xD6;
          break;
        case 14:
          this.Address = 0xD7;
          break;
        case 15:
          this.Address = 0xD8;
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_TOUCH_BUTTON_SEND_SINGLE_CMD, {
        CmdType: 'SetEncoder',
        Address: this.Address,
        Data: this.DataType.SetDirValue,

      })
      //console.log("radio2>>", this.radio2);
    },
    saveRadio3() {
      switch (this.radio3) {
        case 1:
          this.Address = 0xAC;
          break;
        case 2:
          this.Address = 0xAD;
          break;
        case 3:
          this.Address = 0xAE;
          break;
        case 4:
          this.Address = 0xAF;
          break;
        case 5:
          this.Address = 0xB0;
          break;
        case 6:
          this.Address = 0xB1;
          break;
        case 7:
          this.Address = 0xB2;
          break;
        case 8:
          this.Address = 0xB3;
          break;
        case 9:
          this.Address = 0xB4;
          break;
        case 10:
          this.Address = 0xB5;
          break
        case 11:
          this.Address = 0xB6;
          break;
        case 12:
          this.Address = 0xB7;
          break;
        case 13:
          this.Address = 0xB8;
          break;
        case 14:
          this.Address = 0xB9;
          break;
        case 15:
          this.Address = 0xBA;
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_TOUCH_BUTTON_SEND_SINGLE_CMD, {
        CmdType: 'SetEncoder',
        Address: this.Address,
        Data: this.DataType.JointandMotorMap,

      })
      //console.log("radio3>>", this.radio3);
    },
   
  },
  computed:{
    isShow(){
      return this.tabItem==="8"?true:false
    }
  }
};
</script>

<style scoped>
.table-input {
  display: flex;
}
.el-row {
  margin-bottom: 0px;
}
.el-col {
  text-align: center;
}
</style>