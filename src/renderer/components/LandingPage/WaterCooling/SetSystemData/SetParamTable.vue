<template>
  <div class="out-table">
    <div class="block">
      <el-carousel
        height="150px"
        indicator-position="outside"
        :autoplay="false"
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
                <el-radio :label="2">制冷回差温度&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">制热设置温度&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">制热回差温度&ensp;&ensp;&ensp;&ensp;</el-radio>
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
                  <el-input placeholder="请输入数据" v-model="DataType.Data"></el-input>
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
              <el-col :span="4">
                <el-radio :label="1">水泵升频幅度&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="2">水泵降频幅度&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">水泵频率调节周期&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">水泵压差设定值&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="5">水泵压差回差值&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
             
            </el-row>
            <el-row type="flex" justify="center">
             
              <el-col :span="4">
                <el-radio :label="6">水温温差设定值</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="7">水温温差回差值</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="8">压缩机最高运行频率</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="9">压缩机最低运行频率</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="10">压缩机标况测试频率</el-radio>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="17">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="注意:水温温差回差值 * 10发送, 0.1填写1" v-model="DataType.Data"></el-input>
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
              <el-col :span="4">
                <el-radio :label="1">压缩机回油运行频率</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="2">压缩机启动平台频率&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">压缩机平台频率运行时间</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">压缩机频率调节周期&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="5">压缩机能调调节频率</el-radio>
              </el-col>
             
            </el-row>
            <el-row type="flex" justify="center">
             
              <el-col :span="4">
                <el-radio :label="6">压缩机抽空低压压力</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="7">冷凝温度过高设置温度</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="8">蒸发温度过高设置温度&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="9">蒸发温度过低设置温度</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="10">排气过高设置温度&ensp;&ensp;</el-radio>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="17 ">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="注意：压缩机抽空低压压力 *10发送, 0.1填写1" v-model="DataType.Data"></el-input>
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


        <el-carousel-item>
          <el-radio-group v-model="radio4" style="margin-top:10px">
            <el-row type="flex" justify="center">
              <el-col :span="4">
                <el-radio :label="1">风机最大转速&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="2">风机最小转速&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">风机最低转速压力</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">风机最高转速压力</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="5">风机最高转速温度</el-radio>
              </el-col>
             
            </el-row>
            <el-row type="flex" justify="center">
             
              <el-col :span="4">
                <el-radio :label="6">风机最低转速温度&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="7">风机风速调节周期</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="8">膨胀阀最大开度&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="9">膨胀阀最小开度&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="10">膨胀阀基准开度&ensp;&ensp;</el-radio>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="17 ">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="注意：风机最低、最高转速压力*10发送, 0.1填写1" v-model="DataType.Data"></el-input>
                </div>
              </el-col>
              <el-col :span="3">
                <el-button size="mini" @click="saveRadio4">确认修改</el-button>
              </el-col>
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
            </el-row>
          </el-radio-group>
        </el-carousel-item>

        <el-carousel-item>
          <el-radio-group v-model="radio5" style="margin-top:10px">
            <el-row type="flex" justify="center">
              <el-col :span="4">
                <el-radio :label="1">膨胀阀初始度α系数</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="2">膨胀阀初始度β系数</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">膨胀阀初始度θ系数</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">膨胀阀目标回气过热度</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="5">膨胀阀调节周期&ensp;&ensp;</el-radio>
              </el-col>
             
            </el-row>
            <el-row type="flex" justify="center">
             
              <el-col :span="4">
                <el-radio :label="6">膨胀阀调节步数&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="7">风机控制的低转速&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="8">风机控制的中转速&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="9">风机控制的高转速&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="10">风机控制的满转速</el-radio>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="17 ">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="请输入数据" v-model="DataType.Data"></el-input>
                </div>
              </el-col>
              <el-col :span="3">
                <el-button size="mini" @click="saveRadio5">确认修改</el-button>
              </el-col>
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
            </el-row>
          </el-radio-group>
        </el-carousel-item>


        <el-carousel-item>
          <el-radio-group v-model="radio6" style="margin-top:10px">
            <el-row type="flex" justify="center">
              <el-col :span="4">
                <el-radio :label="1">系统水温校正值&ensp;&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="2">出水温度校正值&ensp;&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">进水温度校正值&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">环境温度校正值&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="5">系统1排气温度校正值</el-radio>
              </el-col>
             
            </el-row>
            <el-row type="flex" justify="center">
             
              <el-col :span="4">
                <el-radio :label="6">系统1吸气温度校正值</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="7">系统1冷液温度校正值</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="8">系统1冷凝器温度校正值&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="9">系统1蒸发器温度校正值</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="10">系统2排气温度校正值</el-radio>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="17 ">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="注意：校正值*10发送,  0.1填写1" v-model="DataType.Data"></el-input>
                </div>
              </el-col>
              <el-col :span="3">
                <el-button size="mini" @click="saveRadio6">确认修改</el-button>
              </el-col>
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
            </el-row>
          </el-radio-group>
        </el-carousel-item>

        <el-carousel-item>
          <el-radio-group v-model="radio7" style="margin-top:10px">
            <el-row type="flex" justify="center">
              <el-col :span="4">
                <el-radio :label="1">系统2吸气温度校正值&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="2">系统2冷液温度校正值</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">系统2冷凝器温度校正值</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">系统2蒸发器温度校正值</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="5">系统1高压压力校正值</el-radio>
              </el-col>
             
            </el-row>
            <el-row type="flex" justify="center">
             
              <el-col :span="4">
                <el-radio :label="6">系统1低压压力校正值&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="7">系统2高压压力校正值</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="8">系统2低压压力校正值&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="9">出水压力校正值&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="10">进水压力校正值&ensp;&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="17 ">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="注意：校正值*10发送,  0.1填写1" v-model="DataType.Data"></el-input>
                </div>
              </el-col>
              <el-col :span="3">
                <el-button size="mini" @click="saveRadio7">确认修改</el-button>
              </el-col>
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
            </el-row>
          </el-radio-group>
        </el-carousel-item>

        <el-carousel-item>
          <el-radio-group v-model="radio8" style="margin-top:10px">
            <el-row type="flex" justify="center">
              <el-col :span="4">
                <el-radio :label="1">压缩机AC保护电流&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="2">风机Tcs&ensp;&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="3">风机Tcs回差&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="4">制冷剂类型</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="5">恢复出厂设置</el-radio>
              </el-col>
             
            </el-row>
            <el-row type="flex" justify="center">
             
              <el-col :span="4">
                <el-radio :label="6">水泵开机目标频率设定</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="7">监控开关机</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="8">温控制方式&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="9">故障复位&ensp;&ensp;</el-radio>
              </el-col>
              <el-col :span="4">
                <el-radio :label="10">自启动&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</el-radio>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="2" style="min-height:1px;">
                <div></div>
              </el-col>
              <el-col :span="17 ">
                <div class="table-input">
                  <el-button type="text" size="mini">更改数据值：</el-button>
                  <el-input placeholder="请输入数据" v-model="DataType.Data"></el-input>
                </div>
              </el-col>
              <el-col :span="3">
                <el-button size="mini" @click="saveRadio8">确认修改</el-button>
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
    APP_SEND_SIGNAL_DATA_06_CMD,
  } from '../../../../js/constants/IndoorConstants'
