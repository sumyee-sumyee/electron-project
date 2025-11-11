<template>
  <div >  
      <div >
        <fieldset style="background-color:#EBEEF5; borde-color: white;">
          <legend style="font:8px; font-weight:600;  margin-left:15px; margin-right:15px; margin-bottom:10px;">关节信息</legend> 
            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节01设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint01 + DIcon" readonly/>
                  
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节02设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint02 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节03设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint03 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节01位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos01 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节02位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos02 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节03位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos03 + DIcon" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节04设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint04 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节05设定</el-button>
                 <el-input size="mini" v-bind:value="SystemData.SetJoint05 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节06设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint06 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节04位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos04 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节05位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos05 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节06位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos06 + DIcon" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节07设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint07 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节08设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint08 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节09设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint09 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节07位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos07 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节08位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos08 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节09位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos09 + DIcon" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节10设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint10 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节11设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint11 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节12设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint12 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节10位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos10 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节11位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos11 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节12位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos12 + DIcon" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px; margin-bottom:10px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节13设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint13 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节14设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint14 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节15设定</el-button>
                  <el-input size="mini" v-bind:value="SystemData.SetJoint15 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节13位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos13 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节14位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos14 + DIcon" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节15位置</el-button>
                  <el-input size="mini" v-bind:value="SystemData.JointPos15 + DIcon" readonly/>
                </div>
              </el-col>
            </el-row>  
        </fieldset>
      </div>

      <div style="margin-top: 2px;">
        <fieldset style="background-color:#EBEEF5; border-color: white;"> 
          <legend style="font:8px; font-weight:800;  margin-left:15px; margin-right:15px; margin-bottom:10px;">电机信息</legend> 
            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机01电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current01" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机02电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current02" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机03电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current03" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机01故障</el-button>
                   <el-input
                    v-if="(MotorData.Error01==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error01"
                  />
                  <el-input
                    v-else-if="(MotorData.Error01==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error01"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error01" DangerColor="danger"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机02故障</el-button>
                  <el-input
                    v-if="(MotorData.Error02==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error02"
                  />
                  <el-input
                    v-else-if="(MotorData.Error02==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error02"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error02" DangerColor="danger"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机03故障</el-button>
                  <el-input
                    v-if="(MotorData.Error03==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error03"
                  />
                  <el-input
                    v-else-if="(MotorData.Error03==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error03"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error03" DangerColor="danger"/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机04电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current04" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机05电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current05 " readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机06电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current06" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机04故障</el-button>
                  <el-input
                    v-if="(MotorData.Error04==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error04"
                  />
                  <el-input
                    v-else-if="(MotorData.Error04==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error04"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error04" DangerColor="danger"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机05故障</el-button>
                  <el-input
                    v-if="(MotorData.Error05==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error05"
                  />
                  <el-input
                    v-else-if="(MotorData.Error05==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error05"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error05" DangerColor="danger"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机06故障</el-button>
                  <el-input
                    v-if="(MotorData.Error06==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error06"
                  />
                  <el-input
                    v-else-if="(MotorData.Error06==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error06"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error06" DangerColor="danger"/>
                </div>
              </el-col>
            </el-row>
            
            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机07电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current07" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机08电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current08" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机09电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current09" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机07故障</el-button>
                  <el-input
                    v-if="(MotorData.Error07==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error07"
                  />
                  <el-input
                    v-else-if="(MotorData.Error07==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error07"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error07" DangerColor="danger"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机08故障</el-button>
                  <el-input
                    v-if="(MotorData.Error08==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error08"
                  />
                  <el-input
                    v-else-if="(MotorData.Error08==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error08"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error08" DangerColor="danger"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机09故障</el-button>
                  <el-input
                    v-if="(MotorData.Error09==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error09"
                  />
                  <el-input
                    v-else-if="(MotorData.Error09==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error09"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error09" DangerColor="danger"/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机10电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current10" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机11电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current11" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机12电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current12" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机10故障</el-button>
                  <!-- <el-input size="mini" v-model="MotorData.Error10" readonly/> -->
                  <el-input
                    v-if="(MotorData.Error10==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error10"
                  />
                  <el-input
                    v-else-if="(MotorData.Error10==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error10"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error10" DangerColor="danger"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机11故障</el-button>
                  <el-input
                    v-if="(MotorData.Error11==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error11"
                  />
                  <el-input
                    v-else-if="(MotorData.Error11==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error11"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error11" DangerColor="danger"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机12故障</el-button>
                  <el-input
                    v-if="(MotorData.Error12==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error12"
                  />
                  <el-input
                    v-else-if="(MotorData.Error12==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error12"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error12" DangerColor="danger"/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机13电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current13" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机14电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current14" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机15电流</el-button>
                  <el-input size="mini" v-model="MotorData.Current15" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机13故障</el-button>
                  <el-input
                    v-if="(MotorData.Error13==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error13"
                  />
                  <el-input
                    v-else-if="(MotorData.Error13==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error13"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error13" DangerColor="danger"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机14故障</el-button>
                  <el-input
                    v-if="(MotorData.Error14==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error14"
                  />
                  <el-input
                    v-else-if="(MotorData.Error14==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error14"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error14" DangerColor="danger"/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机15故障</el-button>
                  <el-input
                    v-if="(MotorData.Error15==='无故障')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error15"
                  />
                  <el-input
                    v-else-if="(MotorData.Error15==='')"
                    size="mini"
                    readonly
                    v-model="MotorData.Error15"
                  />
                  <el-input v-else size="mini" readonly v-model="MotorData.Error15" DangerColor="danger"/>
                </div>
              </el-col>
            </el-row>



             <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机01位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location01" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机02位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location02" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机03位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location03" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节01数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData01" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节02数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData02" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节03数据</el-button>
                 <el-input size="mini" v-model="MotorData.JointData03" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机04位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location04" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机05位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location05 " readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机06位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location06" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节04数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData04" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节05数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData05" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节06数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData06" readonly/>
                </div>
              </el-col>
            </el-row>
            
            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机07位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location07" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机08位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location08" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机09位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location09" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节07数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData07" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节08数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData08" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节09数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData09" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机10位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location10" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机11位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location11" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机12位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location12" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节10数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData10" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节11数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData11" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节12数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData12" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px; margin-bottom:10px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机13位置</el-button>
                  <el-input  size="mini" v-model="MotorData.Location13" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机14位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location14" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">电机15位置</el-button>
                  <el-input size="mini" v-model="MotorData.Location15" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节13数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData13" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节14数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData14" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节15数据</el-button>
                  <el-input size="mini" v-model="MotorData.JointData15" readonly/>
                </div>
              </el-col>
            </el-row>
          </fieldset>
      </div>

      <div style="margin-top: 2px;">
        <fieldset style="background-color:#EBEEF5; border-color: white;"> 
          <legend style="font:8px; font-weight:800;  margin-left:15px; margin-right:15px; margin-bottom:10px;">其他信息</legend> 
            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">驱动母线电压</el-button>
                  <el-input size="mini" v-model="OtherData.VBus" readonly/>
                </div>
              </el-col>

                          <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉1法向力</el-button>
                  <el-input size="mini" v-model="OtherData.NormalForce1" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉2法向力</el-button>
                  <el-input size="mini" v-model="OtherData.NormalForce2" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉3法向力</el-button>
                  <el-input size="mini" v-model="OtherData.NormalForce3" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉4法向力</el-button>
                  <el-input size="mini" v-model="OtherData.NormalForce4" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉5法向力</el-button>
                  <el-input size="mini" v-model="OtherData.NormalForce5" readonly/>
                </div>
              </el-col>
            </el-row>

            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">工作运行模式</el-button>
                  <el-input size="mini" v-model="OtherData.MotorCtrl" readonly/>
                </div>
              </el-col>
                   <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉1切向力</el-button>
                  <el-input size="mini" v-model="OtherData.TangentialForce1" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉2切向力</el-button>
                  <el-input size="mini" v-model="OtherData.TangentialForce2" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉3切向力</el-button>
                   <el-input size="mini" v-model="OtherData.TangentialForce3" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉4切向力</el-button>
                  <el-input size="mini" v-model="OtherData.TangentialForce4" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉5切向力</el-button>
                  <el-input size="mini" v-model="OtherData.TangentialForce5" readonly/>
                </div>
              </el-col>
            </el-row>
            
            <el-row  style=" margin-left:15px; margin-right:15px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">关节复位标志</el-button>
                  <!-- <el-input size="mini" v-model="OtherData.ResetFlag" readonly/> -->
                  <el-input
                    v-if="(OtherData.ResetFlag==='复位完成')"
                    size="mini"
                    readonly
                    v-model="OtherData.ResetFlag"
                    SuccessColor="success"
                  />
                  <el-input
                    v-else-if="(OtherData.ResetFlag==='灵巧手未复位')"
                    size="mini"
                    readonly
                    v-model="OtherData.ResetFlag"
                    DangerColor="danger"
                  />
                  <el-input
                    v-else-if="(OtherData.ResetFlag==='')"
                    size="mini"
                    readonly
                    v-model="OtherData.ResetFlag"
                  />
                  <el-input v-else size="mini" readonly v-model="OtherData.ResetFlag" WarningColor="warning"/>
                </div>
              </el-col>
               <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉1切力方向</el-button>
                  <el-input size="mini" v-model="OtherData.TangentialDir1" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉2切力方向</el-button>
                  <el-input size="mini" v-model="OtherData.TangentialDir2" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉3切力方向</el-button>
                  <el-input size="mini" v-model="OtherData.TangentialDir3" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉4切力方向</el-button>
                  <el-input size="mini" v-model="OtherData.TangentialDir4" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉5切力方向</el-button>
                  <el-input size="mini" v-model="OtherData.TangentialDir5" readonly/>
                </div>
              </el-col>
            </el-row>
            <el-row  style=" margin-left:15px; margin-right:15px; margin-bottom:10px;">
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">主控故障信息</el-button>
                  <el-input
                    v-if="(OtherData.MainError==='无故障')"
                    size="mini"
                    readonly
                    v-model="OtherData.MainError"
                  />
                  <el-input
                    v-else-if="(OtherData.MainError==='')"
                    size="mini"
                    readonly
                    v-model="OtherData.MainError"
                  />
                  <el-input v-else size="mini" readonly v-model="OtherData.MainError" DangerColor="danger"/>
                </div>
              </el-col>
                       <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉1接近值</el-button>
                  <el-input size="mini" v-model="OtherData.CloseValue1" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉2接近值</el-button>
                  <el-input size="mini" v-model="OtherData.CloseValue2" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉3接近值</el-button>
                  <el-input size="mini" v-model="OtherData.CloseValue3" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉4接近值</el-button>
                  <el-input size="mini" v-model="OtherData.CloseValue4" readonly/>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="progress-box" >
                  <el-button type="text" size="small" style="width:170px; margin-right:3px;">触觉5接近值</el-button>
                  <el-input size="mini" v-model="OtherData.CloseValue5" readonly/>
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
    APP_EVENT_OPEN_XLSX,
    APP_EVENT_STOP_XLSX,
  } from '../../../../js/constants/ElectronConstants'
  import {
    APP_REPORT_UART_DATA,
    APP_SWITCH_JOINT_UNIT,
  } from '../../../../js/constants/IndoorConstants'
