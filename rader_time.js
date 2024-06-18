function draw_radertime() {
	var dom = document.getElementById('rader_time');
    var myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  color: ['#56A3F1', '#FF917C'],
  // title: {
  //   text: 'Customized Radar Chart'
  // },
  title: {
              text:'数据来源：UIC. ATLAS High-Speed Rail 2022[R]',
              left: '75%',
              top: '0%',
              textStyle:{
                fontSize:12,
                fontWeight:'normal',
                color:'grey'
            }
            },
  legend: {
    // textStyle:{
    //   fontWeight:'bloder',
    //   fontSize:20
    // }
  },
  tooltip: {},
  radar: [
    {
      indicator: [
        { text: '北京-->哈尔滨' },
        { text: '北京-->西安' },
        { text: '北京-->广州' },
        { text: '北京-->上海' },
        { text: '北京-->天津' }
      ],
      center: ['20%', '20%'],
      radius: 90,
      startAngle: 90,
      splitNumber: 3,
      shape: 'circle',
      axisName: {
        formatter: '{value}',
        color: '#FFFFFF'
      },
      axisLabel: { show: true },
    },
    {
      indicator: [
        { text: '马德里-->巴塞罗那' },
        { text: '马德里-->塞维利亚' },
        { text: '马德里-->马拉加' },
        { text: '马德里-->阿利坎特' },
        { text: '马德里-->巴伦西亚' }
      ],
      center: ['20%', '52.5%'],
      radius: 90,
      startAngle: 90,
      splitNumber: 3,
      shape: 'circle',
      axisName: {
        formatter: '{value}',
        color: '#FFFFFF'
      },
      axisLabel: { show: true },
    },
    {
      indicator: [
        { text: '巴黎-->布鲁塞尔' },
        { text: '巴黎-->伦敦' },
        { text: '巴黎-->波尔多' },
        { text: '巴黎-->马赛' },
        { text: '巴黎-->斯特拉斯堡' }
      ],
      center: ['20%', '85%'],
      radius: 90,
      startAngle: 90,
      splitNumber: 3,
      shape: 'circle',
      axisName: {
        formatter: '{value}',
        color: '#FFFFFF'
      },
      axisLabel: { show: true },
    },
    {
      indicator: [
        { text: '罗马-->米兰' },
        { text: '罗马-->都灵' },
        { text: '罗马-->那不勒斯' },
        { text: '罗马-->佛罗伦萨' },
        { text: '罗马-->博洛尼亚' }
      ],
      center: ['50%', '20%'],
      radius: 90,
      startAngle: 90,
      splitNumber: 3,
      shape: 'circle',
      axisName: {
        formatter: '{value}',
        color: '#FFFFFF'
      },
      axisLabel: { show: true },
    },
    {
      indicator: [
        { text: '法兰克福-->阿姆斯特丹' },
        { text: '法兰克福-->布鲁塞尔' },
        { text: '法兰克福-->苏黎世' },
        { text: '法兰克福-->慕尼黑' },
        { text: '法兰克福-->柏林' }
      ],
      center: ['50%', '52.5%'],
      radius: 90,
      startAngle: 90,
      splitNumber: 3,
      shape: 'circle',
      axisName: {
        formatter: '{value}',
        color: '#FFFFFF'
      },
      axisLabel: { show: true },
    },
    {
      indicator: [
        { text: '伦敦-->阿姆斯特丹' },
        { text: '伦敦-->布鲁塞尔' },
        { text: '伦敦-->巴黎' },
        { text: '伦敦-->马赛' },
        { text: '伦敦-->科隆' }
      ],
      center: ['50%', '85%'],
      radius: 90,
      startAngle: 90,
      splitNumber: 3,
      shape: 'circle',
      axisName: {
        formatter: '{value}',
        color: '#FFFFFF'
      },
      axisLabel: { show: true },
      // splitArea: {
      //   areaStyle: {
      //     color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
      //     shadowColor: 'rgba(0, 0, 0, 0.2)',
      //     shadowBlur: 10
      //   }
      // },
      // axisLine: {
      //   lineStyle: {
      //     color: 'rgba(211, 253, 250, 0.8)'
      //   }
      // },
      // splitLine: {
      //   lineStyle: {
      //     color: 'rgba(211, 253, 250, 0.8)'
      //   }
      // }
    },
    {
      indicator: [
        { text: '布鲁塞尔-->阿姆斯特丹' },
        { text: '布鲁塞尔-->伦敦' },
        { text: '布鲁塞尔-->里尔' },
        { text: '布鲁塞尔-->科隆' },
        { text: '布鲁塞尔-->巴黎' }
      ],
      center: ['80%', '20%'],
      radius: 90,
      startAngle: 90,
      splitNumber: 3,
      shape: 'circle',
      axisName: {
        formatter: '{value}',
        color: '#FFFFFF'
      },
      axisLabel: { show: true },
      // splitArea: {
      //   areaStyle: {
      //     color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
      //     shadowColor: 'rgba(0, 0, 0, 0.2)',
      //     shadowBlur: 10
      //   }
      // },
      // axisLine: {
      //   lineStyle: {
      //     color: 'rgba(211, 253, 250, 0.8)'
      //   }
      // },
      // splitLine: {
      //   lineStyle: {
      //     color: 'rgba(211, 253, 250, 0.8)'
      //   }
      // }
    },
    {
      indicator: [
        { text: '苏黎世-->法兰克福' },
        { text: '苏黎世-->巴黎' },
        { text: '苏黎世-->米兰' },
        { text: '苏黎世-->慕尼黑' },
        { text: '苏黎世-->斯图加特' }
      ],
      center: ['80%', '52.5%'],
      radius: 90,
      startAngle: 90,
      splitNumber: 3,
      shape: 'circle',
      axisName: {
        formatter: '{value}',
        color: '#FFFFFF'
      },
      axisLabel: { show: true },
      // splitArea: {
      //   areaStyle: {
      //     color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
      //     shadowColor: 'rgba(0, 0, 0, 0.2)',
      //     shadowBlur: 10
      //   }
      // },
      // axisLine: {
      //   lineStyle: {
      //     color: 'rgba(211, 253, 250, 0.8)'
      //   }
      // },
      // splitLine: {
      //   lineStyle: {
      //     color: 'rgba(211, 253, 250, 0.8)'
      //   }
      // }
    },
    {
      indicator: [
        { text: '东京-->新大阪' },
        { text: '东京-->北斗' },
        { text: '东京-->秋田' },
        { text: '东京-->山形' },
        { text: '东京-->金泽' }
      ],
      center: ['80%', '85%'],
      radius: 90,
      startAngle: 90,
      splitNumber: 3,
      shape: 'circle',
      axisName: {
        formatter: '{value}',
        color: '#FFFFFF'
      },
      axisLabel: { show: true },
      // splitArea: {
      //   areaStyle: {
      //     color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
      //     shadowColor: 'rgba(0, 0, 0, 0.2)',
      //     shadowBlur: 10
      //   }
      // },
      // axisLine: {
      //   lineStyle: {
      //     color: 'rgba(211, 253, 250, 0.8)'
      //   }
      // },
      // splitLine: {
      //   lineStyle: {
      //     color: 'rgba(211, 253, 250, 0.8)'
      //   }
      // }
    }
  ],
  series: [
    {
      type: 'radar',
      radarIndex: 0,
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [12.5, 12.5, 21, 14, 1.5],
          name: '高铁开通前用时(小时)'
        },
        {
          value: [4.9, 4.1, 7.6, 4.2, 0.5],
          name: '高铁开通后用时(小时)',
          // areaStyle: {
          //   color: 'rgba(255, 228, 52, 0.6)'
          // }
        }
      ]
    },
    {
      type: 'radar',
      radarIndex: 1,
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [7.5, 5.8, 7.4, 4.3, 4.5],
          name: '高铁开通前用时(小时)'
        },
        {
          value: [2.5, 2.4, 2.3, 2, 1.7],
          name: '高铁开通后用时(小时)',
          // areaStyle: {
          //   color: 'rgba(255, 228, 52, 0.6)'
          // }
        }
      ]
    },
    {
      type: 'radar',
      radarIndex: 2,
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [2.5, 7.3, 4, 4.7, 3.8],
          name: '高铁开通前用时(小时)'
        },
        {
          value: [1.3, 2.4, 2, 3.2, 1.7],
          name: '高铁开通后用时(小时)',
          // areaStyle: {
          //   color: 'rgba(255, 228, 52, 0.6)'
          // }
        }
      ]
    },
    {
      type: 'radar',
      radarIndex: 3,
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [5.2, 6.6, 1.9, 2.6, 3.4],
          name: '高铁开通前用时(小时)'
        },
        {
          value: [2.5, 3.1, 1, 1.2, 1.7],
          name: '高铁开通后用时(小时)',
          // areaStyle: {
          //   color: 'rgba(255, 228, 52, 0.6)'
          // }
        }
      ]
    },
    {
      type: 'radar',
      radarIndex: 4,
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [5.2, 5.4, 5, 3.9, 7.6],
          name: '高铁开通前用时(小时)'
        },
        {
          value: [3.8, 2.8, 3.8, 3.3, 3.7],
          name: '高铁开通后用时(小时)',
          // areaStyle: {
          //   color: 'rgba(255, 228, 52, 0.6)'
          // }
        }
      ]
    },
    {
      type: 'radar',
      radarIndex: 5,
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [12.5, 6.3, 6.8, 12.5, 13.7],
          name: '高铁开通前用时(小时)'
        },
        {
          value: [3.7, 2, 2.3, 6.5, 5.4],
          name: '高铁开通后用时(小时)',
          // areaStyle: {
          //   color: 'rgba(255, 228, 52, 0.6)'
          // }
        }
      ]
    },
    {
      type: 'radar',
      radarIndex: 6,
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [2.7, 8.3, 1.8, 2.5, 2.5],
          name: '高铁开通前用时(小时)'
        },
        {
          value: [1.8, 2, 0.6, 1.6, 1.3],
          name: '高铁开通后用时(小时)',
          // areaStyle: {
          //   color: 'rgba(255, 228, 52, 0.6)'
          // }
        }
      ]
    },
    {
      type: 'radar',
      radarIndex: 7,
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [5, 8.9, 4.3, 4.3, 3],
          name: '高铁开通前用时(小时)'
        },
        {
          value: [3.8, 4, 3.4, 3.6, 2.9],
          name: '高铁开通后用时(小时)',
          // areaStyle: {
          //   color: 'rgba(255, 228, 52, 0.6)'
          // }
        }
      ]
    },
    {
      type: 'radar',
      radarIndex: 8,
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [6.5, 13, 7.7, 4.6, 6.5],
          name: '高铁开通前用时(小时)'
        },
        {
          value: [2.2, 4, 3.6, 2.5, 2.4],
          name: '高铁开通后用时(小时)',
          // areaStyle: {
          //   color: 'rgba(255, 228, 52, 0.6)'
          // }
        }
      ]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}