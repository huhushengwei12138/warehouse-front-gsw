<template>

  <dv-full-screen-container>
    <div class="bg">
      <dv-border-box-11 title="智能立体仓库系统看板" style="width: 100%;height: 100%;">
        <dv-full-screen-container>

          <div class="naca">

            <div class="left">
              <div class="top3">
                <div class="text-title"><span>今日出库数量（件）</span></div>
                <div class="details-value"><span>123</span>件</div>

              </div>
              <div class="left-1">
                <dv-border-box-1>
                  <span style="text-align: center">
                    <h2>仓库库存明细</h2>
                  </span>
                  <dv-capsule-chart :config="config33" style="width:450px;height:260px" />
                </dv-border-box-1>
              </div>
              <div class="left-2">
                <dv-border-box-1>
                  <span style="text-align: center">
                    <h2>库存排行榜</h2>
                  </span>
                  <dv-conical-column-chart :config="config4" style="width:450px;height:250px;" />
                  <!--                <dv-decoration-8 :reverse="true" style="width:350px;height:20px;" />-->
                </dv-border-box-1>
              </div>
            </div>

            <div class="center">

              <div class="top3">
                <div class="text-title"><span>今日入库数量（件）</span></div>
                <div class="details-value"><span>160</span>件</div>
              </div>

              <div class="center-1">
                <dv-border-box-1>
                  <span style="text-align: center">
                    <h2>AGV待处理任务</h2>
                  </span>
                  <dv-scroll-board :config="config5" style="width:95%;height:85%;margin-left:20px;" />
                </dv-border-box-1>
              </div>
              <div class="center-2">
                <dv-border-box-1>
                  <span style="text-align: center">
                    <h2>今日入库统计</h2>
                  </span>
                  <dv-scroll-ranking-board :config="config4" style="width:660px;height:400px; margin-left:2%; margin-top: 2%;" />
                </dv-border-box-1>
              </div>
            </div>

            <div class="right">
              <div class="top3">
                <div class="text-title"><span>库存总量（件）</span></div>
                <div class="details-value"><span>2256</span>件</div>
              </div>

              <div class="right-1">
                <dv-border-box-1>
                  <span style="text-align: center">
                    <h2>仓库温湿度</h2>
                  </span>
                  <!--                <dv-active-ring-chart :config="config1"style="width:350px;height:200px" />-->
                  <dv-decoration-9 style="width:150px;height:150px;margin-left: 30px;margin-top: 45px;float: left">
                    <h2>22°C</h2>
                  </dv-decoration-9>
                  <dv-decoration-9 style="width:150px;height:150px;float: right;margin-top: 45px">
                    <h2>20%</h2>
                  </dv-decoration-9>
                </dv-border-box-1>
              </div>

              <div class="right-2">
                <dv-border-box-1>
                  <div style="position: relative;">
                    <span style="text-align: center">
                      <h2>AGV充电电流</h2>
                    </span>
                    <dv-percent-pond :config="config6"
                      style="width:250px;height:120px;margin-left: 100px ;margin-top: 60px;" />
                    <dv-digital-flop :config="config11"
                      style="width:200px;height:50px;margin-left: 120px ;padding-top: 20px" />
                  </div>
                </dv-border-box-1>
              </div>
            </div>



          </div>
        </dv-full-screen-container>
      </dv-border-box-11>
    </div>

  </dv-full-screen-container>
</template>

