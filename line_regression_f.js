 function draw_lineregression_f() {
var dom = document.getElementById("line_regression_f");

var myChart = echarts.init(dom);
var app = {};

var option;

// See https://github.com/ecomfe/echarts-stat
echarts.registerTransform(ecStat.transform.regression);
const data = [
[1927,7.9],
[1941,8.6],
[1958,8.1],
[1961,9.4],
[1962,8.6],
[1966,6.5],
[1967,6.7],
[1968,5.7],
[1975,5],
[1976,3.7],
[1981,8.3],
[1983,7.9],
[1985,9.2],
[1989,6.9],
[1991,4],
[1995,9.2],
[2005,6.9],
[2007,2.5],
[2012,5.6],
[2013,7.2],
[2014,4.4],
[2015,8.3],
[2016,5.6],
[2017,4.8],
[2018,4.4]
];
option = {
  dataset: [
    {
      source: data
    },
    {
      transform: {
        type: 'ecStat:regression'
        // 'linear' by default.
        // config: { method: 'linear', formulaOn: 'end'}
      }
    }
  ],
  grid: {
                left: '20%',
            },

  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  xAxis: {
    scale: true,
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    name: '年份'
  },
  yAxis: {
    scale: true,
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    name: '电影得分最大值'
  },
  series: [
    {
      name: 'scatter',
      type: 'scatter',
      color:'#CDAD00',
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
    },
    // {
    //   type: 'effectScatter',
    //   symbolSize: 16,
    //   color:'#ff9933',
    //   data: [
    //     [1986,9.7]
    //   ]
    // },
    {
      name: 'line',
      type: 'line',
      color:'#8B5A00',
      datasetIndex: 1,
      symbolSize: 0.1,
      symbol: 'circle',
      label: { show: true, fontSize: 14 },
      labelLayout: { dx: -20 },
      encode: { label: 2, tooltip: 1 }
    }
  ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
};