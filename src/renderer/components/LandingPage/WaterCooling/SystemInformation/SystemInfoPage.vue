<template>
  <div >  
      <div >
        <fieldset style="background-color:#EBEEF5; borde-color: white;">
          <legend style="font:8px; font-weight:800;  margin-left:15px; margin-right:15px;">ϵͳ��Ϣ</legend> 
            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�趨ģʽ</el-button>
                  <el-input v-model="SystemData.SetMode" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">����ģʽ</el-button>
                  <el-input size="mini" v-model="SystemData.RunMode" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����趨</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetCool + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����趨</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetHeat + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����¶�</el-button>
                  <el-input size="mini" v-bind:value="SystemData.CtrlTemp + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">���Ʒ�ʽ</el-button>
                  <el-input size="mini" v-model="SystemData.CtrlMode" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��ˮ�¶�</el-button>
                  <el-input v-bind:value="SystemData.OutWaterTemp + TempIcon" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��ˮ�¶�</el-button>
                  <el-input size="mini" v-bind:value="SystemData.InWaterTemp + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��ˮѹ��</el-button>
                  <el-input size="mini" v-bind:value="SystemData.OutWaterPress + KPaIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��ˮѹ��</el-button>
                  <el-input size="mini" v-bind:value="SystemData.InWaterPress + KPaIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ˮ���²�</el-button>
                  <el-input size="mini" v-bind:value="SystemData.WaterTempDiff + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ˮѹѹ��</el-button>
                  <el-input size="mini" v-bind:value="SystemData.WaterPressDiff + KPaIcon" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����¶�</el-button>
                  <el-input v-bind:value="SystemData.AroundTemp + TempIcon" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ϵͳ��ˮ</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SysWaterTemp + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ˮ��Ƶ��</el-button>
                  <el-input size="mini" v-bind:value="SystemData.PumpFreq + HzIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ˮ�õ���</el-button>
                  <el-input size="mini" v-bind:value="SystemData.PumpCurrent + AIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ˮ��IPM</el-button>
                  <el-input size="mini" v-bind:value="SystemData.PumpIPMTemp + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ˮ������</el-button>
                  <el-input size="mini" v-model="SystemData.PumpRunTime" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����</el-button>
                  <el-input
                    v-if="(SystemData.Heater==='�ر�')"
                    size="mini"
                    readonly
                    v-model="SystemData.Heater"
                    
                  />
                  <el-input
                    v-else-if="(SystemData.Heater==='����')"
                    size="mini"
                    readonly
                    v-model="SystemData.Heater"
                    SuccessColor="success"
                  />
                  <el-input v-else size="mini" readonly v-model="SystemData.Heater" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�ɽӵ�</el-button>
                  <el-input
                    v-if="(SystemData.WarningOut==='�ر�')"
                    size="mini"
                    readonly
                    v-model="SystemData.WarningOut"
                    
                  />
                  <el-input
                    v-else-if="(SystemData.WarningOut==='����')"
                    size="mini"
                    readonly
                    v-model="SystemData.WarningOut"
                    SuccessColor="success"
                  />
                  <el-input v-else size="mini" readonly v-model="SystemData.WarningOut" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ɢ�ȷ���</el-button>
                  <el-input
                    v-if="(SystemData.CoolingFan==='�ر�')"
                    size="mini"
                    readonly
                    v-model="SystemData.CoolingFan"
                    
                  />
                  <el-input
                    v-else-if="(SystemData.CoolingFan==='����')"
                    size="mini"
                    readonly
                    v-model="SystemData.CoolingFan"
                    SuccessColor="success"
                  />
                  <el-input v-else size="mini" readonly v-model="SystemData.CoolingFan" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�ֶ�ģʽ</el-button>
                  <el-input
                    v-if="(SystemData.ManualMode==='�ر�')"
                    size="mini"
                    readonly
                    v-model="SystemData.ManualMode"
                    
                  />
                  <el-input
                    v-else-if="(SystemData.ManualMode==='����')"
                    size="mini"
                    readonly
                    v-model="SystemData.ManualMode"
                    SuccessColor="success"
                  />
                  <el-input v-else size="mini" readonly v-model="SystemData.ManualMode" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��������1</el-button>
                  <el-input
                    v-if="(SystemData.OilReturn1==='�ر�')"
                    size="mini"
                    readonly
                    v-model="SystemData.OilReturn1"
                    
                  />
                  <el-input
                    v-else-if="(SystemData.OilReturn1==='����')"
                    size="mini"
                    readonly
                    v-model="SystemData.OilReturn1"
                    SuccessColor="success"
                  />
                  <el-input v-else size="mini" readonly v-model="SystemData.OilReturn1" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��������2</el-button>
                  <el-input
                    v-if="(SystemData.OilReturn2==='�ر�')"
                    size="mini"
                    readonly
                    v-model="SystemData.OilReturn2"
                    
                  />
                  <el-input
                    v-else-if="(SystemData.OilReturn2==='����')"
                    size="mini"
                    readonly
                    v-model="SystemData.OilReturn2"
                    SuccessColor="success"
                  />
                  <el-input v-else size="mini" readonly v-model="SystemData.OilReturn2" />
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">Һ·��</el-button>
                  <el-input
                    v-if="(SystemData.HydraulicValve==='�ر�')"
                    size="mini"
                    readonly
                    v-model="SystemData.HydraulicValve"
                    
                  />
                  <el-input
                    v-else-if="(SystemData.HydraulicValve==='����')"
                    size="mini"
                    readonly
                    v-model="SystemData.HydraulicValve"
                    SuccessColor="success"
                  />
                  <el-input v-else size="mini" readonly v-model="SystemData.HydraulicValve" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ˮ·��1</el-button>
                  <el-input
                    v-if="(SystemData.WaterValve1==='�ر�')"
                    size="mini"
                    readonly
                    v-model="SystemData.WaterValve1"
                    
                  />
                  <el-input
                    v-else-if="(SystemData.WaterValve1==='����')"
                    size="mini"
                    readonly
                    v-model="SystemData.WaterValve1"
                    SuccessColor="success"
                  />
                  <el-input v-else size="mini" readonly v-model="SystemData.WaterValve1" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ˮ·��2</el-button>
                  <el-input
                    v-if="(SystemData.WaterValve2==='�ر�')"
                    size="mini"
                    readonly
                    v-model="SystemData.WaterValve2"
                    
                  />
                  <el-input
                    v-else-if="(SystemData.WaterValve2==='����')"
                    size="mini"
                    readonly
                    v-model="SystemData.WaterValve2"
                    SuccessColor="success"
                  />
                  <el-input v-else size="mini" readonly v-model="SystemData.WaterValve2" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ˮ·��3</el-button>
                  <el-input
                    v-if="(SystemData.WaterValve3==='�ر�')"
                    size="mini"
                    readonly
                    v-model="SystemData.WaterValve3"
                    
                  />
                  <el-input
                    v-else-if="(SystemData.WaterValve3==='����')"
                    size="mini"
                    readonly
                    v-model="SystemData.WaterValve3"
                    SuccessColor="success"
                  />
                  <el-input v-else size="mini" readonly v-model="SystemData.WaterValve3" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�ͼ��ȴ�1</el-button>
                  <el-input
                    v-if="(SystemData.OilHeatStrip1==='�ر�')"
                    size="mini"
                    readonly
                    v-model="SystemData.OilHeatStrip1"
                    
                  />
                  <el-input
                    v-else-if="(SystemData.OilHeatStrip1==='����')"
                    size="mini"
                    readonly
                    v-model="SystemData.OilHeatStrip1"
                    SuccessColor="success"
                  />
                  <el-input v-else size="mini" readonly v-model="SystemData.OilHeatStrip1" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�ͼ��ȴ�2</el-button>
                  <el-input
                    v-if="(SystemData.OilHeatStrip2==='�ر�')"
                    size="mini"
                    readonly
                    v-model="SystemData.OilHeatStrip2"
                    
                  />
                  <el-input
                    v-else-if="(SystemData.OilHeatStrip2==='����')"
                    size="mini"
                    readonly
                    v-model="SystemData.OilHeatStrip2"
                    SuccessColor="success"
                  />
                  <el-input v-else size="mini" readonly v-model="SystemData.OilHeatStrip2" />
                </div>
              </el-col>
            </el-row>  
        </fieldset>
      </div>

      <div style="margin-top: 5px;">
        <fieldset style="background-color:#EBEEF5; border-color: white;"> 
          <legend style="font:8px; font-weight:800;  margin-left:15px; margin-right:15px;">��ϵͳ1��Ϣ</legend> 
            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����¶�1</el-button>
                  <el-input v-bind:value="FluorineData1.ExhaustGasTemp1 + TempIcon" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��������1</el-button>
                  <el-input
                    v-if="(FluorineData1.ExhaustGasProt1==='����' || FluorineData1.ExhaustGasProt1==='')"
                    size="mini"
                    readonly
                    v-model="FluorineData1.ExhaustGasProt1"

                  />
                  <el-input v-else size="mini" readonly v-model="FluorineData1.ExhaustGasProt1" WarningColor="warning"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����¶�1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.EvaporatorTemp1 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��������1</el-button>
                  <el-input
                    v-if="(FluorineData1.EvaporatorProt1==='����' || FluorineData1.EvaporatorProt1==='')"
                    size="mini"
                    readonly
                    v-model="FluorineData1.EvaporatorProt1"
                    
                  />
                  <el-input v-else size="mini" readonly v-model="FluorineData1.EvaporatorProt1" WarningColor="warning"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����¶�1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.CondenserTemp1 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��������1</el-button>
                  <el-input
                    v-if="(FluorineData1.CondenserProt1==='����' || FluorineData1.CondenserProt1==='')"
                    size="mini"
                    readonly
                    v-model="FluorineData1.CondenserProt1"
                    
                  />
                  <el-input v-else size="mini" readonly v-model="FluorineData1.CondenserProt1" WarningColor="warning"/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����¶�1</el-button>
                  <el-input v-bind:value="FluorineData1.SuctionTemp1 + TempIcon" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">Һ���¶�1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.LiquidPipeTemp1 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��ѹѹ��1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.LowPress1 + barIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��ѹѹ��1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.HighPress1 + barIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ������1</el-button>
                  <el-input
                    v-if="(FluorineData1.PressProt1==='����' || FluorineData1.PressProt1==='')"
                    size="mini"
                    readonly
                    v-model="FluorineData1.PressProt1"
                    
                  />
                  <el-input v-else size="mini" readonly v-model="FluorineData1.PressProt1" WarningColor="warning"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ��AC����1</el-button>
                  <el-input
                    v-if="(FluorineData1.CompAcProt1==='����' || FluorineData1.CompAcProt1==='')"
                    size="mini"
                    readonly
                    v-model="FluorineData1.CompAcProt1"
                  />
                  <el-input v-else size="mini" readonly v-model="FluorineData1.CompAcProt1" WarningColor="warning"/>
                </div>
              </el-col>
            </el-row>
            
            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�������ȶ�1</el-button>
                  <el-input v-bind:value="FluorineData1.ReverseGasOverheat1 + TempIcon" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�������ȶ�1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.ExhaustGasOverheat1 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">���������1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.CondenserCasOverCool1 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">Ŀ������1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.TargetExhaustGas1 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">Ŀ������1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.TargetCondenserGas1 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����ڽ׶�1</el-button>
                  <el-input size="mini" v-model="FluorineData1.EEVStatus1" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">����ʼ����1</el-button>
                  <el-input v-model="FluorineData1.EEVInitStep1" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��Ŀ�꿪��1</el-button>
                  <el-input size="mini" v-model="FluorineData1.EEVTargetStep1" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">����ǰ����1</el-button>
                  <el-input size="mini" v-model="FluorineData1.EEVNowStep1" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">����������1</el-button>
                  <el-input size="mini" v-model="FluorineData1.EEVAdjustStep1" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">����������1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.EEVAdjustPeriod1 + SecIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����ڼ�ʱ1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.EEVAdjustTime1 + SecIcon" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">������������1</el-button>
                  <el-input v-bind:value="FluorineData1.ReverseGasOverheatRate1 + RateIcon" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">������������1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.ExhaustGasOverheatRate1 + RateIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ˮ�±仯��1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.WaterTempRate1 + RateIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ���ܵ�Ƶ��1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.CompAdjustFreq1 + HzIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ���ܵ�����1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.CompAdjustPeriod1 + SecIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ��״̬1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.CompRunStatus1" readonly/>
                </div>
              </el-col>
            </el-row>


            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ��Ŀ��Ƶ��1</el-button>
                  <el-input v-bind:value="FluorineData1.CompTargetFreq1 + HzIcon" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ������Ƶ��1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.CompRunFreq1 + HzIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ��IPM�¶�1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.CompIPMTemp1 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ��AC����1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.CompACCurrent1 + AIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ������ʱ��1</el-button>
                  <el-input size="mini" v-model="FluorineData1.CompRunTime1" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ��ͣ��ʱ��1</el-button>
                  <el-input size="mini" v-model="FluorineData1.CompSoptTime1" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">���Ŀ�����1</el-button>
                  <el-input v-model="FluorineData1.FanTargetFreq1" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">������з���1</el-button>
                  <el-input size="mini" v-model="FluorineData1.FanRunFreq1" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">���IPM�¶�1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.FanIPMTemp1 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">���AC����1</el-button>
                  <el-input size="mini" v-bind:value="FluorineData1.FanACCurrent1 + AIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�������ʱ��1</el-button>
                  <el-input size="mini" v-model="FluorineData1.FanRunTime1" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">���ֹͣʱ��1</el-button>
                  <el-input size="mini" v-model="FluorineData1.FanSoptTime1" readonly/>
                </div>
              </el-col>
            </el-row> 
          </fieldset>
      </div>

      <div style="margin-top: 5px;">
        <fieldset style="background-color:#EBEEF5; border-color: white;"> 
          <legend style="font:8px; font-weight:800;  margin-left:15px; margin-right:15px;">��ϵͳ2��Ϣ</legend> 
            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����¶�2</el-button>
                  <el-input v-bind:value="FluorineData2.ExhaustGasTemp2 + TempIcon" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��������2</el-button>
                  <el-input
                    v-if="(FluorineData2.ExhaustGasProt2==='����' || FluorineData2.ExhaustGasProt2==='' || FluorineData2.ExhaustGasProt2===' / ')"
                    size="mini"
                    readonly
                    v-model="FluorineData2.ExhaustGasProt2"
                    
                  />
                  <el-input v-else size="mini" readonly v-model="FluorineData2.ExhaustGasProt2" WarningColor="warning"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����¶�2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.EvaporatorTemp2 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��������2</el-button>
                  <el-input
                    v-if="(FluorineData2.EvaporatorProt2==='����' || FluorineData2.EvaporatorProt2==='' || FluorineData2.EvaporatorProt2===' / ')"
                    size="mini"
                    readonly
                    v-model="FluorineData2.EvaporatorProt2"
                    
                  />
                  <el-input v-else size="mini" readonly v-model="FluorineData2.EvaporatorProt2" WarningColor="warning"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����¶�2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.CondenserTemp2 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��������2</el-button>
                  <el-input
                    v-if="(FluorineData2.CondenserProt2==='����'  || FluorineData2.CondenserProt2==='' || FluorineData2.CondenserProt2===' / ')"
                    size="mini"
                    readonly
                    v-model="FluorineData2.CondenserProt2"
                    
                  />
                  <el-input v-else size="mini" readonly v-model="FluorineData2.CondenserProt2" WarningColor="warning"/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����¶�2</el-button>
                  <el-input v-bind:value="FluorineData2.SuctionTemp2 + TempIcon" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">Һ���¶�2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.LiquidPipeTemp2 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��ѹѹ��2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.LowPress2 + barIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��ѹѹ��2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.HighPress2 + barIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ������2</el-button>
                  <el-input
                    v-if="(FluorineData2.PressProt2==='����' || FluorineData2.PressProt2==='' || FluorineData2.PressProt2===' / ')"
                    size="mini"
                    readonly
                    v-model="FluorineData2.PressProt2"
                    
                  />
                  <el-input v-else size="mini" readonly v-model="FluorineData2.PressProt2" WarningColor="warning"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ��AC����2</el-button>
                  <el-input
                    v-if="(FluorineData2.CompAcProt2==='����' || FluorineData2.CompAcProt2==='' || FluorineData2.CompAcProt2===' / ')"
                    size="mini"
                    readonly
                    v-model="FluorineData2.CompAcProt2"
                    
                  />
                  <el-input v-else size="mini" readonly v-model="FluorineData2.CompAcProt2" WarningColor="warning"/>
                </div>
              </el-col>
            </el-row>
            
            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�������ȶ�2</el-button>
                  <el-input v-bind:value="FluorineData2.ReverseGasOverheat2 + TempIcon" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�������ȶ�2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.ExhaustGasOverheat2 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">���������2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.CondenserCasOverCool2 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">Ŀ������2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.TargetExhaustGas2 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">Ŀ������2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.TargetCondenserGas2 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����ڽ׶�2</el-button>
                  <el-input size="mini" v-model="FluorineData2.EEVStatus2" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">����ʼ����2</el-button>
                  <el-input v-model="FluorineData2.EEVInitStep2" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">��Ŀ�꿪��2</el-button>
                  <el-input size="mini" v-model="FluorineData2.EEVTargetStep2" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">����ǰ����2</el-button>
                  <el-input size="mini" v-model="FluorineData2.EEVNowStep2" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">����������2</el-button>
                  <el-input size="mini" v-model="FluorineData2.EEVAdjustStep2" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">����������2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.EEVAdjustPeriod2 + SecIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�����ڼ�ʱ2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.EEVAdjustTime2 + SecIcon" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">������������2</el-button>
                  <el-input v-bind:value="FluorineData2.ReverseGasOverheatRate2 + RateIcon" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">������������2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.ExhaustGasOverheatRate2 + RateIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ˮ�±仯��2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.WaterTempRate2 + RateIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ���ܵ�Ƶ��2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.CompAdjustFreq2 + HzIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ���ܵ�����2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.CompAdjustPeriod2 + SecIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ��״̬2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.CompRunStatus2" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ��Ŀ��Ƶ��2</el-button>
                  <el-input v-bind:value="FluorineData2.CompTargetFreq2 + HzIcon" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ������Ƶ��2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.CompRunFreq2 + HzIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ��IPM�¶�2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.CompIPMTemp2 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ��AC����2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.CompACCurrent2 + AIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ������ʱ��2</el-button>
                  <el-input size="mini" v-model="FluorineData2.CompRunTime2" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">ѹ��ͣ��ʱ��2</el-button>
                  <el-input size="mini" v-model="FluorineData2.CompSoptTime2" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">���Ŀ�����2</el-button>
                  <el-input v-model="FluorineData2.FanTargetFreq2" readonly size="mini"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">������з���2</el-button>
                  <el-input size="mini" v-model="FluorineData2.FanRunFreq2" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">���IPM�¶�2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.FanIPMTemp2 + TempIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">���AC����2</el-button>
                  <el-input size="mini" v-bind:value="FluorineData2.FanACCurrent2 + AIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">�������ʱ��2</el-button>
                  <el-input size="mini" v-model="FluorineData2.FanRunTime2" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">���ֹͣʱ��2</el-button>
                  <el-input size="mini" v-model="FluorineData2.FanSoptTime2" readonly/>
                </div>
              </el-col>
            </el-row> 
          </fieldset>
      </div>
  </div>
