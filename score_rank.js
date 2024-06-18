 function draw_score_rank() {
var dom = document.getElementById("score_rank");
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  dataset: {
    source: [
      ['score', '分数', 'product'],
      [9, 9, '大话西游之月光宝盒(电影)1995'],
      [9.1, 9.1, '西游记续集(剧集)2000'],
      [9.1, 9.1, '西游记(剧集)2010'],
      [9.1, 9.1, '西游记故事(剧集)2014'],
      [9.2, 9.2, '金猴降妖(电影)1985'],
      [9.2, 9.2, '大话西游之大圣娶亲(电影)1995'],
      [9.3, 9.3, '西游记(剧集)1999'],
      [9.3, 9.3, '夺宝幸运星(剧集)2005'],
      [9.3, 9.3, '夺宝幸运星2(剧集)2009'],
      [9.3, 9.3, '夺宝幸运星3(剧集)2013'],
      [9.4, 9.4, '大闹天宫(电影)1961'],
      [9.7, 9.7, '西游记(剧集)1986']
    ]
  },
  grid: { containLabel: true },
  xAxis: { 
    name: '',
    axisLabel:{
      show:true,
      color:"#363636",
      fontSize: 14
    } },
  yAxis: { 
    type: 'category',
    axisLabel:{
      show:true,
      color:"#363636",
      fontSize: 14
    }  },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    type: 'piecewise',
    min: 9.0,
    max: 10.0,
    text: ['10.0分', '9.0分'],
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ['#FFA500', '#ff9933', '#8B5A00']
      // color: ['#00BFFF', '#FFCE34', '#FD665F']
    }
  },
  series: [
    {
      type: 'bar',
      barWidth:18,
      encode: {
        // Map the "amount" column to X axis.
        x: '分数',
        // Map the "product" column to Y axis
        y: 'product'
      },
      label: {
        show: true,
        position: 'right',
      }
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

 };