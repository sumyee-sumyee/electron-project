<template>
  <div >  
    <fieldset  style="border-color: white; height: 825px;">
    <legend style="font:8px; font-weight:800;">数据日志</legend>    
    
    <el-carousel height="770px" indicator-position="outside" :autoplay="false" style="margin-top: 10px;">
      <el-carousel-item >
        <el-table
        :data="CurrentWarning" 
        height="820px"
        style="width: 100%">
          <el-table-column
            prop="name"
            label="当前告警信息"
            width="280px"
            size="small">
          </el-table-column>
        </el-table>
      </el-carousel-item>

      <el-carousel-item>
        <el-input  height="770px" type="textarea" :rows="45" v-model="infoText"  readonly> </el-input>
      </el-carousel-item>
    
    </el-carousel>
  </fieldset>
  </div>
</template>
<script>
import { ipcRenderer } from 'electron';
import {
    APP_REPORT_UART_DATA
  } from '../../../../js/constants/IndoorConstants'
import { constants } from 'fs';

export default {
  name: 'landing-page',
  computed: {
   
  },
  data() {
    return {
      CurrentWarning:[{name:'无故障'}],
      infoText:'',
      infoTextContent:'',
      Error01: 0, 
      Error02: 0, 
      Error03: 0, 
      Error04: 0, 
      Error05: 0, 
      Error06: 0, 
      Error07: 0, 
      Error08: 0, 
      Error09: 0, 
      Error10: 0,  
      Error11: 0, 
      Error12: 0, 
      Error13: 0, 
      Error14: 0, 
      Error15: 0,
      SystemErr: 0,
      ErrorData: {
        Error01: '',
        Error02: '',
        Error03: '',
        Error04: '',
        Error05: '',
        Error06: '',
        Error07: '',
        Error08: '',
        Error09: '',
        Error10: '',
        Error11: '',
        Error12: '',
        Error13: '',
        Error14: '',
        Error15: '',
        SystemErr: '',
      }
    }

  },
  methods: {
    ClearInfoText () {
      this.infoText = ''
      this.infoTextContent = ''
    },
    addRow(String) {
      const index = this.CurrentWarning.findIndex((item) => item.name === String);
      if (index === -1) {
        this.CurrentWarning.push({name:String})
      }
    },
    deleteRow(String) {
      const index = this.CurrentWarning.findIndex((item) => item.name === String);
      if (index !== -1) {
        this.CurrentWarning.splice(index, 1);
      }
    },
  },


  watch: {
   
  },
  
  created: function () {
    //Serial Data 
    ipcRenderer.on(APP_REPORT_UART_DATA, (event, arg) => {
        let uint8ModbusData = [], uint16MudbusData = []
        let ErrTextTmp

        uint8ModbusData = arg.slice(0, arg.length - 2);
        uint8ModbusData = uint8ModbusData.slice(3);

        for (let i = 0; i < (arg[2]/2); i++) {
            uint16MudbusData[i] = ((uint8ModbusData[i*2] << 8) | (uint8ModbusData[i*2 + 1]))
        }

        if (arg[1] === 0x04) {
            if (arg[2] === (0x5F * 2)) {
                ErrTextTmp = ''
                if (uint16MudbusData[3] != this.SystemErr) {
                    this.SystemErr = uint16MudbusData[3];
                    this.ErrorData.SystemErr = '';
                    if (this.SystemErr & 0x0001) {
                      this.addRow('电源欠压') 
                      ErrTextTmp += '电源欠压 '
                      this.ErrorData.SystemErr += '电源欠压 '
                    } else {
                      this.deleteRow('电源欠压');
                    }

                    if (this.SystemErr & 0x0002) {
                      this.addRow('电源过压') 
                      ErrTextTmp += '电源过压 '
                      this.ErrorData.SystemErr += '电源过压 '
                    } else {
                      this.deleteRow('电源过压');
                    }

                    if (this.SystemErr & 0x0004) {
                      this.addRow('板卡温度过高') 
                      ErrTextTmp += '板卡温度过高 '
                      this.ErrorData.SystemErr += '板卡温度过高 '
                    } else {
                      this.deleteRow('板卡温度过高');
                    }
                }

                if (uint16MudbusData[4] != this.Error01) {
                    this.Error01 = uint16MudbusData[4];
                    this.ErrorData.Error01 = '';
                    if (this.Error01 & 0x0001) {
                      this.addRow('电机01缺相') 
                      ErrTextTmp += '电机01缺相 '
                      this.ErrorData.Error01 += '电机01缺相 '
                    } else {
                      this.deleteRow('电机01缺相');
                    }

                    if (this.Error01 & 0x0002) {
                      this.addRow('电机01过流') 
                      ErrTextTmp += '电机01过流 '
                      this.ErrorData.Error01 += '电机01过流 '
                    } else {
                      this.deleteRow('电机01过流');
                    }

                    if (this.Error01 & 0x0004) {
                      this.addRow('电机01堵转') 
                      ErrTextTmp += '电机01堵转 '
                      this.ErrorData.Error01 += '电机01堵转 '
                    } else {
                      this.deleteRow('电机01堵转');
                    }

                    if (this.Error01 & 0x0008) {
                      this.addRow('编码器01故障') 
                      ErrTextTmp += '编码器01故障 '
                      this.ErrorData.Error01 += '编码器01故障 '
                    } else {
                      this.deleteRow('编码器01故障');
                    }
                }

                if (uint16MudbusData[5] != this.Error02) {
                    this.Error02 = uint16MudbusData[5];
                    this.ErrorData.Error02 = '';
                    if (this.Error02 & 0x0001) {
                      this.addRow('电机01缺相') 
                      ErrTextTmp += '电机01缺相 '
                      this.ErrorData.Error02 += '电机01缺相 '
                    } else {
                      this.deleteRow('电机01缺相');
                    }

                    if (this.Error02 & 0x0002) {
                      this.addRow('电机02过流') 
                      ErrTextTmp += '电机02过流 '
                      this.ErrorData.Error02 += '电机02过流 '
                    } else {
                      this.deleteRow('电机02过流');
                    }

                    if (this.Error02 & 0x0004) {
                      this.addRow('电机02堵转') 
                      ErrTextTmp += '电机02堵转 '
                      this.ErrorData.Error02 += '电机02堵转 '
                    } else {
                      this.deleteRow('电机02堵转');
                    }

                    if (this.Error02 & 0x0008) {
                      this.addRow('编码器02故障') 
                      ErrTextTmp += '编码器02故障 '
                      this.ErrorData.Error02 += '编码器02故障 '
                    } else {
                      this.deleteRow('编码器02故障');
                    }
                }

                if (uint16MudbusData[6] != this.Error03) {
                    this.Error03 = uint16MudbusData[6];
                    this.ErrorData.Error03 = '';
                    if (this.Error03 & 0x0001) {
                      this.addRow('电机03缺相') 
                      ErrTextTmp += '电机03缺相 '
                      this.ErrorData.Error03 += '电机03缺相 '
                    } else {
                      this.deleteRow('电机03缺相');
                    }

                    if (this.Error03 & 0x0002) {
                      this.addRow('电机03过流') 
                      ErrTextTmp += '电机03过流 '
                      this.ErrorData.Error03 += '电机03过流 '
                    } else {
                      this.deleteRow('电机03过流');
                    }

                    if (this.Error03 & 0x0004) {
                      this.addRow('电机03堵转') 
                      ErrTextTmp += '电机03堵转 '
                      this.ErrorData.Error03 += '电机03堵转 '
                    } else {
                      this.deleteRow('电机03堵转');
                    }

                    if (this.Error03 & 0x0008) {
                      this.addRow('编码器03故障') 
                      ErrTextTmp += '编码器03故障 '
                      this.ErrorData.Error03 += '编码器03故障 '
                    } else {
                      this.deleteRow('编码器03故障');
                    }
                }

                if (uint16MudbusData[7] != this.Error04) {
                    this.Error04 = uint16MudbusData[7];
                    this.ErrorData.Error04 = '';
                    if (this.Error04 & 0x0001) {
                      this.addRow('电机04缺相') 
                      ErrTextTmp += '电机04缺相 '
                      this.ErrorData.Error04 += '电机04缺相 '
                    } else {
                      this.deleteRow('电机04缺相');
                    }

                    if (this.Error04 & 0x0002) {
                      this.addRow('电机04过流') 
                      ErrTextTmp += '电机04过流 '
                      this.ErrorData.Error04 += '电机04过流 '
                    } else {
                      this.deleteRow('电机04过流');
                    }

                    if (this.Error04 & 0x0004) {
                      this.addRow('电机04堵转') 
                      ErrTextTmp += '电机04堵转 '
                      this.ErrorData.Error04 += '电机04堵转 '
                    } else {
                      this.deleteRow('电机04堵转');
                    }

                    if (this.Error04 & 0x0008) {
                      this.addRow('编码器04故障') 
                      ErrTextTmp += '编码器04故障 '
                      this.ErrorData.Error04 += '编码器04故障 '
                    } else {
                      this.deleteRow('编码器04故障');
                    }
                }

                if (uint16MudbusData[8] != this.Error05) {
                    this.Error05 = uint16MudbusData[8];
                    this.ErrorData.Error05 = '';
                    if (this.Error05 & 0x0001) {
                      this.addRow('电机05缺相') 
                      ErrTextTmp += '电机05缺相 '
                      this.ErrorData.Error05 += '电机05缺相 '
                    } else {
                      this.deleteRow('电机05缺相');
                    }

                    if (this.Error05 & 0x0002) {
                      this.addRow('电机05过流') 
                      ErrTextTmp += '电机05过流 '
                      this.ErrorData.Error05 += '电机05过流 '
                    } else {
                      this.deleteRow('电机05过流');
                    }

                    if (this.Error05 & 0x0004) {
                      this.addRow('电机05堵转') 
                      ErrTextTmp += '电机05堵转 '
                      this.ErrorData.Error05 += '电机05堵转 '
                    } else {
                      this.deleteRow('电机05堵转');
                    }

                    if (this.Error05 & 0x0008) {
                      this.addRow('编码器05故障') 
                      ErrTextTmp += '编码器05故障 '
                      this.ErrorData.Error05 += '编码器05故障 '
                    } else {
                      this.deleteRow('编码器05故障');
                    }
                }

                if (uint16MudbusData[9] != this.Error06) {
                    this.Error06 = uint16MudbusData[9];
                    this.ErrorData.Error06 = '';
                    if (this.Error06 & 0x0001) {
                      this.addRow('电机06缺相') 
                      ErrTextTmp += '电机06缺相 '
                      this.ErrorData.Error06 += '电机06缺相 '
                    } else {
                      this.deleteRow('电机06缺相');
                    }

                    if (this.Error06 & 0x0002) {
                      this.addRow('电机06过流') 
                      ErrTextTmp += '电机06过流 '
                      this.ErrorData.Error06 += '电机06过流 '
                    } else {
                      this.deleteRow('电机06过流');
                    }

                    if (this.Error06 & 0x0004) {
                      this.addRow('电机06堵转') 
                      ErrTextTmp += '电机06堵转 '
                      this.ErrorData.Error06 += '电机06堵转 '
                    } else {
                      this.deleteRow('电机06堵转');
                    }

                    if (this.Error06 & 0x0008) {
                      this.addRow('编码器06故障') 
                      ErrTextTmp += '编码器06故障 '
                      this.ErrorData.Error06 += '编码器06故障 '
                    } else {
                      this.deleteRow('编码器06故障');
                    }
                }

                if (uint16MudbusData[10] != this.Error07) {
                    this.Error07 = uint16MudbusData[10];
                    this.ErrorData.Error07 = '';
                    if (this.Error07 & 0x0001) {
                      this.addRow('电机07缺相') 
                      ErrTextTmp += '电机07缺相 '
                      this.ErrorData.Error07 += '电机07缺相 '
                    } else {
                      this.deleteRow('电机07缺相');
                    }

                    if (this.Error07 & 0x0002) {
                      this.addRow('电机07过流') 
                      ErrTextTmp += '电机07过流 '
                      this.ErrorData.Error07 += '电机07过流 '
                    } else {
                      this.deleteRow('电机07过流');
                    }

                    if (this.Error07 & 0x0004) {
                      this.addRow('电机07堵转') 
                      ErrTextTmp += '电机07堵转 '
                      this.ErrorData.Error07 += '电机07堵转 '
                    } else {
                      this.deleteRow('电机07堵转');
                    }

                    if (this.Error07 & 0x0008) {
                      this.addRow('编码器07故障') 
                      ErrTextTmp += '编码器07故障 '
                      this.ErrorData.Error07 += '编码器07故障 '
                    } else {
                      this.deleteRow('编码器07故障');
                    }
                }

                if (uint16MudbusData[11] != this.Error08) {
                    this.Error08 = uint16MudbusData[11];
                    this.ErrorData.Error08 = '';
                    if (this.Error08 & 0x0001) {
                      this.addRow('电机08缺相') 
                      ErrTextTmp += '电机08缺相 '
                      this.ErrorData.Error08 += '电机08缺相 '
                    } else {
                      this.deleteRow('电机08缺相');
                    }

                    if (this.Error08 & 0x0002) {
                      this.addRow('电机08过流') 
                      ErrTextTmp += '电机08过流 '
                      this.ErrorData.Error08 += '电机08过流 '
                    } else {
                      this.deleteRow('电机08过流');
                    }

                    if (this.Error08 & 0x0004) {
                      this.addRow('电机08堵转') 
                      ErrTextTmp += '电机08堵转 '
                      this.ErrorData.Error08 += '电机08堵转 '
                    } else {
                      this.deleteRow('电机08堵转');
                    }

                    if (this.Error08 & 0x0008) {
                      this.addRow('编码器08故障') 
                      ErrTextTmp += '编码器08故障 '
                      this.ErrorData.Error08 += '编码器08故障 '
                    } else {
                      this.deleteRow('编码器08故障');
                    }
                }

                if (uint16MudbusData[12] != this.Error09) {
                    this.Error09 = uint16MudbusData[12];
                    this.ErrorData.Error09 = '';
                    if (this.Error09 & 0x0001) {
                      this.addRow('电机09缺相') 
                      ErrTextTmp += '电机09缺相 '
                      this.ErrorData.Error09 += '电机09缺相 '
                    } else {
                      this.deleteRow('电机09缺相');
                    }

                    if (this.Error09 & 0x0002) {
                      this.addRow('电机09过流') 
                      ErrTextTmp += '电机09过流 '
                      this.ErrorData.Error09 += '电机09过流 '
                    } else {
                      this.deleteRow('电机09过流');
                    }

                    if (this.Error09 & 0x0004) {
                      this.addRow('电机09堵转') 
                      ErrTextTmp += '电机09堵转 '
                      this.ErrorData.Error09 += '电机09堵转 '
                    } else {
                      this.deleteRow('电机09堵转');
                    }

                    if (this.Error09 & 0x0008) {
                      this.addRow('编码器09故障') 
                      ErrTextTmp += '编码器09故障 '
                      this.ErrorData.Error09 += '编码器09故障 '
                    } else {
                      this.deleteRow('编码器09故障');
                    }
                }

                if (uint16MudbusData[13] != this.Error10) {
                    this.Error10 = uint16MudbusData[13];
                    this.ErrorData.Error10 = '';
                    if (this.Error10 & 0x0001) {
                      this.addRow('电机10缺相') 
                      ErrTextTmp += '电机10缺相 '
                      this.ErrorData.Error10 += '电机10缺相 '
                    } else {
                      this.deleteRow('电机10缺相');
                    }

                    if (this.Error10 & 0x0002) {
                      this.addRow('电机10过流') 
                      ErrTextTmp += '电机10过流 '
                      this.ErrorData.Error10 += '电机10过流 '
                    } else {
                      this.deleteRow('电机10过流');
                    }

                    if (this.Error10 & 0x0004) {
                      this.addRow('电机10堵转') 
                      ErrTextTmp += '电机10堵转 '
                      this.ErrorData.Error10 += '电机10堵转 '
                    } else {
                      this.deleteRow('电机10堵转');
                    }

                    if (this.Error10 & 0x0008) {
                      this.addRow('编码器10故障') 
                      ErrTextTmp += '编码器10故障 '
                      this.ErrorData.Error10 += '编码器10故障 '
                    } else {
                      this.deleteRow('编码器10故障');
                    }
                }

                if (uint16MudbusData[14] != this.Error11) {
                    this.Error11 = uint16MudbusData[14];
                    this.ErrorData.Error11 = '';
                    if (this.Error11 & 0x0001) {
                      this.addRow('电机11缺相') 
                      ErrTextTmp += '电机11缺相 '
                      this.ErrorData.Error11 += '电机11缺相 '
                    } else {
                      this.deleteRow('电机11缺相');
                    }

                    if (this.Error11 & 0x0002) {
                      this.addRow('电机11过流') 
                      ErrTextTmp += '电机11过流 '
                      this.ErrorData.Error11 += '电机11过流 '
                    } else {
                      this.deleteRow('电机11过流');
                    }

                    if (this.Error11 & 0x0004) {
                      this.addRow('电机11堵转') 
                      ErrTextTmp += '电机11堵转 '
                      this.ErrorData.Error11 += '电机11堵转 '
                    } else {
                      this.deleteRow('电机11堵转');
                    }

                    if (this.Error11 & 0x0008) {
                      this.addRow('编码器11故障') 
                      ErrTextTmp += '编码器11故障 '
                      this.ErrorData.Error11 += '编码器11故障 '
                    } else {
                      this.deleteRow('编码器11故障');
                    }
                }

                if (uint16MudbusData[15] != this.Error12) {
                    this.Error12 = uint16MudbusData[15];
                    this.ErrorData.Error12 = '';
                    if (this.Error12 & 0x0001) {
                      this.addRow('电机12缺相') 
                      ErrTextTmp += '电机12缺相 '
                      this.ErrorData.Error12 += '电机12缺相 '
                    } else {
                      this.deleteRow('电机12缺相');
                    }

                    if (this.Error12 & 0x0002) {
                      this.addRow('电机12过流') 
                      ErrTextTmp += '电机12过流 '
                      this.ErrorData.Error12 += '电机12过流 '
                    } else {
                      this.deleteRow('电机12过流');
                    }

                    if (this.Error12 & 0x0004) {
                      this.addRow('电机12堵转') 
                      ErrTextTmp += '电机12堵转 '
                      this.ErrorData.Error12 += '电机12堵转 '
                    } else {
                      this.deleteRow('电机12堵转');
                    }

                    if (this.Error12 & 0x0008) {
                      this.addRow('编码器12故障') 
                      ErrTextTmp += '编码器12故障 '
                      this.ErrorData.Error12 += '编码器12故障 '
                    } else {
                      this.deleteRow('编码器12故障');
                    }
                }

                if (uint16MudbusData[16] != this.Error13) {
                    this.Error13 = uint16MudbusData[16];
                    this.ErrorData.Error13 = '';
                    if (this.Error13 & 0x0001) {
                      this.addRow('电机13缺相') 
                      ErrTextTmp += '电机13缺相 '
                      this.ErrorData.Error13 += '电机13缺相 '
                    } else {
                      this.deleteRow('电机13缺相');
                    }

                    if (this.Error13 & 0x0002) {
                      this.addRow('电机13过流') 
                      ErrTextTmp += '电机13过流 '
                      this.ErrorData.Error13 += '电机13过流 '
                    } else {
                      this.deleteRow('电机13过流');
                    }

                    if (this.Error13 & 0x0004) {
                      this.addRow('电机13堵转') 
                      ErrTextTmp += '电机13堵转 '
                      this.ErrorData.Error13 += '电机13堵转 '
                    } else {
                      this.deleteRow('电机13堵转');
                    }

                    if (this.Error13 & 0x0008) {
                      this.addRow('编码器13故障') 
                      ErrTextTmp += '编码器13故障 '
                      this.ErrorData.Error13 += '编码器13故障 '
                    } else {
                      this.deleteRow('编码器13故障');
                    }
                }

                if (uint16MudbusData[17] != this.Error14) {
                    this.Error14 = uint16MudbusData[17];
                    this.ErrorData.Error14 = '';
                    if (this.Error14 & 0x0001) {
                      this.addRow('电机14缺相') 
                      ErrTextTmp += '电机14缺相 '
                      this.ErrorData.Error14 += '电机14缺相 '
                    } else {
                      this.deleteRow('电机14缺相');
                    }

                    if (this.Error14 & 0x0002) {
                      this.addRow('电机14过流') 
                      ErrTextTmp += '电机14过流 '
                      this.ErrorData.Error14 += '电机14过流 '
                    } else {
                      this.deleteRow('电机14过流');
                    }

                    if (this.Error14 & 0x0004) {
                      this.addRow('电机14堵转') 
                      ErrTextTmp += '电机14堵转 '
                      this.ErrorData.Error14 += '电机14堵转 '
                    } else {
                      this.deleteRow('电机14堵转');
                    }

                    if (this.Error14 & 0x0008) {
                      this.addRow('编码器14故障') 
                      ErrTextTmp += '编码器14故障 '
                      this.ErrorData.Error14 += '编码器14故障 '
                    } else {
                      this.deleteRow('编码器14故障');
                    }
                }

                if (uint16MudbusData[18] != this.Error15) {
                    this.Error15 = uint16MudbusData[18];
                    this.ErrorData.Error15 = '';
                    if (this.Error15 & 0x0001) {
                      this.addRow('电机15缺相') 
                      ErrTextTmp += '电机15缺相 '
                      this.ErrorData.Error15 += '电机15缺相 '
                    } else {
                      this.deleteRow('电机15缺相');
                    }

                    if (this.Error15 & 0x0002) {
                      this.addRow('电机15过流') 
                      ErrTextTmp += '电机15过流 '
                      this.ErrorData.Error15 += '电机15过流 '
                    } else {
                      this.deleteRow('电机15过流');
                    }

                    if (this.Error15 & 0x0004) {
                      this.addRow('电机15堵转') 
                      ErrTextTmp += '电机15堵转 '
                      this.ErrorData.Error15 += '电机15堵转 '
                    } else {
                      this.deleteRow('电机15堵转');
                    }

                    if (this.Error15 & 0x0008) {
                      this.addRow('编码器15故障') 
                      ErrTextTmp += '编码器15故障 '
                      this.ErrorData.Error15 += '编码器15故障 '
                    } else {
                      this.deleteRow('编码器15故障');
                    }
                }
            }
        }
    })
  },
  beforeDestroy(){
   
  }

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
.indoor {
  flex: 2.7;
  background-color: #d7e4f2;
  margin-top: 4px;
  padding-bottom: 5px;
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

.el-input__inner[DangerColor="danger"] {
  background-color:red;
}

.el-input__inner[InfoColor="info"] {
  background-color:#EBEEF5;
}

.el-input__inner[WarningColor="warning"] {
  background-color: #E6A23C;
}

.el-input__inner[SuccessColor="success"] {
  background-color: #67C23A;
}

.el-textarea__inner {
  background-color:#ffffff !important;
  font-size: 13px !important;
  padding: 2px !important;
  color: red !important;
}


.el-hanler {
  padding: 5px !important;
  background-color: #606266;
}



.el-select {
  
  height:32px !important;
}

.el-input__inner {
   height:28px !important;
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
</style>