// import { constants } from 'fs';
export default {
  name: 'landing-page',
  computed: {
  },
  data() {
    return {
      SystemData: {
        SetJoint01: '',
        SetJoint02: '',
        SetJoint03: '',
        SetJoint04: '',
        SetJoint05: '',
        SetJoint06: '',
        SetJoint07: '',
        SetJoint08: '',
        SetJoint09: '',
        SetJoint10: '',
        SetJoint11: '',
        SetJoint12: '',
        SetJoint13: '',
        SetJoint14: '',
        SetJoint15: '',
        JointPos01: '',
        JointPos02: '',
        JointPos03: '',
        JointPos04: '',
        JointPos05: '',
        JointPos06: '',
        JointPos07: '',
        JointPos08: '',
        JointPos09: '',
        JointPos10: '',
        JointPos11: '',
        JointPos12: '',
        JointPos13: '',
        JointPos14: '',
        JointPos15: '',
      },
      
      MotorData: {
        Current01: '',
        Current02: '',
        Current03: '',
        Current04: '',
        Current05: '',
        Current06: '',
        Current07: '',
        Current08: '',
        Current09: '',
        Current10: '',
        Current11: '',
        Current12: '',
        Current13: '',
        Current14: '',
        Current15: '',
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
        Location01: '',
        Location02: '',
        Location03: '',
        Location04: '',
        Location05: '',
        Location06: '',
        Location07: '',
        Location08: '',
        Location09: '',
        Location10: '',
        Location11: '',
        Location12: '',
        Location13: '',
        Location14: '',
        Location15: '',
        JointData01: '',
        JointData02: '',
        JointData03: '',
        JointData04: '',
        JointData05: '',
        JointData06: '',
        JointData07: '',
        JointData08: '',
        JointData09: '',
        JointData10: '',
        JointData11: '',
        JointData12: '',
        JointData13: '',
        JointData14: '',
        JointData15: '',
      },

      OtherData: {
        VBus: '',
        TangentialForce1: '',
        TangentialForce2: '',
        TangentialForce3: '',
        TangentialForce4: '',
        TangentialForce5: '',
        MotorCtrl: '',
        NormalForce1: '',
        NormalForce2: '',
        NormalForce3: '',
        NormalForce4: '',
        NormalForce5: '',
        ResetFlag: '',
        CloseValue1: '',
        CloseValue2: '',
        CloseValue3: '',
        CloseValue4: '',
        CloseValue5: '',
        MainError: '',
        TangentialDir1: '',
        TangentialDir2: '',
        TangentialDir3: '',
        TangentialDir4: '',
        TangentialDir5: '',
      },
      
      logHandle: null,
      nowTime: null,
      fileName: 'csv',
      csbStatue: 'close',
      currentStatue: false,

      TempIcon: '',
      AIcon: '',
      DIcon: '',
      barIcon: '',
      HzIcon: '',
      RateIcon: '',
      SecIcon: '',

      JointType: 1
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

        let csvHead = [this.SystemData, this.MotorData, this.OtherData] 
        //console.log('jsonPath:', jsonPath);
        if (this.fileName !== this.$store.state.SystemData.OutcsvFilePath) {
          this.fileName = this.$store.state.SystemData.OutcsvFilePath
          const jsonPath = "./zhMap.json";
          //const jsonPath = path.join(__dirname, '..', '..', '..', '..', '..', '..', 'src', 'renderer', 'json', 'zhMap.json');
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
    ipcRenderer.on(APP_REPORT_UART_DATA, (event, arg) => {
        let uint8ModbusData = [], uint16MudbusData = [], int16MudbusData = [];
        let uint32MudbusData, int32MudbusData;

        //console.log("recv:", arg)
        uint8ModbusData = arg.slice(0, arg.length - 2);
        uint8ModbusData = uint8ModbusData.slice(3);
        for (let i = 0; i < (arg[2]/2); i++) {
            uint16MudbusData[i] = ((uint8ModbusData[i*2] << 8) | (uint8ModbusData[i*2 + 1]))
          
            if ((i >= (0x1014-0x1001) && i <= (0x1031-0x1001)) || (i >= (0x1042-0x1001) && i <= (0x105F-0x1001))) {
                int16MudbusData[i] = uint16MudbusData[i];
            } else{
                if(uint16MudbusData[i] & 0x8000) {
                    int16MudbusData[i] = -(65536 - uint16MudbusData[i]);
                } else {
                    int16MudbusData[i] = uint16MudbusData[i];
                }
            }
        }
 
        if (arg[1] === 0x04) {

            if (arg[2] === (0x5F * 2)) {
                this.OtherData.VBus = (uint16MudbusData[0x1003-0x1001] / 100).toString() + ' V';
                if (uint16MudbusData[0x1004-0x1001] === 0) {
                  this.OtherData.MainError = '无故障';
                } else {
                  this.OtherData.MainError = '';
                  if (uint16MudbusData[0x1004-0x1001] & 1) {
                      this.OtherData.MainError += ' 电压过低';
                  }  
                  if (uint16MudbusData[0x1004-0x1001] & 2) {
                      this.OtherData.MainError += ' 电压过高';
                  } 
                  if (uint16MudbusData[0x1004-0x1001] & 4) {
                      this.OtherData.MotorCtrl += ' 温度过高';  
                  }
                }

                if (uint16MudbusData[4] === 0) {
                    this.MotorData.Error01 = '无故障';
                } else {
                  this.MotorData.Error01 = '';
                  if (uint16MudbusData[4] & 1) {
                      this.MotorData.Error01 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[4] & 2) {
                      this.MotorData.Error01 += ' 电机过流';
                  } 
                  if (uint16MudbusData[4] & 4) {
                      this.MotorData.Error01 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[4] & 8) {
                      this.MotorData.Error01 += ' 编码器异常';
                  }
                }

                if (uint16MudbusData[5] === 0) {
                    this.MotorData.Error02 = '无故障';
                } else {
                  this.MotorData.Error02 = '';
                  if (uint16MudbusData[5] & 1) {
                      this.MotorData.Error02 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[5] & 2) {
                      this.MotorData.Error02 += ' 电机过流';
                  } 
                  if (uint16MudbusData[5] & 4) {
                      this.MotorData.Error02 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[5] & 8) {
                      this.MotorData.Error02 += ' 编码器异常';
                  }
                }

                if (uint16MudbusData[6] === 0) {
                    this.MotorData.Error03 = '无故障';
                } else {
                  this.MotorData.Error03 = '';
                  if (uint16MudbusData[6] & 1) {
                      this.MotorData.Error03 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[6] & 2) {
                      this.MotorData.Error03 += ' 电机过流';
                  } 
                  if (uint16MudbusData[6] & 4) {
                      this.MotorData.Error03 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[6] & 8) {
                      this.MotorData.Error03 += ' 编码器异常';
                  }
                }

                if (uint16MudbusData[7] === 0) {
                    this.MotorData.Error04 = '无故障';
                } else {
                  this.MotorData.Error04 = '';
                  if (uint16MudbusData[7] & 1) {
                      this.MotorData.Error04 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[7] & 2) {
                      this.MotorData.Error04 += ' 电机过流';
                  } 
                  if (uint16MudbusData[7] & 4) {
                      this.MotorData.Error04 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[7] & 8) {
                      this.MotorData.Error04 += ' 编码器异常';
                  }
                }

                if (uint16MudbusData[8] === 0) {
                    this.MotorData.Error05 = '无故障';
                } else {
                  this.MotorData.Error05 = '';
                  if (uint16MudbusData[8] & 1) {
                      this.MotorData.Error05 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[8] & 2) {
                      this.MotorData.Error05 += ' 电机过流';
                  } 
                  if (uint16MudbusData[8] & 4) {
                      this.MotorData.Error05 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[8] & 8) {
                      this.MotorData.Error05 += ' 编码器异常';
                  }
                }

                if (uint16MudbusData[9] === 0) {
                    this.MotorData.Error06 = '无故障';
                } else {
                  this.MotorData.Error06 = '';
                  if (uint16MudbusData[9] & 1) {
                      this.MotorData.Error06 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[9] & 2) {
                      this.MotorData.Error06 += ' 电机过流';
                  } 
                  if (uint16MudbusData[9] & 4) {
                      this.MotorData.Error06 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[9] & 8) {
                      this.MotorData.Error06 += ' 编码器异常';
                  }
                }


                if (uint16MudbusData[10] === 0) {
                    this.MotorData.Error07 = '无故障';
                } else {
                  this.MotorData.Error07 = '';
                  if (uint16MudbusData[10] & 1) {
                      this.MotorData.Error07 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[10] & 2) {
                      this.MotorData.Error07 += ' 电机过流';
                  } 
                  if (uint16MudbusData[10] & 4) {
                      this.MotorData.Error07 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[10] & 8) {
                      this.MotorData.Error07 += ' 编码器异常';
                  }
                }

                if (uint16MudbusData[11] === 0) {
                    this.MotorData.Error08 = '无故障';
                } else {
                  this.MotorData.Error08 = '';
                  if (uint16MudbusData[11] & 1) {
                      this.MotorData.Error08 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[11] & 2) {
                      this.MotorData.Error08 += ' 电机过流';
                  } 
                  if (uint16MudbusData[11] & 4) {
                      this.MotorData.Error08 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[11] & 8) {
                      this.MotorData.Error08 += ' 编码器异常';
                  }
                }

                if (uint16MudbusData[12] === 0) {
                    this.MotorData.Error09 = '无故障';
                } else {
                  this.MotorData.Error09 = '';
                  if (uint16MudbusData[12] & 1) {
                      this.MotorData.Error09 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[12] & 2) {
                      this.MotorData.Error09 += ' 电机过流';
                  } 
                  if (uint16MudbusData[12] & 4) {
                      this.MotorData.Error09 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[12] & 8) {
                      this.MotorData.Error09 += ' 编码器异常';
                  }
                }

                if (uint16MudbusData[13] === 0) {
                    this.MotorData.Error10 = '无故障';
                } else {
                  this.MotorData.Error10 = '';
                  if (uint16MudbusData[13] & 1) {
                      this.MotorData.Error10 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[13] & 2) {
                      this.MotorData.Error10 += ' 电机过流';
                  } 
                  if (uint16MudbusData[13] & 4) {
                      this.MotorData.Error10 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[13] & 8) {
                      this.MotorData.Error10 += ' 编码器异常';
                  }
                }

                if (uint16MudbusData[14] === 0) {
                    this.MotorData.Error11 = '无故障';
                } else {
                  this.MotorData.Error11 = '';
                  if (uint16MudbusData[14] & 1) {
                      this.MotorData.Error11 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[14] & 2) {
                      this.MotorData.Error11 += ' 电机过流';
                  } 
                  if (uint16MudbusData[14] & 4) {
                      this.MotorData.Error11 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[14] & 8) {
                      this.MotorData.Error11 += ' 编码器异常';
                  }
                }
                
                if (uint16MudbusData[15] === 0) {
                    this.MotorData.Error12 = '无故障';
                } else {
                  this.MotorData.Error12 = '';
                  if (uint16MudbusData[15] & 1) {
                      this.MotorData.Error12 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[15] & 2) {
                      this.MotorData.Error12 += ' 电机过流';
                  } 
                  if (uint16MudbusData[15] & 4) {
                      this.MotorData.Error12 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[15] & 8) {
                      this.MotorData.Error12 += ' 编码器异常';
                  }
                }

                if (uint16MudbusData[16] === 0) {
                    this.MotorData.Error13 = '无故障';
                } else {
                  this.MotorData.Error13 = '';
                  if (uint16MudbusData[16] & 1) {
                      this.MotorData.Error13 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[16] & 2) {
                      this.MotorData.Error13 += ' 电机过流';
                  } 
                  if (uint16MudbusData[16] & 4) {
                      this.MotorData.Error13 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[16] & 8) {
                      this.MotorData.Error13 += ' 编码器异常';
                  }
                }
                
                if (uint16MudbusData[17] === 0) {
                    this.MotorData.Error14 = '无故障';
                } else {
                  this.MotorData.Error14 = '';
                  if (uint16MudbusData[17] & 1) {
                      this.MotorData.Error14 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[17] & 2) {
                      this.MotorData.Error14 += ' 电机过流';
                  } 
                  if (uint16MudbusData[17] & 4) {
                      this.MotorData.Error14 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[17] & 8) {
                      this.MotorData.Error14 += ' 编码器异常';
                  }
                }

                if (uint16MudbusData[18] === 0) {
                    this.MotorData.Error15 = '无故障';
                } else {
                  this.MotorData.Error15 = '';
                  if (uint16MudbusData[18] & 1) {
                      this.MotorData.Error15 += ' 电机缺相';
                  } 
                  if (uint16MudbusData[18] & 2) {
                      this.MotorData.Error15 += ' 电机过流';
                  } 
                  if (uint16MudbusData[18] & 4) {
                      this.MotorData.Error15 += ' 电机堵转';
                  } 
                  if (uint16MudbusData[18] & 8) {
                      this.MotorData.Error15 += ' 编码器异常';
                  }
                }

                this.MotorData.Current01 = (int16MudbusData[0x1032-0x1001] / 100).toString() + ' A';
                this.MotorData.Current02 = (int16MudbusData[0x1033-0x1001] / 100).toString() + ' A';
                this.MotorData.Current03 = (int16MudbusData[0x1034-0x1001] / 100).toString() + ' A';
                this.MotorData.Current04 = (int16MudbusData[0x1035-0x1001] / 100).toString() + ' A';
                this.MotorData.Current05 = (int16MudbusData[0x1036-0x1001] / 100).toString() + ' A';
                this.MotorData.Current06 = (int16MudbusData[0x1037-0x1001] / 100).toString() + ' A';
                this.MotorData.Current07 = (int16MudbusData[0x1038-0x1001] / 100).toString() + ' A';
                this.MotorData.Current08 = (int16MudbusData[0x1039-0x1001] / 100).toString() + ' A';
                this.MotorData.Current09 = (int16MudbusData[0x103A-0x1001] / 100).toString() + ' A';
                this.MotorData.Current10 = (int16MudbusData[0x103B-0x1001] / 100).toString() + ' A';
                this.MotorData.Current11 = (int16MudbusData[0x103C-0x1001] / 100).toString() + ' A';
                this.MotorData.Current12 = (int16MudbusData[0x103D-0x1001] / 100).toString() + ' A';
                this.MotorData.Current13 = (int16MudbusData[0x103E-0x1001] / 100).toString() + ' A';
                this.MotorData.Current14 = (int16MudbusData[0x103F-0x1001] / 100).toString() + ' A';
                this.MotorData.Current15 = (int16MudbusData[0x1040-0x1001] / 100).toString() + ' A';

                uint32MudbusData = (uint16MudbusData[0x1014-0x1001] << 16) | uint16MudbusData[0x1015-0x1001];
                this.MotorData.Location01 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x1016-0x1001] << 16) | uint16MudbusData[0x1017-0x1001];
                this.MotorData.Location02 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x1018-0x1001] << 16) | uint16MudbusData[0x1019-0x1001];
                this.MotorData.Location03 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x101A-0x1001] << 16) | uint16MudbusData[0x101B-0x1001];
                this.MotorData.Location04 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x101C-0x1001] << 16) | uint16MudbusData[0x101D-0x1001];
                this.MotorData.Location05 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x101E-0x1001] << 16) | uint16MudbusData[0x101F-0x1001];
                this.MotorData.Location06 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x1020-0x1001] << 16) | uint16MudbusData[0x1021-0x1001];
                this.MotorData.Location07 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x1022-0x1001] << 16) | uint16MudbusData[0x1023-0x1001];
                this.MotorData.Location08 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x1024-0x1001] << 16) | uint16MudbusData[0x1025-0x1001];
                this.MotorData.Location09 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x1026-0x1001] << 16) | uint16MudbusData[0x1027-0x1001];
                this.MotorData.Location10 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x1028-0x1001] << 16) | uint16MudbusData[0x1029-0x1001];
                this.MotorData.Location11 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x102A-0x1001] << 16) | uint16MudbusData[0x102B-0x1001];
                this.MotorData.Location12 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x102C-0x1001] << 16) | uint16MudbusData[0x102D-0x1001];
                this.MotorData.Location13 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x102E-0x1001] << 16) | uint16MudbusData[0x102F-0x1001];
                this.MotorData.Location14 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x1030-0x1001] << 16) | uint16MudbusData[0x1031-0x1001];
                this.MotorData.Location15 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x1042-0x1001] << 16) | uint16MudbusData[0x1043-0x1001];
                this.MotorData.JointData01 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos01 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos01 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x1044-0x1001] << 16) | uint16MudbusData[0x1045-0x1001];
                this.MotorData.JointData02 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos02 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos02 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x1046-0x1001] << 16) | uint16MudbusData[0x1047-0x1001];
                this.MotorData.JointData03 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos03 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos03 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x1048-0x1001] << 16) | uint16MudbusData[0x1049-0x1001];
                this.MotorData.JointData04 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos04 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos04 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x104A-0x1001] << 16) | uint16MudbusData[0x104B-0x1001];
                this.MotorData.JointData05 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos05 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos05 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x104C-0x1001] << 16) | uint16MudbusData[0x104D-0x1001];
                this.MotorData.JointData06 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos06 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos06 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x104E-0x1001] << 16) | uint16MudbusData[0x104F-0x1001];
                this.MotorData.JointData07 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos07 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos07 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x1050-0x1001] << 16) | uint16MudbusData[0x1051-0x1001];
                this.MotorData.JointData08 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos08 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos08 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x1052-0x1001] << 16) | uint16MudbusData[0x1053-0x1001];
                this.MotorData.JointData09 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos09 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos09 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x1054-0x1001] << 16) | uint16MudbusData[0x1055-0x1001];
                this.MotorData.JointData10 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos10 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos10 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x1056-0x1001] << 16) | uint16MudbusData[0x1057-0x1001];
                this.MotorData.JointData11 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos11 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos11 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x1058-0x1001] << 16) | uint16MudbusData[0x1059-0x1001];
                this.MotorData.JointData12 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos12 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos12 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x105A-0x1001] << 16) | uint16MudbusData[0x105B-0x1001];
                this.MotorData.JointData13 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos13 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos13 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x105C-0x1001] << 16) | uint16MudbusData[0x105D-0x1001];
                this.MotorData.JointData14 = uint32MudbusData.toString();
                if (this.JointType === 1) {
                    this.SystemData.JointPos14 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos14 = uint32MudbusData.toString();;
                }

                uint32MudbusData = (uint16MudbusData[0x105E-0x1001] << 16) | uint16MudbusData[0x105F-0x1001];
                this.MotorData.JointData15 = uint32MudbusData.toString(); 
                if (this.JointType === 1) {
                    this.SystemData.JointPos15 = ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
                } else {
                    this.SystemData.JointPos15 = uint32MudbusData.toString();;
                }

            } else if (arg[2] === (0x30 * 2)) {
                const uint32ToFloat = (u, littleEndian = false) => {
                  const buf = new ArrayBuffer(4);
                  const dv = new DataView(buf);
                  dv.setUint32(0, u, littleEndian); // false => big-endian, true => little-endian
                  return dv.getFloat32(0, littleEndian);
                };
                
                //法向力
                uint32MudbusData = (uint16MudbusData[0x1067-0x1060] << 16) | uint16MudbusData[0x1068-0x1060];
                this.OtherData.NormalForce1 = uint32ToFloat(uint32MudbusData, false).toFixed(3).toString() + 'N';
                uint32MudbusData = (uint16MudbusData[0x1069-0x1060] << 16) | uint16MudbusData[0x106A-0x1060];
                this.OtherData.NormalForce2 = uint32ToFloat(uint32MudbusData, false).toFixed(3).toString() + 'N';
                uint32MudbusData = (uint16MudbusData[0x106B-0x1060] << 16) | uint16MudbusData[0x106C-0x1060];
                this.OtherData.NormalForce3 = uint32ToFloat(uint32MudbusData, false).toFixed(3).toString() + 'N';
                uint32MudbusData = (uint16MudbusData[0x106D-0x1060] << 16) | uint16MudbusData[0x106E-0x1060];
                this.OtherData.NormalForce4 = uint32ToFloat(uint32MudbusData, false).toFixed(3).toString() + 'N';
                uint32MudbusData = (uint16MudbusData[0x106F-0x1060] << 16) | uint16MudbusData[0x1070-0x1060];
                this.OtherData.NormalForce5 = uint32ToFloat(uint32MudbusData, false).toFixed(3).toString() + 'N';

                //切向力
                uint32MudbusData = (uint16MudbusData[0x1071-0x1060] << 16) | uint16MudbusData[0x1072-0x1060];
                this.OtherData.TangentialForce1 = uint32ToFloat(uint32MudbusData, false).toFixed(3).toString() + 'N';
                uint32MudbusData = (uint16MudbusData[0x1073-0x1060] << 16) | uint16MudbusData[0x1074-0x1060];
                this.OtherData.TangentialForce2 = uint32ToFloat(uint32MudbusData, false).toFixed(3).toString() + 'N';
                uint32MudbusData = (uint16MudbusData[0x1075-0x1060] << 16) | uint16MudbusData[0x1076-0x1060];
                this.OtherData.TangentialForce3 = uint32ToFloat(uint32MudbusData, false).toFixed(3).toString() + 'N';
                uint32MudbusData = (uint16MudbusData[0x1077-0x1060] << 16) | uint16MudbusData[0x1078-0x1060];
                this.OtherData.TangentialForce4 = uint32ToFloat(uint32MudbusData, false).toFixed(3).toString() + 'N';
                uint32MudbusData = (uint16MudbusData[0x1079-0x1060] << 16) | uint16MudbusData[0x107A-0x1060];
                this.OtherData.TangentialForce5 = uint32ToFloat(uint32MudbusData, false).toFixed(3).toString() + 'N';

                //切向力方向
                uint32MudbusData = (uint16MudbusData[0x107B-0x1060] << 16) | uint16MudbusData[0x107C-0x1060];
                if (uint32MudbusData & 0x8000) {
                    this.OtherData.TangentialDir1 = '-' + ((~uint32MudbusData + 1) & 0xFFFF).toString(); 
                } else {
                    this.OtherData.TangentialDir1 = uint32MudbusData.toString(); 
                }
                uint32MudbusData = (uint16MudbusData[0x107D-0x1060] << 16) | uint16MudbusData[0x107E-0x1060];
                if (uint32MudbusData & 0x8000) {
                    this.OtherData.TangentialDir2 = '-' + ((~uint32MudbusData + 1) & 0xFFFF).toString(); 
                } else {
                    this.OtherData.TangentialDir2 = uint32MudbusData.toString(); 
                }
                uint32MudbusData = (uint16MudbusData[0x107F-0x1060] << 16) | uint16MudbusData[0x1080-0x1060];
                if (uint32MudbusData & 0x8000) {
                    this.OtherData.TangentialDir3 = '-' + ((~uint32MudbusData + 1) & 0xFFFF).toString(); 
                } else {
                    this.OtherData.TangentialDir3 = uint32MudbusData.toString(); 
                }
                uint32MudbusData = (uint16MudbusData[0x1081-0x1060] << 16) | uint16MudbusData[0x1082-0x1060];
                  if (uint32MudbusData & 0x8000) {
                    this.OtherData.TangentialDir4 = '-' + ((~uint32MudbusData + 1) & 0xFFFF).toString(); 
                } else {
                    this.OtherData.TangentialDir4 = uint32MudbusData.toString(); 
                }
                uint32MudbusData = (uint16MudbusData[0x1083-0x1060] << 16) | uint16MudbusData[0x1084-0x1060];
                if (uint32MudbusData & 0x8000) {
                    this.OtherData.TangentialDir5 = '-' + ((~uint32MudbusData + 1) & 0xFFFF).toString(); 
                } else {
                    this.OtherData.TangentialDir5 = uint32MudbusData.toString(); 
                }

                //接近值
                uint32MudbusData = (uint16MudbusData[0x1085-0x1060] << 16) | uint16MudbusData[0x1086-0x1060];
                this.OtherData.CloseValue1 = uint32MudbusData.toString(); 
                uint32MudbusData = (uint16MudbusData[0x1087-0x1060] << 16) | uint16MudbusData[0x1088-0x1060];
                this.OtherData.CloseValue2 = uint32MudbusData.toString(); 
                uint32MudbusData = (uint16MudbusData[0x1089-0x1060] << 16) | uint16MudbusData[0x108A-0x1060];
                this.OtherData.CloseValue3 = uint32MudbusData.toString(); 
                uint32MudbusData = (uint16MudbusData[0x108B-0x1060] << 16) | uint16MudbusData[0x108C-0x1060];
                this.OtherData.CloseValue4 = uint32MudbusData.toString(); 
                uint32MudbusData = (uint16MudbusData[0x108D-0x1060] << 16) | uint16MudbusData[0x108E-0x1060];
                this.OtherData.CloseValue5 = uint32MudbusData.toString(); 

                // if (uint16MudbusData[0x108F-0x1001] === 0xFFFF)
                // {
                //     this.OtherData.ResetFlag = '复位完成';
                // }
                // else 
                // {
                //     this.OtherData.ResetFlag = '复位中 >>' + uint16MudbusData[0x108F-0x1001].toString();
                // }

                const resetFlag = uint16MudbusData[0x108F-0x1060];
                if (resetFlag === 0xFFFF || resetFlag === 0x7FFF) {
                  this.OtherData.ResetFlag = '复位完成';
                } else if (resetFlag === 0x0) {
                  this.OtherData.ResetFlag = '灵巧手未复位'
                } else {
                    // 检查bit0~bit14
                    // let failedMotors = [];
                    // for (let i = 0; i < 15; i++) {
                    //     if (((resetFlag >> i) & 0x1) === 0) {
                    //         failedMotors.push(i+1);
                    //     }
                    // }
                    // if (failedMotors.length > 1) {
                    //     this.OtherData.ResetFlag = '电机' + failedMotors.join('、') + '复位失败';
                    // } else  {
                    //     this.OtherData.ResetFlag = '灵巧手复位中';
                    // }
                    let failedMotors = [];
                    for (let i = 0; i < 15; i++) {
                        if (((resetFlag >> i) & 0x1) === 0) {
                          failedMotors.push(i+1);
                          // this.OtherData.ResetFlag += ' '
                          // this.OtherData.ResetFlag += (i+1).toString();
                        }
                    }
                    this.OtherData.ResetFlag = '复位失败:' + failedMotors.join('、');
                }
            }

        } else if (arg[1] === 0x03) {

            if (uint16MudbusData[0xAB-0x8d] === 0) {
                this.OtherData.MotorCtrl = '电机闭环模式';
            } else if (uint16MudbusData[0xAB-0x8d] === 1) {
                this.OtherData.MotorCtrl = '关节闭环模式';
            }

    
            
            if (this.JointType === 1) {
                this.DIcon = '°';
                uint32MudbusData = (uint16MudbusData[0x8D-0x8d] << 16) | uint16MudbusData[0x8E-0x8d];
                this.SystemData.SetJoint01 = (uint32MudbusData === 0) ? 0 : ((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0x8F-0x8d] << 16) | uint16MudbusData[0x90-0x8d];
                this.SystemData.SetJoint02 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0x91-0x8d] << 16) | uint16MudbusData[0x92-0x8d];
                this.SystemData.SetJoint03 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0x93-0x8d] << 16) | uint16MudbusData[0x94-0x8d];
                this.SystemData.SetJoint04 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0x95-0x8d] << 16) | uint16MudbusData[0x96-0x8d];
                this.SystemData.SetJoint05 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0x97-0x8d] << 16) | uint16MudbusData[0x98-0x8d];
                this.SystemData.SetJoint06 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0x99-0x8d] << 16) | uint16MudbusData[0x9A-0x8d];
                this.SystemData.SetJoint07 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0x9B-0x8d] << 16) | uint16MudbusData[0x9C-0x8d];
                this.SystemData.SetJoint08 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0x9D-0x8d] << 16) | uint16MudbusData[0x9E-0x8d];
                this.SystemData.SetJoint09 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0x9F-0x8d] << 16) | uint16MudbusData[0xA0-0x8d];
                this.SystemData.SetJoint10 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0xA1-0x8d] << 16) | uint16MudbusData[0xA2-0x8d];
                this.SystemData.SetJoint11 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0xA3-0x8d] << 16) | uint16MudbusData[0xA4-0x8d];
                this.SystemData.SetJoint12 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0xA5-0x8d] << 16) | uint16MudbusData[0xA6-0x8d];
                this.SystemData.SetJoint13 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0xA7-0x8d] << 16) | uint16MudbusData[0xA8-0x8d];
                this.SystemData.SetJoint14 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);

                uint32MudbusData = (uint16MudbusData[0xA9-0x8d] << 16) | uint16MudbusData[0xAA-0x8d];
                this.SystemData.SetJoint15 = (uint32MudbusData === 0) ? 0 :((uint32MudbusData - 32768) * 360 / 65536).toFixed(2);
            } else if (this.JointType === 0) {
                this.DIcon = '';
                uint32MudbusData = (uint16MudbusData[0x8D-0x8d] << 16) | uint16MudbusData[0x8E-0x8d];
                this.SystemData.SetJoint01 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x8F-0x8d] << 16) | uint16MudbusData[0x90-0x8d];
                this.SystemData.SetJoint02 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x91-0x8d] << 16) | uint16MudbusData[0x92-0x8d];
                this.SystemData.SetJoint03 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x93-0x8d] << 16) | uint16MudbusData[0x94-0x8d];
                this.SystemData.SetJoint04 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x95-0x8d] << 16) | uint16MudbusData[0x96-0x8d];
                this.SystemData.SetJoint05 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x97-0x8d] << 16) | uint16MudbusData[0x98-0x8d];
                this.SystemData.SetJoint06 = uint32MudbusData.toString() ;

                uint32MudbusData = (uint16MudbusData[0x99-0x8d] << 16) | uint16MudbusData[0x9A-0x8d];
                this.SystemData.SetJoint07 = uint32MudbusData.toString();

                uint32MudbusData = (uint16MudbusData[0x9B-0x8d] << 16) | uint16MudbusData[0x9C-0x8d];
                this.SystemData.SetJoint08 = uint32MudbusData.toString();

                uint32MudbusData = (uint16MudbusData[0x9D-0x8d] << 16) | uint16MudbusData[0x9E-0x8d];
                this.SystemData.SetJoint09 = uint32MudbusData.toString();

                uint32MudbusData = (uint16MudbusData[0x9F-0x8d] << 16) | uint16MudbusData[0xA0-0x8d];
                this.SystemData.SetJoint10 = uint32MudbusData.toString();

                uint32MudbusData = (uint16MudbusData[0xA1-0x8d] << 16) | uint16MudbusData[0xA2-0x8d];
                this.SystemData.SetJoint11 = uint32MudbusData.toString();

                uint32MudbusData = (uint16MudbusData[0xA3-0x8d] << 16) | uint16MudbusData[0xA4-0x8d];
                this.SystemData.SetJoint12 = uint32MudbusData.toString();

                uint32MudbusData = (uint16MudbusData[0xA5-0x8d] << 16) | uint16MudbusData[0xA6-0x8d];
                this.SystemData.SetJoint13 = uint32MudbusData.toString();

                uint32MudbusData = (uint16MudbusData[0xA7-0x8d] << 16) | uint16MudbusData[0xA8-0x8d];
                this.SystemData.SetJoint14 = uint32MudbusData.toString();

                uint32MudbusData = (uint16MudbusData[0xA9-0x8d] << 16) | uint16MudbusData[0xAA-0x8d];
                this.SystemData.SetJoint15 = uint32MudbusData.toString() ;
            }
          
           
        } 

        //save Excel time
        //if (this.nowTime !== new Date().toLocaleString()){
            //this.nowTime = new Date().toLocaleString()
            var TempTimeStr24 = new Date();
            if (this.csbStatue === 'open') {
                this.logHandle.WriteDecoderLog(TempTimeStr24.toLocaleString('chinese', {hour12:false}));
            }
        //}
    })

    ipcRenderer.on(APP_SWITCH_JOINT_UNIT, (event, arg) => {
        if (arg.Type === 'Degree') {
            this.JointType = 1;
        } else if (arg.Type === 'Scalar') {
            this.JointType = 0;
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
    {/* height: 18px;  */}
  }
  .my-main .el-tabs__nav .el-tabs__item{
  height: 35px;
  font-weight: 800;
}
</style>