export default {
  name: "OutTable",
  data() {
    return {
      radio1: 1,
      radio2: 1,
      radio3: 1,
      radio4: 1,
      radio5: 1,
      radio6: 1,
      radio7: 1,
      radio8: 1,
      DataInput: "",
      DataType: {
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
    saveRadio1() {
      switch (this.radio1) {
        case 1:
          this.DataType.Address = 150;
          break;
        case 2:
          this.DataType.Address = 151;
          break;
        case 3:
          this.DataType.Address = 152;
          break;
        case 4:
          this.DataType.Address = 153;
          break;
        case 5:
          this.DataType.Address = 154;
          break;
        case 6:
          this.DataType.Address = 155;
          break;
        case 7:
          this.DataType.Address = 156;
          break;
        case 8:
          this.DataType.Address = 157;
          break;
        case 9:
          this.DataType.Address = 158;
          break;
        case 10:
          this.DataType.Address = 159;
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
        Length: this.DataType.Length,
        Address: this.DataType.Address,
        Data: this.DataType.Data,

      })
      //console.log("radio1>>", this.radio1);
    },
    saveRadio2() {
       switch (this.radio2) {
        case 1:
          this.DataType.Address = 160;
          break;
        case 2:
          this.DataType.Address = 161;
          break;
        case 3:
          this.DataType.Address = 162;
          break;
        case 4:
          this.DataType.Address = 163;
          break;
        case 5:
          this.DataType.Address = 164;
          break;
        case 6:
          this.DataType.Address = 165;
          break;
        case 7:
          this.DataType.Address = 166;
          break;
        case 8:
          this.DataType.Address = 167;
          break;
        case 9:
          this.DataType.Address = 168;
          break;
        case 10:
          this.DataType.Address = 169;
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
        Length: this.DataType.Length,
        Address: this.DataType.Address,
        Data: this.DataType.Data,

      })
      //console.log("radio2>>", this.radio2);
    },
    saveRadio3() {
       switch (this.radio3) {
        case 1:
          this.DataType.Address = 170;
          break;
        case 2:
          this.DataType.Address = 171;
          break;
        case 3:
          this.DataType.Address = 172;
          break;
        case 4:
          this.DataType.Address = 173;
          break;
        case 5:
          this.DataType.Address = 174;
          break;
        case 6:
          this.DataType.Address = 175;
          break;
        case 7:
          this.DataType.Address = 176;
          break;
        case 8:
          this.DataType.Address = 177;
          break;
        case 9:
          this.DataType.Address = 178;
          break;
        case 10:
          this.DataType.Address = 179;
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
        Length: this.DataType.Length,
        Address: this.DataType.Address,
        Data: this.DataType.Data,

      })
      //console.log("radio3>>", this.radio3);
    },
    saveRadio4() {
       switch (this.radio4) {
        case 1:
          this.DataType.Address = 180;
          break;
        case 2:
          this.DataType.Address = 181;
          break;
        case 3:
          this.DataType.Address = 182;
          break;
        case 4:
          this.DataType.Address = 183;
          break;
        case 5:
          this.DataType.Address = 184;
          break;
        case 6:
          this.DataType.Address = 185;
          break;
        case 7:
          this.DataType.Address = 186;
          break;
        case 8:
          this.DataType.Address = 187;
          break;
        case 9:
          this.DataType.Address = 188;
          break;
        case 10:
          this.DataType.Address = 189;
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
        Length: this.DataType.Length,
        Address: this.DataType.Address,
        Data: this.DataType.Data,

      })
      //console.log("radio4>>", this.radio5);
    },
    saveRadio5() {
       switch (this.radio5) {
        case 1:
          this.DataType.Address = 190;
          break;
        case 2:
          this.DataType.Address = 191;
          break;
        case 3:
          this.DataType.Address = 192;
          break;
        case 4:
          this.DataType.Address = 193;
          break;
        case 5:
          this.DataType.Address = 194;
          break;
        case 6:
          this.DataType.Address = 195;
          break;
        case 7:
          this.DataType.Address = 243;
          break;
        case 8:
          this.DataType.Address = 244;
          break;
        case 9:
          this.DataType.Address = 245;
          break;
        case 10:
          this.DataType.Address = 246;
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
        Length: this.DataType.Length,
        Address: this.DataType.Address,
        Data: this.DataType.Data,

      })
      //console.log("radio5>>", this.radio5);
    },
    saveRadio6() {
       switch (this.radio6) {
        case 1:
          this.DataType.Address = 214;
          break;
        case 2:
          this.DataType.Address = 215;
          break;
        case 3:
          this.DataType.Address = 216;
          break;
        case 4:
          this.DataType.Address = 217;
          break;
        case 5:
          this.DataType.Address = 218;
          break;
        case 6:
          this.DataType.Address = 219;
          break;
        case 7:
          this.DataType.Address = 220;
          break;
        case 8:
          this.DataType.Address = 221;
          break;
        case 9:
          this.DataType.Address = 222;
          break;
        case 10:
          this.DataType.Address = 223;
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
        Length: this.DataType.Length,
        Address: this.DataType.Address,
        Data: this.DataType.Data,

      })
      //console.log("radio6>>", this.radio6);
    },
    saveRadio7() {
       switch (this.radio7) {
        case 1:
          this.DataType.Address = 224;
          break;
        case 2:
          this.DataType.Address = 225;
          break;
        case 3:
          this.DataType.Address = 226;
          break;
        case 4:
          this.DataType.Address = 227;
          break;
        case 5:
          this.DataType.Address = 228;
          break;
        case 6:
          this.DataType.Address = 229;
          break;
        case 7:
          this.DataType.Address = 230;
          break;
        case 8:
          this.DataType.Address = 231;
          break;
        case 9:
          this.DataType.Address = 232;
          break;
        case 10:
          this.DataType.Address = 233;
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
        Length: this.DataType.Length,
        Address: this.DataType.Address,
        Data: this.DataType.Data,

      })
      //console.log("radio7>>", this.radio7);
    },
    saveRadio8() {
       switch (this.radio8) {
        case 1:
          this.DataType.Address = 252;
          break;
        case 2:
          this.DataType.Address = 241;
          break;
        case 3:
          this.DataType.Address = 242;
          break;
        case 4:
          this.DataType.Address = 207;
          break;
        case 5:
          this.DataType.Address = 249;
          break;
        case 6:
          this.DataType.Address = 247;
          break;
        case 7:
          this.DataType.Address = 211;
          break;
        case 8:
          this.DataType.Address = 212;
          break;
        case 9:
          this.DataType.Address = 248;
          break;
        case 10:
          this.DataType.Address = 251;
          break;
        default:
          break;
      }
      ipcRenderer.send(APP_SEND_SIGNAL_DATA_06_CMD, {
        Length: this.DataType.Length,
        Address: this.DataType.Address,
        Data: this.DataType.Data,

      })
      //console.log("radio8>>", this.radio8);
    }
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
  margin-bottom: 20px;
}
.el-col {
  text-align: center;
}
</style>