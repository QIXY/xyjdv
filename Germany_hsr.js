 function draw_Germany_hsr() {
    var dom = document.getElementById("Germany_hsr");
var myChart = echarts.init(dom,'dark');
var app = {};

var option;



const pathSymbols = {
  // series0:
  //   'image://日本/0系.jpg',
 ICE1: 'image://德国/ICE1.png',
  ICE2: 'image://德国/ICE2.png',
  ICET: 'image://德国/ICE-T.png',
  ICE3403: 'image://德国/ICE3-403-6.png',
  ICETD: 'image://德国/ICE-TD.png',
  ICE4: 'image://德国/ICE4.png',
  ICE3407: 'image://德国/ICE3-407.png',
};
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
    formatter: function (params) {
      return params[0].name + ': ' + params[0].value;
    }
  },
  // title: {
  //   text: '德国高铁车型',
  //   left: '20%',
  //   textStyle: {
  //     fontSize: 20,
  //   }
  // },
  xAxis: {
    data: ['1991: ICE1',  '1991: ICE2', '1999: ICE-T',  '2000: ICE3-403', '2001: ICE-TD', '2013: ICE4', '2013: ICE3-407'],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      color: '#91cc75',
      fontSize: 14,
      rotate: 30
    }
  },
  yAxis: {
    splitLine: { show: false },
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false }
  },
  color: ['#91cc75'],
grid: {
                left: '15%',

            },
  dataZoom: [
    // {
    //   type: 'inside',
    //   start: 0,
    //   end: 100
    // },
    {
      show: true,
      type: 'slider',
      top: '87%',
      start: 0,
      end: 100
    }
  ],
  series: [
    {
      name: 'hill',
      type: 'pictorialBar',
      barCategoryGap: '-130%',
      // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
      symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
      itemStyle: {
        opacity: 0.5
      },
      emphasis: {
        itemStyle: {
          opacity: 1
        }
      },
      data: [280,280,230,320,200,250,320],
      z: 10
    },
    {
      name: 'glyph',
      type: 'pictorialBar',
      barGap: '-100%',
      symbolPosition: 'end',
      symbolSize: 50,
      symbolOffset: [0, '-120%'],
      data: [
        {
          value: 280,
          symbol: pathSymbols.ICE1,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 280,
          symbol: pathSymbols.ICE2,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 230,
          symbol: pathSymbols.ICET,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 320,
          symbol: pathSymbols.ICE3403,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 200,
          symbol: pathSymbols.ICETD,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 250,
          symbol: pathSymbols.ICE4,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        },
        {
          value: 320,
          symbol: pathSymbols.ICE3407,
          symbolSize: [70, 70],
          label: {
            show: true,
            fontSize: 14
          }
        }
      ]
    }
  ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

 };