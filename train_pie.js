function draw_trainpie() {
	var dom = document.getElementById('train_pie');
    var myChart = echarts.init(dom,  {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  tooltip: {
    trigger: 'item'
  },
  // legend: {
  //   top: '5%',
  //   left: 'center'
  // },
  series: [
    {
      name: '各种出身的妖怪占比',
      type: 'pie',
      radius: ['50%', '85%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      // label: {
      //   show: true,
      //   formatter(param) {
      //     // correct the percentage
      //     return param.name + ' (' + param.percent * 2 + '%)';
      //   },
      // },
      emphasis: {
        label: {
          show: true,
          fontSize: 36,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: true
      },
      data: [
        { value: 66.7, name: '无背景' },
        { value: 18.5, name: '灵山背景' },
        { value: 5.6, name: '道家背景' },
        { value: 3.7, name: '神仙背景' },
        { value: 3.7, name: '坐骑下凡' },
        { value: 1.9, name: '宠物下凡' }
      ]
    }
  ],
  color:['#8B5A00', '#8B4513', '#cd6600', '#FF7F00', '#ff9933', '#FFA500', '#3ba272', '#96BFFF','#9a60b4','#e06343','#6bb6c7', '#8378EA','#37A2DA','#b08fd3','#49baa6','#3b9b64','#6bba49']
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}