</template>
<script>
import { ipcRenderer } from 'electron';
// import { setTimeout } from 'timers';
// import { EventBus } from "../../../../Utils/EventBus.js"
import { LogUtils } from '../../../../json/LogUtils'; 
import {
    // APP_EVENT_INIT_XLSX,
    // APP_EVENT_CLOSE_XLSX,
    APP_EVENT_OPEN_XLSX,
    // APP_EVENT_WRITE_XLSX,
    APP_EVENT_STOP_XLSX,
    // APP_EVENT_CLEAN_DATA,
  } from '../../../../js/constants/ElectronConstants'
  import {
    APP_REPORT_UART_RECV_DATA,
  } from '../../../../js/constants/IndoorConstants'
// import { constants } from 'fs';

export default {
  name: 'landing-page',
  computed: {
  },
  data() {
    return {
      SystemData: {
        SetMode: '',
        RunMode: '',
        SetCool: '',
        SetHeat: '',
        CtrlTemp: '',
        CtrlMode: '',
        OutWaterTemp: '',
        InWaterTemp: '',
        OutWaterPress: '',
        InWaterPress: '',
        WaterTempDiff: '',
        WaterPressDiff: '',
        AroundTemp: '',
        SysWaterTemp: '',
        PumpFreq: '',
        PumpCurrent: '',
        PumpIPMTemp: '',
        PumpRunTime: '',
        Heater: '',
        WarningOut: '',
        CoolingFan: '',
        ManualMode: '',
        OilReturn1: '',
        OilReturn2: '',
        HydraulicValve: '',
        WaterValve1: '',
        WaterValve2: '',
        WaterValve3: '',
        OilHeatStrip1: '',
        OilHeatStrip2: '',
      },
      
      FluorineData1: {
        ExhaustGasTemp1: '',
        ExhaustGasProt1: '',
        EvaporatorTemp1: '',
        EvaporatorProt1: '',
        CondenserTemp1: '',
        CondenserProt1: '',
        SuctionTemp1: '',
        LiquidPipeTemp1: '',
        LowPress1: '',
        HighPress1: '',
        PressProt1: '',
        CompAcProt1: '',
        ReverseGasOverheat1: '',
        ExhaustGasOverheat1: '',
        CondenserCasOverCool1: '',
        TargetExhaustGas1: '',
        TargetCondenserGas1: '',
        EEVStatus1: '',
        EEVInitStep1: '',
        EEVTargetStep1: '',
        EEVNowStep1: '',
        EEVAdjustStep1: '',
        EEVAdjustPeriod1: '',
        EEVAdjustTime1: '',
        ReverseGasOverheatRate1: '',
        ExhaustGasOverheatRate1: '',
        WaterTempRate1: '',
        CompAdjustFreq1: '',
        CompAdjustPeriod1: '',
        CompRunStatus1: '',
        CompTargetFreq1: '',
        CompRunFreq1: '',
        CompIPMTemp1: '',
        CompACCurrent1: '',
        CompRunTime1: '',
        CompSoptTime1: '',
        FanTargetFreq1: '',
        FanRunFreq1: '',
        FanIPMTemp1: '',
        FanACCurrent1: '',
        FanRunTime1: '',
        FanSoptTime1: '',
      },

      FluorineData2: {
        ExhaustGasTemp2: '',
        ExhaustGasProt2: '',
        EvaporatorTemp2: '',
        EvaporatorProt2: '',
        CondenserTemp2: '',
        CondenserProt2: '',
        SuctionTemp2: '',
        LiquidPipeTemp2: '',
        LowPress2: '',
        HighPress2: '',
        PressProt2: '',
        CompAcProt2: '',
        ReverseGasOverheat2: '',
        ExhaustGasOverheat2: '',
        CondenserCasOverCool2: '',
        TargetExhaustGas2: '',
        TargetCondenserGas2: '',
        EEVStatus2: '',
        EEVInitStep2: '',
        EEVTargetStep2: '',
        EEVNowStep2: '',
        EEVAdjustStep2: '',
        EEVAdjustPeriod2: '',
        EEVAdjustTime2: '',
        ReverseGasOverheatRate2: '',
        ExhaustGasOverheatRate2: '',
        WaterTempRate2: '',
        CompAdjustFreq2: '',
        CompAdjustPeriod2: '',
        CompRunStatus2: '',
        CompTargetFreq2: '',
        CompRunFreq2: '',
        CompIPMTemp2: '',
        CompACCurrent2: '',
        CompRunTime2: '',
        CompSoptTime2: '',
        FanTargetFreq2: '',
        FanRunFreq2: '',
        FanIPMTemp2: '',
        FanACCurrent2: '',
        FanRunTime2: '',
        FanSoptTime2: '',
      },
      ErrorData: {
        FluorineSystemErr1: '', 
        FluorineDriverErr1: '', 
        FluorineSystemErr2: '', 
        FluorineDriverErr2: '',
        WaterSystemErr: '', 
        WaterDriverErr: '', 
        SystemErr: '',
      },
      logHandle: null,
      nowTime: null,
      fileName: 'csv',
      csbStatue: 'close',
      currentStatue: false,

      TempIcon: '',
      AIcon: '',
      KPaIcon: '',
      barIcon: '',
      HzIcon: '',
      RateIcon: '',
      SecIcon: ''
    
    }

  },
  methods: {
      changelan () {
        this.$store.dispatch('ChangeLanFun')
      }, 
      refreshPortList () {
        ipcRenderer.send(IPC_CHANNEL_REFRESH_COM_LIST, 0)
      },
      startConnect () {
        ipcRenderer.send(IPC_CHANNEL_START_CONNECT, 0)
        this.currentStatue = true;
      },
      stopConnect () {
        ipcRenderer.send(IPC_CHANNEL_STOP_DOWNLOAD, 0)
        this.currentStatue = false;
      },
  },


  watch: {
    ['lang'](value) {
      if (value) {
          this.$i18n.locale = 'zh' 
          this.$store.dispatch('SetLocale', 'zh')
      } else {
          this.$i18n.locale = 'en'
          this.$store.dispatch('SetLocale', 'en')
      }

      this.OutdoorNG = ''
      this.IndoorNG = ''
    },
  },
  
  created: function () {

    ipcRenderer.on(APP_EVENT_OPEN_XLSX, (event, arg) => {
      if (this.$store.state.SystemData.MonitorMode === 'outdoor')
      {
        let jsonPath  //json·��
        let csvHead = [this.SystemData, this.FluorineData1, this.ErrorData, this.FluorineData2] 

        // console.log('test1', __dirname)
        // console.log('test2', this.$store.state.SystemData.csvFilePath)

        if (this.fileName !== this.$store.state.SystemData.OutcsvFilePath) {
          this.fileName = this.$store.state.SystemData.OutcsvFilePath
          jsonPath =  "./zhMap.json"  
          //jsonPath =  __dirname + "..\\..\\..\\..\\..\\json\\zhMap.json"
          this.logHandle = new LogUtils(this.fileName, jsonPath, csvHead);
        } else {
          //this.fileName = this.fileName
        }

        if ((this.logHandle === null) || (this.csbStatue==='close')) {
          
        } else {
          this.logHandle = this.logHandle
        } 

        this.csbStatue = 'open'
      }

    })

    //output EXcel
    ipcRenderer.on(APP_EVENT_STOP_XLSX, (event, arg) => {
      this.csbStatue = 'close'
    })

    //Serial Data 
    ipcRenderer.on(APP_REPORT_UART_RECV_DATA, (event, arg) => {
        let uint8ModbusData = [], uint16MudbusData = [], int16MudbusData = [];

        //console.log("recv:", arg)
        uint8ModbusData = arg.slice(0, arg.length - 2);
        uint8ModbusData = uint8ModbusData.slice(3);

        for (let i = 0; i < (arg[2]/2); i++) {
          uint16MudbusData[i] = ((uint8ModbusData[i*2] << 8) | (uint8ModbusData[i*2 + 1]))
          

          if ((i === (106-20)) || (i === (107-20)) || (i === (108-20)) || (i === (109-20)) || 
              (i === (88-20)) || (i === (89-20)) || (i === (95-20)) || (i === (96-20)) || (i ===(81-20)) || (i === (82-20))){
                //����ʱ��ֵ����ת���з���������
              int16MudbusData[i] = uint16MudbusData[i];
          }
          else{
            if(uint16MudbusData[i] & 0x8000) {
              int16MudbusData[i] = -(65536 - uint16MudbusData[i]);
            } else {
              int16MudbusData[i] = uint16MudbusData[i];
            }
          }
          
         
        }

        this.TempIcon = '��'
        this.AIcon = 'A'
        this.KPaIcon = 'kPa'
        this.barIcon = 'bar'
        this.HzIcon = 'Hz'
        this.RateIcon = '��/min'
        this.SecIcon = 's'


        //������Ϣ����
        this.ErrorData.FluorineSystemErr1 = '0x' + uint16MudbusData[3].toString(16);
        this.ErrorData.FluorineDriverErr1 = '0x' + uint16MudbusData[4].toString(16);
        this.ErrorData.FluorineSystemErr2 = '0x' + uint16MudbusData[5].toString(16); 
        this.ErrorData.FluorineDriverErr2 = '0x' + uint16MudbusData[6].toString(16);
        this.ErrorData.WaterSystemErr = '0x' + uint16MudbusData[7].toString(16);
        this.ErrorData.WaterDriverErr = '0x' + uint16MudbusData[8].toString(16);
        this.ErrorData.SystemErr = '0x' + uint16MudbusData[9].toString(16);

        if ((uint16MudbusData[4] & 0x100) && (uint16MudbusData[4] & 0x2000))
        {
          this.ErrorData.FluorineDriverErr1 = '0x' + uint16MudbusData[4].toString(16) + '(ѹ1:' + uint16MudbusData[122].toString() +  ')' + '(��1:' + uint16MudbusData[124].toString() +  ')';
        }
        else if (uint16MudbusData[4] & 0x100)
        {
          this.ErrorData.FluorineDriverErr1 = '0x' + uint16MudbusData[4].toString(16) + '(ѹ1:' + uint16MudbusData[122].toString() +  ')'; 
        }
        else if (uint16MudbusData[4] & 0x2000)
        {
          this.ErrorData.FluorineDriverErr1 = '0x' + uint16MudbusData[4].toString(16) + '(��1:' + uint16MudbusData[124].toString() +  ')';
        }

        if ((uint16MudbusData[6] & 0x100) && (uint16MudbusData[6] & 0x2000))
        {
          this.ErrorData.FluorineDriverErr2 = '0x' + uint16MudbusData[6].toString(16) + '(ѹ2:' + uint16MudbusData[123].toString() +  ')' + '(��2:' + uint16MudbusData[125].toString() +  ')';
        }
        else if (uint16MudbusData[6] & 0x100)
        {
          this.ErrorData.FluorineDriverErr2 = '0x' + uint16MudbusData[6].toString(16) + '(ѹ2:' + uint16MudbusData[123].toString() +  ')'; 
        }
        else if (uint16MudbusData[6] & 0x2000)
        {
          this.ErrorData.FluorineDriverErr2 = '0x' + uint16MudbusData[6].toString(16) + '(��2:' + uint16MudbusData[125].toString() +  ')';
        }

        if (uint16MudbusData[8] & 0x4)
        {
          this.ErrorData.WaterDriverErr = '0x' + uint16MudbusData[8].toString(16) + '(��:' + uint16MudbusData[126].toString() +  ')';
        }

        switch (int16MudbusData[30-20]) {
          case 0:
            this.SystemData.SetMode = '�ػ�'
            break;
          case 1:
            this.SystemData.SetMode = '�Զ�'
            break;
          case 2:
            this.SystemData.SetMode = 'ˮ��ѭ��'
            break;
          default:
            break;
        }

        switch (int16MudbusData[31-20]) {
          case 0:
            this.SystemData.RunMode = '�ػ�'
            break;
          case 1:
            this.SystemData.RunMode = '����'
            break;
          case 2:
            this.SystemData.RunMode = '����'
            break;
          case 3:
            this.SystemData.RunMode = 'ˮ��ѭ��'
            break;
          default:
            break;
        }

        this.SystemData.SetCool = (int16MudbusData[33-20] & 0xFF)  
        this.SystemData.SetHeat = (int16MudbusData[33-20] >> 8) 
        this.SystemData.CtrlTemp = int16MudbusData[34-20] / 10  
        switch (int16MudbusData[118-20]) {
          case 0:
            this.SystemData.CtrlMode = '��ˮ'
            break;
          case 1:
            this.SystemData.CtrlMode = '��ˮ'
            break;
          case 2:
            this.SystemData.CtrlMode = '��о'
            break;
          default:
            break;
        }
        this.SystemData.OutWaterTemp = int16MudbusData[36-20] / 10 
        this.SystemData.InWaterTemp = int16MudbusData[37-20] / 10 
        this.SystemData.OutWaterPress = int16MudbusData[67-20]
        this.SystemData.InWaterPress = int16MudbusData[68-20]
        this.SystemData.WaterTempDiff = Math.abs(((int16MudbusData[36-20] - int16MudbusData[37-20]) / 10)) 
        this.SystemData.WaterPressDiff = (int16MudbusData[67-20] - int16MudbusData[68-20]) 
        this.SystemData.AroundTemp = int16MudbusData[38-20] / 10 
        if (int16MudbusData[32-20] & 0x800)
        {
          this.SystemData.SysWaterTemp = int16MudbusData[35-20] / 10 
        }
        else 
        {
          this.SystemData.SysWaterTemp = ' / '
        }
        
        this.SystemData.PumpFreq =int16MudbusData[78-20] 
        this.SystemData.PumpCurrent = int16MudbusData[80-20] / 10 
        this.SystemData.PumpIPMTemp = int16MudbusData[83-20] / 10 
        this.SystemData.PumpRunTime = changetime(int16MudbusData[81-20]) 
        this.SystemData.Heater = (int16MudbusData[22-20]& (1<<0)) ? '����' : '�ر�'
        this.SystemData.WarningOut = (int16MudbusData[22-20] & (1<<11)) ? '����' : '�ر�'
        this.SystemData.CoolingFan = (int16MudbusData[22-20] & (1<<12)) ? '����' : '�ر�'
       
        if (int16MudbusData[32-20] & 0x3F3)
        {
          this.SystemData.ManualMode = '����' 
        }
        else 
        {
          this.SystemData.ManualMode = '�ر�' 
        }

        
        this.SystemData.OilReturn1 = (int16MudbusData[32-20] & (1<<2)) ? '����' : '�ر�'
        this.SystemData.OilReturn2 = (int16MudbusData[32-20] & (1<<3)) ? '����' : '�ر�'
        this.SystemData.HydraulicValve = (int16MudbusData[22-20] & (1<<4)) ? '����' : '�ر�'
        this.SystemData.WaterValve1 = (int16MudbusData[22-20] & (1<<1)) ? '����' : '�ر�'
        this.SystemData.WaterValve2 = (int16MudbusData[22-20] & (1<<2)) ? '����' : '�ر�'
        this.SystemData.WaterValve3 = (int16MudbusData[22-20] & (1<<3)) ? '����' : '�ر�'
        this.SystemData.OilHeatStrip1 = (int16MudbusData[22-20] & (1<<5)) ? '����' : '�ر�'
        this.SystemData.OilHeatStrip2 = (int16MudbusData[22-20] & (1<<6)) ? '����' : '�ر�'

        this.FluorineData1.ExhaustGasTemp1 = int16MudbusData[39-20] / 10 
        this.FluorineData1.ExhaustGasProt1 = '����'
        switch (int16MudbusData[20-20] & 0x07)
        {
          case 0:
            this.FluorineData1.ExhaustGasProt1 = '����'
            break;
          case 1:
            this.FluorineData1.ExhaustGasProt1 = '����'
            break;
          case 2:
            this.FluorineData1.ExhaustGasProt1 = '����'
            break;
          case 3:
            this.FluorineData1.ExhaustGasProt1 = '����'
            break;
          case 4:
            this.FluorineData1.ExhaustGasProt1 = '����'
            break;
          case 5:
            this.FluorineData1.ExhaustGasProt1 = '�콵'
            break;
          default:
            break;
        }
        this.FluorineData1.EvaporatorTemp1 = int16MudbusData[43-20] / 10 
        switch ((int16MudbusData[20-20] >> 3)& 0x07)
        {
          case 0:
            this.FluorineData1.EvaporatorProt1 = '����'
            break;
          case 1:
            this.FluorineData1.EvaporatorProt1 = '����'
            break;
          case 2:
            this.FluorineData1.EvaporatorProt1 = '����'
            break;
          case 3:
            this.FluorineData1.EvaporatorProt1 = '����'
            break;
          case 4:
            this.FluorineData1.EvaporatorProt1 = '����'
            break;
          case 5:
            this.FluorineData1.EvaporatorProt1 = '�콵'
            break;
          default:
            break;
        }

        this.FluorineData1.CondenserTemp1 = int16MudbusData[42-20] / 10
        this.FluorineData1.CondenserProt1 = '����'
        switch ((int16MudbusData[20-20] >> 6)& 0x07)
        {
          case 0:
            this.FluorineData1.CondenserProt1 = '����'
            break;
          case 1:
            this.FluorineData1.CondenserProt1 = '����'
            break;
          case 2:
            this.FluorineData1.CondenserProt1 = '����'
            break;
          case 3:
            this.FluorineData1.CondenserProt1 = '����'
            break;
          case 4:
            this.FluorineData1.CondenserProt1 = '����'
            break;
          case 5:
            this.FluorineData1.CondenserProt1 = '�콵'
            break;
          default:
            break;
        }

        this.FluorineData1.SuctionTemp1 = int16MudbusData[40-20] / 10 
        this.FluorineData1.LiquidPipeTemp1 = int16MudbusData[41-20] / 10 
        this.FluorineData1.LowPress1 = int16MudbusData[70-20] / 10 
        this.FluorineData1.HighPress1 = int16MudbusData[69-20] / 10 
        switch ((int16MudbusData[20-20] >> 9)& 0x07)
        {
          case 0:
            this.FluorineData1.PressProt1 = '����'
            break;
          case 1:
            this.FluorineData1.PressProt1 = '����'
            break;
          case 2:
            this.FluorineData1.PressProt1 = '����'
            break;
          case 3:
            this.FluorineData1.PressProt1 = '����'
            break;
          case 4:
            this.FluorineData1.PressProt1 = '����'
            break;
          case 5:
            this.FluorineData1.PressProt1 = '�콵'
            break;
          default:
            break;
        }

        switch ((int16MudbusData[20-20] >> 12)& 0x07)
        {
          case 0:
            this.FluorineData1.CompAcProt1 = '����'
            break;
          case 1:
            this.FluorineData1.CompAcProt1 = '����'
            break;
          case 2:
            this.FluorineData1.CompAcProt1 = '����'
            break;
          case 3:
            this.FluorineData1.CompAcProt1 = '����'
            break;
          case 4:
            this.FluorineData1.CompAcProt1 = '����'
            break;
          case 5:
            this.FluorineData1.CompAcProt1 = '�콵'
            break;
          default:
            break;
        }
        this.FluorineData1.ReverseGasOverheat1 = int16MudbusData[49-20] / 10 
        this.FluorineData1.ExhaustGasOverheat1 = int16MudbusData[51-20] / 10 
        this.FluorineData1.CondenserCasOverCool1 = int16MudbusData[53-20] / 10 
        this.FluorineData1.TargetExhaustGas1 = int16MudbusData[112-20] / 10
        this.FluorineData1.TargetCondenserGas1 = int16MudbusData[114-20] /10
        switch (int16MudbusData[55-20])
        {
          case 0:
            this.FluorineData1.EEVStatus1 = '��λ'
            break;
          case 1:
            this.FluorineData1.EEVStatus1 = 'ֹͣ'
            break;
          case 2:
            this.FluorineData1.EEVStatus1 = '����'
            break;
          case 3:
            this.FluorineData1.EEVStatus1 = '����'
            break;
          case 4:
            this.FluorineData1.EEVStatus1 = '����'
            break;
          case 5:
            this.FluorineData1.EEVStatus1 = '�̶�'
            break;
          case 6:
            this.FluorineData1.EEVStatus1 = 'ͻ��'
            break;
          case 7:
            this.FluorineData1.EEVStatus1 = '���'
            break;
          case 8:
            this.FluorineData1.EEVStatus1 = '�ֶ�'
            break;
          default:
            break;
        }
        this.FluorineData1.EEVInitStep1 = int16MudbusData[59-20] 
        this.FluorineData1.EEVTargetStep1 = int16MudbusData[61-20] 
        this.FluorineData1.EEVNowStep1 = int16MudbusData[63-20]
        this.FluorineData1.EEVAdjustStep1 = int16MudbusData[65-20]
        this.FluorineData1.EEVAdjustPeriod1 = int16MudbusData[57-20] 
        this.FluorineData1.EEVAdjustTime1 = int16MudbusData[116-20] 
        this.FluorineData1.ReverseGasOverheatRate1 = int16MudbusData[130-20] / 10
        this.FluorineData1.ExhaustGasOverheatRate1 = int16MudbusData[132-20] / 10
        this.FluorineData1.WaterTempRate1 = int16MudbusData[134-20] / 10
        this.FluorineData1.CompAdjustFreq1 = int16MudbusData[136-20]
        this.FluorineData1.CompAdjustPeriod1 = int16MudbusData[138-20] 
        switch (int16MudbusData[140-20])
        {
          case 0:
            this.FluorineData1.CompRunStatus1 = '����'
            break;
          case 1:
            this.FluorineData1.CompRunStatus1 = '����'
            break;
          case 2:
            this.FluorineData1.CompRunStatus1 = 'ж��'
            break;
          default:
            break;
        }
        this.FluorineData1.CompTargetFreq1 = int16MudbusData[84-20] 
        this.FluorineData1.CompRunFreq1 = int16MudbusData[85-20] 
        this.FluorineData1.CompIPMTemp1 = int16MudbusData[90-20] / 10 
        this.FluorineData1.CompACCurrent1 = int16MudbusData[87-20] / 10 
        this.FluorineData1.CompRunTime1 = changetime(int16MudbusData[88-20]) 
        this.FluorineData1.CompSoptTime1 = changetime(int16MudbusData[89-20]) 
        this.FluorineData1.FanTargetFreq1 = int16MudbusData[98-20]  
        this.FluorineData1.FanRunFreq1 = int16MudbusData[99-20] 
        this.FluorineData1.FanIPMTemp1 = int16MudbusData[102-20] / 10 
        this.FluorineData1.FanACCurrent1 = int16MudbusData[124-20] / 10 
        this.FluorineData1.FanRunTime1 = changetime(int16MudbusData[106-20]) 
        this.FluorineData1.FanSoptTime1 = changetime(int16MudbusData[108-20]) 

        //��ϵͳ2��Ϣ
        if (int16MudbusData[32-20] & 0x400)
        {
          this.FluorineData2.ExhaustGasTemp2 = int16MudbusData[44-20] / 10 
          this.FluorineData2.ExhaustGasProt2 = '����'
          switch (int16MudbusData[21-20] & 0x07)
          {
            case 0:
              this.FluorineData2.ExhaustGasProt2 = '����'
              break;
            case 1:
              this.FluorineData2.ExhaustGasProt2 = '����'
              break;
            case 2:
              this.FluorineData2.ExhaustGasProt2 = '����'
              break;
            case 3:
              this.FluorineData2.ExhaustGasProt2 = '����'
              break;
            case 4:
              this.FluorineData2.ExhaustGasProt2 = '����'
              break;
            case 5:
              this.FluorineData2.ExhaustGasProt2 = '�콵'
              break;
            default:
              break;
          }
          this.FluorineData2.EvaporatorTemp2 = int16MudbusData[48-20] / 10 
          switch ((int16MudbusData[21-20] >> 3)& 0x07)
          {
            case 0:
              this.FluorineData2.EvaporatorProt2 = '����'
              break;
            case 1:
              this.FluorineData2.EvaporatorProt2 = '����'
              break;
            case 2:
              this.FluorineData2.EvaporatorProt2 = '����'
              break;
            case 3:
              this.FluorineData2.EvaporatorProt2 = '����'
              break;
            case 4:
              this.FluorineData2.EvaporatorProt2 = '����'
              break;
            case 5:
              this.FluorineData2.EvaporatorProt2 = '�콵'
              break;
            default:
              break;
          }

          this.FluorineData2.CondenserTemp2 = int16MudbusData[47-20] / 10
          this.FluorineData2.CondenserProt2 = '����'
          switch ((int16MudbusData[21-20] >> 6)& 0x07)
          {
            case 0:
              this.FluorineData2.CondenserProt2 = '����'
              break;
            case 1:
              this.FluorineData2.CondenserProt2 = '����'
              break;
            case 2:
              this.FluorineData2.CondenserProt2 = '����'
              break;
            case 3:
              this.FluorineData2.CondenserProt2 = '����'
              break;
            case 4:
              this.FluorineData2.CondenserProt2 = '����'
              break;
            case 5:
              this.FluorineData2.CondenserProt2 = '�콵'
              break;
            default:
              break;
          }

          this.FluorineData2.SuctionTemp2 = int16MudbusData[45-20] / 10 
          this.FluorineData2.LiquidPipeTemp2 = int16MudbusData[46-20] / 10 
          this.FluorineData2.LowPress2 = int16MudbusData[74-20] / 10 
          this.FluorineData2.HighPress2 = int16MudbusData[73-20] / 10 
          switch ((int16MudbusData[21-20] >> 9)& 0x07)
          {
            case 0:
              this.FluorineData2.PressProt2 = '����'
              break;
            case 1:
              this.FluorineData2.PressProt2 = '����'
              break;
            case 2:
              this.FluorineData2.PressProt2 = '����'
              break;
            case 3:
              this.FluorineData2.PressProt2 = '����'
              break;
            case 4:
              this.FluorineData2.PressProt2 = '����'
              break;
            case 5:
              this.FluorineData2.PressProt2 = '�콵'
              break;
            default:
              break;
          }

          switch ((int16MudbusData[21-20] >> 12)& 0x07)
          {
            case 0:
              this.FluorineData2.CompAcProt2 = '����'
              break;
            case 1:
              this.FluorineData2.CompAcProt2 = '����'
              break;
            case 2:
              this.FluorineData2.CompAcProt2 = '����'
              break;
            case 3:
              this.FluorineData2.CompAcProt2 = '����'
              break;
            case 4:
              this.FluorineData2.CompAcProt2 = '����'
              break;
            case 5:
              this.FluorineData2.CompAcProt2 = '�콵'
              break;
            default:
              break;
          }
          this.FluorineData2.ReverseGasOverheat2 = int16MudbusData[50-20] / 10 
          this.FluorineData2.ExhaustGasOverheat2 = int16MudbusData[52-20] / 10 
          this.FluorineData2.CondenserCasOverCool2 = int16MudbusData[54-20] / 10 
          this.FluorineData2.TargetExhaustGas2 = int16MudbusData[113-20] / 10
          this.FluorineData2.TargetCondenserGas2 = int16MudbusData[115-20] / 10
          switch (int16MudbusData[56-20])
          {
            case 0:
              this.FluorineData2.EEVStatus2 = '��λ'
              break;
            case 1:
              this.FluorineData2.EEVStatus2 = 'ֹͣ'
              break;
            case 2:
              this.FluorineData2.EEVStatus2 = '����'
              break;
            case 3:
              this.FluorineData2.EEVStatus2 = '����'
              break;
            case 4:
              this.FluorineData2.EEVStatus2 = '����'
              break;
            case 5:
              this.FluorineData2.EEVStatus2 = '�̶�'
              break;
            case 6:
              this.FluorineData2.EEVStatus2 = 'ͻ��'
              break;
            case 7:
              this.FluorineData2.EEVStatus2 = '���'
              break;
            case 8:
              this.FluorineData2.EEVStatus2 = '�ֶ�'
              break;
            default:
              break;
          }

          this.FluorineData2.EEVInitStep2 = int16MudbusData[60-20] 
          this.FluorineData2.EEVTargetStep2 = int16MudbusData[62-20] 
          this.FluorineData2.EEVNowStep2 = int16MudbusData[64-20]
          this.FluorineData2.EEVAdjustStep2 = int16MudbusData[66-20]
          this.FluorineData2.EEVAdjustPeriod2 = int16MudbusData[58-20]  
          this.FluorineData2.EEVAdjustTime2 = int16MudbusData[117-20]  
          this.FluorineData2.ReverseGasOverheatRate2 = int16MudbusData[131-20] / 10
          this.FluorineData2.ExhaustGasOverheatRate2 = int16MudbusData[133-20] / 10
          this.FluorineData2.WaterTempRate2 = int16MudbusData[135-20] / 10
          this.FluorineData2.CompAdjustFreq2 = int16MudbusData[137-20]
          this.FluorineData2.CompAdjustPeriod2 = int16MudbusData[139-20]
          switch (int16MudbusData[141-20])
          {
            case 0:
              this.FluorineData1.CompRunStatus2 = '����'
              break;
            case 1:
              this.FluorineData1.CompRunStatus2 = '����'
              break;
            case 2:
              this.FluorineData1.CompRunStatus2 = 'ж��'
              break;
            default:
              break;
          }
    
          this.FluorineData2.CompTargetFreq2 = int16MudbusData[91-20] 
          this.FluorineData2.CompRunFreq2 = int16MudbusData[92-20] 
          this.FluorineData2.CompIPMTemp2 = int16MudbusData[97-20] / 10 
          this.FluorineData2.CompACCurrent2 = int16MudbusData[94-20] / 10 
          this.FluorineData2.CompRunTime2 = changetime(int16MudbusData[95-20]) 
          this.FluorineData2.CompSoptTime2 = changetime(int16MudbusData[96-20]) 
          this.FluorineData2.FanTargetFreq2 = int16MudbusData[100-20]  
          this.FluorineData2.FanRunFreq2 = int16MudbusData[101-20] 
          this.FluorineData2.FanIPMTemp2 = int16MudbusData[103-20] / 10 
          this.FluorineData2.FanACCurrent2 = int16MudbusData[125-20] / 10 
          this.FluorineData2.FanRunTime2 = changetime(int16MudbusData[107-20]) 
          this.FluorineData2.FanSoptTime2 = changetime(int16MudbusData[109-20]) 
        }
        else 
        {
          this.FluorineData2.ExhaustGasTemp2 = ' / ' 
          this.FluorineData2.ExhaustGasProt2 = ' / '
          this.FluorineData2.ExhaustGasProt2 = ' / '
          this.FluorineData2.EvaporatorTemp2 = ' / ' 
          this.FluorineData2.EvaporatorProt2 = ' / '
          this.FluorineData2.CondenserTemp2 = ' / '
          this.FluorineData2.CondenserProt2 = ' / '
          this.FluorineData2.CondenserProt2 = ' / '
          this.FluorineData2.SuctionTemp2 = ' / ' 
          this.FluorineData2.LiquidPipeTemp2 = ' / '
          this.FluorineData2.LowPress2 = ' / '
          this.FluorineData2.HighPress2 = ' / '
          this.FluorineData2.PressProt2 = ' / '
          this.FluorineData2.CompAcProt2 = ' / '
          this.FluorineData2.ReverseGasOverheat2 = ' / ' 
          this.FluorineData2.ExhaustGasOverheat2 = ' / '
          this.FluorineData2.CondenserCasOverCool2 = ' / '
          this.FluorineData2.TargetExhaustGas2 = ' / '
          this.FluorineData2.TargetCondenserGas2 = ' / '
          this.FluorineData2.EEVStatus2 = ' / '
          this.FluorineData2.EEVInitStep2 = ' / '
          this.FluorineData2.EEVTargetStep2 = ' / '
          this.FluorineData2.EEVNowStep2 = ' / '
          this.FluorineData2.EEVAdjustStep2 = ' / '
          this.FluorineData2.EEVAdjustPeriod2 = ' / ' 
          this.FluorineData2.EEVAdjustTime2 = ' / '
          this.FluorineData2.ReverseGasOverheatRate2 = ' / '
          this.FluorineData2.ExhaustGasOverheatRate2 = ' / '
          this.FluorineData2.WaterTempRate2 = ' / '
          this.FluorineData2.CompAdjustFreq2 = ' / '
          this.FluorineData2.CompAdjustPeriod2 = ' / '
          this.FluorineData2.CompRunStatus2 = ' / '
          this.FluorineData2.CompTargetFreq2 = ' / '
          this.FluorineData2.CompRunFreq2 = ' / '
          this.FluorineData2.CompIPMTemp2 = ' / '
          this.FluorineData2.CompACCurrent2 = ' / '
          this.FluorineData2.CompRunTime2 = ' / '
          this.FluorineData2.CompSoptTime2 = ' / '
          this.FluorineData2.FanTargetFreq2 = ' / '
          this.FluorineData2.FanRunFreq2 = ' / '
          this.FluorineData2.FanIPMTemp2 = ' / '
          this.FluorineData2.FanACCurrent2 = ' / '
          this.FluorineData2.FanRunTime2 = ' / '
          this.FluorineData2.FanSoptTime2 = ' / '
        }

        //д���������
        if (this.nowTime !== new Date().toLocaleString()){
          this.nowTime = new Date().toLocaleString()
          
          var TempTimeStr24 = new Date();
          if (this.csbStatue === 'open') {
            this.logHandle.WriteDecoderLog(TempTimeStr24.toLocaleString('chinese', {hour12:false}));
          }
        }


    })

    function changetime(value) {
	        var secondTime = parseInt(value);
	        var minuteTime = 0;
	        var hourTime = 0;
	        if(secondTime > 60) {
	            minuteTime = parseInt(secondTime / 60);
	            secondTime = parseInt(secondTime % 60);
	            if(minuteTime > 60) {
	                hourTime = parseInt(minuteTime / 60);
	                minuteTime = parseInt(minuteTime % 60);
	            }
	        }
	        var time = "" + parseInt(secondTime) + "s";
 
	        if(minuteTime > 0) {
	        	time = "" + parseInt(minuteTime) + ":" + time;
	        }
	        if(hourTime > 0) {
	        	time = "" + parseInt(hourTime) + ":" + time;
	        }
	        return time;
        }

  },
  beforeDestroy(){
    ipcRenderer.send(IPC_CHANNEL_STOP_DOWNLOAD, 0)
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
  height: 30px;
  font-family: "Helvetica Neue";
}

.el-input__inner[DangerColor="danger"] {
  background-color:red;
}

.el-input__inne {
  background-color:#ffffff;
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
    background: #ba55d3
}
.el-button--text {
  color:black;
}
.my-main legend{
    font-size: 14px;
    height: 14px !important;
    padding-bottom: 3px;
  }
  .my-main .el-col-4{
    height: 26px !important;
  }
  .my-main .el-col-4 .progress-box{
    height: 18px; 
  }
  .my-main .el-tabs__nav .el-tabs__item{
  height: 35px;
  font-weight: 800;
}
</style>




