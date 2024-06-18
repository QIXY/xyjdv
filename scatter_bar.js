 function draw_scatterbar() {

var dom = document.getElementById('scatter_bar');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    setTimeout(function () {
  option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['product', '江州', '双叉岭',  '五行山',  '蛇盘山', '观音禅院',  '黑风山', '高老庄',  '黄风岭',  '流沙河',  '贺州',  '万寿山',  '白虎岭', '黑松林', '宝象国', '平顶山',  '莲花洞', '乌鸡国',  '号山',  '火云洞',  '黑水河',  '车迟国',  '陈家庄',  '金皘山',  '西梁国',  '琵琶洞',  '火焰山', '积云山',  '翠云山',  '祭赛国',  '乱石山',  '荆棘岭',  '通天河', '小雷音寺',  '骆驼庄',  '朱紫国',  '麒麟山',  '盘丝洞',  '黄花观',  '狮驼洞',  '比丘国',  '禅林寺',  '无底洞',  '灭法国',  '连环洞',  '凤仙郡',  '玉华县',  '虎头洞',  '竹节山',  '金平府',  '布金寺',  '铜台府',  '灵山'],
        ['神佛数量', 7, 1, 0, 2, 1, 1,0,1,2,4,8,0,0,40,0,4,3,0,1,7,10,0,59,28,3,0,1,7,0,10,0,12,45,0,1,3,0,2,28,1,0,8,2,0,7,0,0,4,20,5,16,1],
        ['人类数量', 14,8,2,1,3,0,5,2,2,2,2,1,1,6,1,1,7,1,3,1,7,4,4,12,2,2,2,2,2,2,1,3,2,1,4,3,1,1,4,4,2,1,2,1,2,5,5,5,2,4,3,1],
        ['妖怪数量', 0,6,1,2,2,5,3,9,7,4,8,5,3,11,8,12,10,5,15,1,18,6,15,20,5,4,6,5,6,5,5,18,10,5,8,8,11,12,25,12,9,5,0,5,4,7,5,13,14,5,0,4]
      ]
    },
    xAxis: { 
      type: 'category',
      axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      color: '#666666',
      fontSize: 12,
      rotate: 45
    }
     },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2012} ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2012',
          tooltip: '2012'
        }
      }
    ],
    color: ['#8B4500', '#cd6600', '#ff9933', '#fac858',  '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
  };
  myChart.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart.setOption(option);
});

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);


 }