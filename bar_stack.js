function draw_barstack() {
var dom = document.getElementById('bar_stack');
    var myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '20%',
    // containLabel: true
  },
  xAxis: {
    type: 'value',
    name:'投入运行的车型数量'
  },
  yAxis: {
    type: 'category',
    data: ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007']

  },
  series: [
    {
      name: '复兴号系列动车组',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [1,1,7,1,5,2,2,0,0,0,0,0,0,0,0,0,0]
    },
    {
      name: '和谐号系列动车组',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [0,0,0,1,1,0,3,3,2,1,2,1,2,2,2,4,1]
    },
    {
      name: '城际及市域动车组',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [0,1,0,1,2,1,0,1,0,1,0,0,0,0,0,0,0]
    },
    {
      name: '香港特别行政区和台湾省高速动车组',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1]
    }
  ],
  color: ['#ee6666', '#91cc75', '#fac858',  '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc', '#96BFFF', '#8378EA', '#b5bd48', '#b55dba', '#37a354', '#e06343', '#37A2DA', '#3b9b64', '#49baa6', '#beaf53', '#b54568', '#6bba49', '#b08fd3', '#6bb6c7']
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}