<script>
export default {
  data() {
    return {
      config1: {
        radius: '50%',
        activeRadius: '55%',
        data: [
          {
            name: '温度（°C）',
            value: 25
          }
        ],
        digitalFlopStyle: {
          fontSize: 20
        },
        showOriginValue: true
      },
      config4: {
        data: [
          {
            name: '部件1',
            value: 55
          },
          {
            name: '部件2',
            value: 120
          },
          {
            name: '部件3',
            value: 71
          },
          {
            name: '部件4',
            value: 66
          },
          {
            name: '部件5',
            value: 80
          },
          {
            name: '部件6',
            value: 35
          },
          {
            name: '部件7',
            value: 15
          }
        ],
        showValue: true
      },
      config5: {
        header: ['任务类型', '任务起点', '任务终点', '任务创建时间'],
        data: [
          ['<span style="color:#37a2da;">出库</span>', '库位1', '库位3', '07-04 10:20:21'],
          ['入库', '<span style="color:#32c5e9;">库位2</span>', '库位4', '07-04 10:23:25'],
          ['出库', '库位8', '<span style="color:#67e0e3;">库位6</span>', '07-04 10:24:12'],
          ['出库', '<span style="color:#9fe6b8;">库位5</span>', '库位6', '07-04 10:26:03'],
          ['<span style="color:#ffdb5c;">入库</span>', '库位7', '库位3', '07-04 10:27:09'],
          ['入库', '<span style="color:#ff9f7f;">库位9</span>', '库位2', '07-04 11:03:28'],
          ['出库', '库位10', '<span style="color:#fb7293;">库位3</span>', '07-04 11:04:27'],
          ['出库', '<span style="color:#e062ae;">库位4</span>', '库位5', '07-04 11:31:56'],
          ['<span style="color:#e690d1;">入库</span>', '库位7', '库位6', '07-04 11:35:33'],
          ['出库', '<span style="color:#e7bcf3;">库位8</span>', '库位4', '07-04 11:42:54']
        ],
        index: true,
        columnWidth: [50],
        align: ['center']
      },
      config6: {
        value: 66,
        localGradient: true
      },
      config7: {
        data: [66, 45],
        shape: 'roundRect'
      },

      config11: {
        number: [20],
        toFixed: 2,
        content: '{nt}A'
      },

      config33: {
        //  data: [
        //    {"name":"仓库10","value":0},{"name":"仓库11","value":1},{"name":"仓库12","value":2},{"name":"仓库13","value":3},{"name":"仓库14","value":4}
        //  ],
        data: [],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '件',
        showValue: true
      },


      infoList: [],

      intervalId: null
    }
  },

  created() {
    this.getList();
  },

  methods: {

    getList() {
      // listInfo().then(response => {
      //   this.config33.data = response.data;
      //   console.log( response);
      //   this.config33 = { ...this.config33 }
      // });

      var response = {
        "msg": "操作成功",
        "code": 200,
        "data": [
          {
            "name": "仓库1",
            "value": 100
          },
          {
            "name": "仓库2",
            "value": 184
          },
          {
            "name": "仓库3",
            "value": 268
          },
          {
            "name": "仓库4",
            "value": 352
          },
          {
            "name": "仓库5",
            "value": 436
          }
        ]
      }
      this.config33.data = response.data;
      this.config33 = { ...this.config33 }
    },
    refreshPage() {
      // 刷新页面的逻辑，例如：window.location.reload()
      window.location.reload();
    }
  },


  mounted() {
    // 设置定时器
    this.intervalId = setInterval(this.refreshPage, 50000); // 5分钟刷新一次
  },
  beforeDestroy() {
    // 清除定时器
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}

</script>

<style>
.naca {
  width: 100%;
  height: 100%;
  /* padding: 120px; */
  /*margin: 40px 24px;*/
  /* background-color: aquamarine; */
  display: flex;
}



.left {
  width: 30%;
  height: 95%;
}

.center {
  width: 30%;
  height: 95%;
  flex: 1;
}

.right {
  width: 30%;
  height: 95%;
}


.top3 {
  margin: 5px;
  color: aliceblue;
  width: 100%;
  height: 70px;
  padding-top: 60px;
  /* background-color: rgb(26, 26, 133); */
}

.center-1, .center-2 {
  margin: 5px;
  color: aliceblue;
  width: 100%;
  padding-top: 20px;
  /* background-color: rgb(26, 26, 133); */
}

.left-1, .left-2 {
  margin: 5px;
  color: aliceblue;
  width: 98%;
  padding-top: 20px;
  /* background-color: rgb(26, 26, 133); */
}

.right-1, .right-2 {
  margin: 5px;
  color: aliceblue;
  width: 98%;
  padding-top: 20px;
  position: relative;
  /* background-color: rgb(26, 26, 133); */
}

.center-1, .left-1, .right-1 {
  height: 390px;
}



.bg {
  width: 100%;
  height: 100%;
  background-color: midnightblue;
  position: relative;
}

.text-title {
  height: 35px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;

  span {
    color: #FFBB66;
    font-size: 25px;
  }
}


.details-value {
  margin-top: 10px;
  height: 40px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;

  span {
    color: #00c0ff;
    font-size: 30px;
  }
}
</style>
