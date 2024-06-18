 function draw_mapbar() {

     var dom = document.getElementById("map_bar");
var myChart = echarts.init(dom);
var app = {};

var option;



const pathSymbols = {
  plane:
    'image://plane.png',
  rocket:
    'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.744c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.228v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-257.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-265.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-1.488-3.826h8.067L-252.36,45.15z',
  tangseng: 'image://师徒/tangseng.png',
  tangkongjiejing: 'image://师徒/tangkongjiejing.png',
  tangkong: 'image://师徒/tangkong.png',
  tangkongjie: 'image://师徒/tangkongjie.png'
};
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
    formatter: function (params) {
      return params[0].name;
      // return params[0].name + ': ' + params[0].value;
    }
  },
  title: {
    text: '取经途径地点及对应地点的师徒组队情况',
    top: 30,
    left: 60,
    textStyle: {
      fontSize: 18,
      color:'#666666'
    }
  },
  xAxis: {
    data: [
  '江州', '双叉岭',  '五行山',  '蛇盘山', '观音禅院',  '黑风山', '高老庄',  '黄风岭',  '流沙河',  '贺州',  '万寿山',  '白虎岭', '黑松林', '宝象国', '平顶山',  '莲花洞', '乌鸡国',  '号山',  '火云洞',  '黑水河',  '车迟国',  '陈家庄',  '金皘山',  '西梁国',  '琵琶洞',  '火焰山', '积云山',  '翠云山',  '祭赛国',  '乱石山',  '荆棘岭',  '通天河', '小雷音寺',  '骆驼庄',  '朱紫国',  '麒麟山',  '盘丝洞',  '黄花观',  '狮驼洞',  '比丘国',  '禅林寺',  '无底洞',  '灭法国',  '连环洞',  '凤仙郡',  '玉华县',  '虎头洞',  '竹节山',  '金平府',  '布金寺',  '铜台府',  '灵山'
],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      color: '#666666',
      fontSize: 12,
      rotate: 45
    }
  },
  yAxis: {
    splitLine: { show: false },
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false }
  },
  color: ['rgb(204, 85, 0)'],
  grid:{
    x: 60,
    y: 120,
    x2: 40,
    y2: 200
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 50
    },
    {
      show: true,
      type: 'slider',
      top: '87%',
      start: 0,
      end: 50
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
      data: [10, 30, 50, 90,  120,  150,  180, 210, 240,  280,  320,  360,  400,  280,  320,  360,  400,  280,  320,  360,  400,  280,  320,  360,  400,  280,  320,  360,  400,  280,  320,  360,  400,  280,  320,  360,  400,  280,  320,  360,  400,  280,  320,  360,  400,  280,  320,  360,  400,  280,  320,  360],
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
          value: 10,
          symbol: pathSymbols.tangseng,
          symbolSize: [25, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 30,
          symbol: pathSymbols.tangseng,
          symbolSize: [25, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 50,
          symbol: pathSymbols.tangseng,
          symbolSize: [25, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 90,
          symbol: pathSymbols.tangkong,
          symbolSize: [35, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 120,
          symbol: pathSymbols.tangkong,
          symbolSize: [35, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 150,
          symbol: pathSymbols.tangkong,
          symbolSize: [35, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 180,
          symbol: pathSymbols.tangkong,
          symbolSize: [35, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 210,
          symbol: pathSymbols.tangkongjie,
          symbolSize: [50, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 240,
          symbol: pathSymbols.tangkongjie,
          symbolSize: [50, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 280,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 320,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 360,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 400,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 280,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 320,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 360,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 400,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 280,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 320,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 360,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 400,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 280,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 320,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 360,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 400,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 280,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 320,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 360,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 400,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 280,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 320,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 360,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 400,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 280,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 320,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 360,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 400,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 280,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 320,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 360,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 400,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 280,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 320,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 360,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 400,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 280,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 320,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 360,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 400,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 280,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 320,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        },
        {
          value: 360,
          symbol: pathSymbols.tangkongjiejing,
          symbolSize: [65, 35],
          label: {
            show: false,
            fontSize: 16
          }
        }
      ]
    }
  ]
};



            if (option && typeof option === 'object') {
              myChart.setOption(option);
            }

 }