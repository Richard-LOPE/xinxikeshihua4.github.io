/****/
$(document).ready(function () {
  var whei = $(window).width();
  $("html").css({ fontSize: whei / 20 });
  $(window).resize(function () {
    var whei = $(window).width();
    $("html").css({ fontSize: whei / 20 });
  });
});

$(window).load(function () {
  $(".loading").fadeOut();
});
$(function () {
  echarts_1();
  echarts_2();
  echarts_3();
  pe04();

  pe01();
  pe02();
  pe03();
  function echarts_4() {
    var myChart = echarts.init(document.getElementById("echarts4"));
    var data = [
      {
        name: "邮件总量",
        value: 20000,
      },
      {
        name: "公文交换",
        value: 18170,
      },
      {
        name: "内部流转",
        value: 19870,
      },
    ];

    option = {
      color: [
        "#A0CE3A",
        "#31C5C0",
        "#1E9BD1",
        "#0F347B",
        "#585247",
        "#7F6AAD",
        "#009D85",
        "rgba(250,250,250,0.3)",
      ],

      grid: {
        bottom: 0,
        left: 0,
        right: "0",
      },
      series: [
        // 主要展示层的
        {
          radius: ["30%", "50%"],
          center: ["50%", "50%"],
          type: "pie",
          label: {
            normal: {
              show: true,
              formatter: ["{b|{b}}", "{c|{c}次}", "{d|同比：{d}%}"].join("\n"),
              rich: {
                c: {
                  color: "rgb(241,246,104)",
                  fontSize: 20,
                  fontWeight: "bold",
                  lineHeight: 25,
                },
                b: {
                  color: "rgb(98,137,169)",
                  fontSize: 15,
                  height: 40,
                },
              },

              position: "outside",
            },
            emphasis: {
              show: true,
            },
          },
          labelLine: {
            normal: {
              show: true,
              length: 15,
              length2: 50,
            },
            emphasis: {
              show: true,
            },
          },
          name: "民警训练总量",
          data: data,
        },
        // 边框的设置
        {
          radius: ["30%", "35%"],
          center: ["50%", "50%"],
          type: "pie",
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          animation: false,
          tooltip: {
            show: false,
          },
          data: [
            {
              value: 1,
              itemStyle: {
                color: "rgba(250,250,250,0.3)",
              },
            },
          ],
        },
        {
          name: "外边框",
          type: "pie",
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          center: ["50%", "50%"],
          radius: ["60%", "61%"],
          label: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 9,
              name: "",
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: "#0c2c69",
                },
              },
            },
          ],
        },
      ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_1() {
    var myChart = echarts.init(document.getElementById("echarts1"));
    option = {
      title: {
        text: "生命周期碳排放(e/km)",
        left: "center",
        top: 20,
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "item",
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: 241.9, name: "汽油车" },
            { value: 331.3, name: "柴油车" },
            { value: 196.6, name: "常规混合动力车" },
            { value: 211.1, name: "插电式混合动力车" },
            { value: 146.5, name: "纯电动车" },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          labelLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.3)",
            },
            smooth: 0.2,
            length: 10,
            length2: 20,
          },
          itemStyle: {
            color: "#83bff6",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function (idx) {
            return Math.random() * 200;
          },
        },
      ],
    };

    option && myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts2"));

    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          lineStyle: {
            color: "white",
          },
        },
      },
      grid: {
        left: "0",
        top: "30",
        right: "20",
        bottom: "-10",
        containLabel: true,
        Style: {
          color: "#188df0",
        },
      },
      legend: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        data: ["销量（万辆）"],
        right: "center",
        top: 0,
        textStyle: {
          color: "#fff",
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
      },

      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 14,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },

          data: [
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
          ],
        },
        {
          axisPointer: { show: false },
          axisLine: { show: false },
          position: "bottom",
          offset: 20,
        },
      ],

      yAxis: [
        {
          type: "value",
          axisTick: { show: false },
          // splitNumber: 6,
          axisLine: {
            lineStyle: {
              color: "#188df0",
            },
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 14,
            },
          },

          splitLine: {
            lineStyle: {
              color: "#188df0",
            },
          },
        },
      ],
      series: [
        {
          name: "销量（万辆）",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: "#188df0",
              width: 2,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "#83bff6",
                  },
                  {
                    offset: 0.8,
                    color: "#188df0",
                  },
                ],
                false
              ),
              shadowColor: "#188df0",
            },
          },
          itemStyle: {
            normal: {
              color: "#188df0",
              borderColor: "#188df0",
              borderWidth: 12,
            },
          },
          data: [
            1.8, 7.5, 33.1, 50.7, 77.7, 125.6, 120.6, 136.7, 352.1, 688.7,
            949.5,
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts3"));

    var option;

    setTimeout(function () {
      option = {
        legend: {
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
          showContent: false,
        },

        dataset: {
          source: [
            [
              "product",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018",
              "2019",
              "2020",
              "2021",
              "2022",
            ],
            [
              "非化石能源占总发电量的比例",
              21.6,
              22.3,
              25.4,
              27.2,
              29.2,
              30.1,
              30.9,
              32.6,
              33.9,
              47,
              36.2,
            ],
            [
              "火力发电占总发电量的比例",
              78.4,
              77.7,
              74.6,
              72.8,
              70.8,
              69.9,
              69.1,
              67.4,
              66.1,
              53,
              63.8,
            ],
          ],
        },
        xAxis: { type: "category" },
        yAxis: { gridIndex: 0 },
        grid: { top: "55%" },
        series: [
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "pie",
            id: "pie",
            radius: "30%",
            center: ["50%", "25%"],
            emphasis: {
              focus: "self",
            },
            label: {
              formatter: "{b}: {@2012} ({d}%)",
            },
            encode: {
              itemName: "product",
              value: "2012",
              tooltip: "2012",
            },
          },
        ],
      };
      myChart.on("updateAxisPointer", function (event) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: "pie",
              label: {
                formatter: "{b}: {@[" + dimension + "]} ({d}%)",
              },
              encode: {
                value: dimension,
                tooltip: dimension,
              },
            },
          });
        }
      });
      myChart.setOption(option);
    });

    option && myChart.setOption(option);

    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function pe01() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("pe01"));
    var txt = 80;
    option = {
      title: {
        text: txt + "%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#fff",
          fontSize: "18",
        },
      },
      color: "#49bcf7",

      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["65%", "80%"],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          data: [
            {
              value: txt,
              name: "已使用",
              itemStyle: {
                normal: {
                  color: "#eaff00",
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
            },
            {
              name: "未使用",
              value: 100 - txt,
            },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function pe02() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("pe02"));
    var txt = 73;
    option = {
      title: {
        text: txt + "%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#fff",
          fontSize: "18",
        },
      },
      color: "#49bcf7",

      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["65%", "80%"],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          data: [
            {
              value: txt,
              name: "已使用",
              itemStyle: {
                normal: {
                  color: "#ea4d4d",
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
            },
            {
              name: "未使用",
              value: 100 - txt,
            },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function pe03() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("pe03"));
    var txt = 30;
    option = {
      title: {
        text: txt + "%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#fff",
          fontSize: "18",
        },
      },
      color: "#49bcf7",

      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["65%", "80%"],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          data: [
            {
              value: txt,
              name: "已使用",
              itemStyle: {
                normal: {
                  color: "#395ee6",
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
            },
            {
              name: "未使用",
              value: 100 - txt,
            },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function pe04() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("lastecharts"));
    option = {
      tooltip: {
        trigger: "axis",
      },
      radar: [
        {
          indicator: [
            {
              text: "盈利能力",
              max: 100,
            },
            {
              text: "发展水平",
              max: 100,
            },
            {
              text: "融资能力",
              max: 100,
            },
            {
              text: "技术能力",
              max: 100,
            },
            {
              text: "企业规模",
              max: 100,
            },
          ],
          textStyle: {
            color: "red",
          },
          center: ["50%", "50%"],
          radius: "70%",
          startAngle: 90,
          splitNumber: 4,
          shape: "circle",

          name: {
            padding: -5,
            formatter: "{value}",
            textStyle: {
              fontSize: 14,
              color: "rgba(255,255,255,.6)",
            },
          },
          splitArea: {
            areaStyle: {
              color: "rgba(255,255,255,.05)",
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.05)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.05)",
            },
          },
        },
      ],
      series: [
        {
          name: "雷达图",
          type: "radar",
          tooltip: {
            trigger: "item",
          },
          data: [
            {
              name: "园区平均值",
              value: [90, 80, 20, 10, 30],
              lineStyle: {
                normal: {
                  color: "#03b48e",
                  width: 2,
                },
              },
              areaStyle: {
                normal: {
                  color: "#03b48e",
                  opacity: 0.4,
                },
              },
              symbolSize: 0,
            },
            {
              name: "当前园区",
              value: [30, 20, 75, 80, 70],
              symbolSize: 0,
              lineStyle: {
                normal: {
                  color: "#3893e5",
                  width: 2,
                },
              },
              areaStyle: {
                normal: {
                  color: "rgba(19, 173, 255, 0.5)",
                },
              },
            },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
});
