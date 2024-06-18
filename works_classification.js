 function draw_works_classification() {
var dom = document.getElementById("works_classification");
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    const colors = ['#8B5A00', '#8B4513', '#cd6600', '#FF7F00', '#ff9933', '#FFA500', '#3ba272', '#96BFFF','#9a60b4','#e06343','#6bb6c7', '#8378EA','#37A2DA','#b08fd3','#49baa6','#3b9b64','#6bba49'];
const bgColor = '#ffcc66';
const itemStyle = {
  star5: {
    color: colors[0]
  },
  star4: {
    color: colors[1]
  },
  star3: {
    color: colors[2]
  },
  star2: {
    color: colors[3]
  }
};
const data = [
  {
    name: '国内',
    itemStyle: {
      color: colors[0]
    },
    children: [
      {
        name: '中国大陆',
        value:33,
        children: [
          {
            name: '电影',
            value:14,
            children: [
              {
                name: '大闹天宫',
              },
              {
                name: '火焰山',
              },
              {
                name: '金箍棒传奇',
              },
              {
                name: '金猴降妖',
              },
              {
                name: '盘丝洞',
              },
              {
                name: '人参果',
              },
              {
                name: '孙悟空三打白骨精',
              },
              {
                name: '铁扇公主',
              },
              {
                name: '悟空大战二郎神',
              },
              {
                name: '西游记之大圣归来',
              },
              {
                name: '西游记之三件宝贝',
              },
              {
                name: '西游记之锁妖封魔塔',
              },
              {
                name: '小戏骨:西游记之红孩儿',
              },
              {
                name: '真假美猴王',
              }
            ]
          },
          {
            name: '剧集',
            value:18,
            children: [
              {
                name: '春光灿烂猪八戒',
              },
              {
                name: '夺宝幸运星',
              },
              {
                name: '夺宝幸运星2',
              },
              {
                name: '夺宝幸运星3',
              },
              {
                name: '福星高照猪八戒',
              },
              {
                name: '红孩儿',
              },
              {
                name: '美猴王',
              },
              {
                name: '填上掉下个猪八戒',
              },
              {
                name: '天真派:西游记',
              },
              {
                name: '西游记故事',
              },
              {
                name: '西游记后传',
              },
              {
                name: '西游记续集',
              },
              {
                name: '喜气洋洋猪八戒',
              },
              {
                name: '西游记1986',
              },
              {
                name: '西游记1999',
              },
              {
                name: '西游记2010电视剧',
              },
              {
                name: '西游记2010动画片',
              },
              {
                name: '西游记2012',
              },
            ]
          },
          {
            name: '戏曲',
            value:1,
            children: [
              {
                name: '火焰山',
              }
            ]
          }
        ]
      },
      {
        name: '中国香港',
        children: [
          {
            name: '电影',
            value:5,
            children: [
              {
                name: '红孩儿'
              },
              {
                name: '女儿国'
              },
              {
                name: '盘丝洞'
              },
              {
                name: '铁扇公主'
              },
              {
                name: '西游记'
              },
            ]
          },
          {
            name: '剧集',
            value:2,
            children: [
              {
                name: '西游记'
              },
              {
                name: '天地争霸美猴王'
              }
            ]
          }
        ]
      },
      {
        name: '中国台湾',
        children: [
          {
            name: '电影',
            value:2,
            children: [
              {
                name: '红孩儿大话火焰山'
              },
              {
                name: '新孙悟空72变'
              },
            ]
          }
        ]
      },
      {
        name: '大陆/香港',
        children: [
          {
            name: '电影',
            value:8,
            children: [
              {
                name: '大话西游3'
              },
              {
                name: '大话西游之大圣娶亲'
              },
              {
                name: '大话西游之月光宝盒'
              },
              {
                name: '西行平妖'
              },
              {
                name: '西游记女儿国'
              },
              {
                name: '西游记之大闹天宫'
              },
              {
                name: '西游记之孙悟空三打白骨精'
              },
              {
                name: '西游降魔篇'
              },
            ]
          }
        ]
      }
    ]
  },
  {
    name: '国外',
    value:10,
    itemStyle: {
      color: colors[1]
    },
    children: [
      {
        name: '韩国',
        value:3,
        children: [
          {
            name: '电影',
            children: [
              {
                name: '西游记归来'
              }
            ]
          },
          {
            name: '剧集',
            children: [
              {
                name: '百变孙悟空'
              },
              {
                name: '花游记'
              }
            ]
          }
        ]
      },
      {
        name: '日本',
        value:7,
        children: [
          {
            name: '电影',
            children: [
              {
                name: '孙悟空'
              },
              {
                name: '西游记1960'
              },
              {
                name: '西游记1993'
              },
              {
                name: '西游记2007'
              },
            ]
          },
          {
            name: '剧集',
            children: [
              {
                name: '帕塔利洛西游记'
              },
              {
                name: '孙悟空大冒险'
              },
              {
                name: '西游记'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '多国',
    value:3,
    itemStyle: {
      color: colors[2]
    },
    children: [
      {
        name: '中/加',
        // value:1,
        children: [
          {
            name: '电影',
            children: [
              {
                name: '唐皇游地府'
              }
            ]
          }
        ]
      },
      {
        name: '中/美',
        // value:1,
        children: [
          {
            name: '电影',
            children: [
              {
                name: '功夫之王'
              }
            ]
          }
        ]
      },
      {
        name: '美/德/捷',
        // value:1,
        children: [
          {
            name: '剧集',
            children: [
              {
                name: '齐天大圣'
              }
            ]
          }
        ]
      }
    ]
  }
];
for (let j = 0; j < data.length; ++j) {
  let level1 = data[j].children;
  for (let i = 0; i < level1.length; ++i) {
    let block = level1[i].children;
    let bookScore = [];
    let bookScoreId;
    for (let star = 0; star < block.length; ++star) {
      let style = (function (name) {
        switch (name) {
          case '电影':
            bookScoreId = 0;
            return itemStyle.star5;
          case '剧集':
            bookScoreId = 1;
            return itemStyle.star4;
          case '戏曲':
            bookScoreId = 2;
            return itemStyle.star3;
        }
      })(block[star].name);
      block[star].label = {
        color: style.color,
        downplay: {
          opacity: 0.5
        }
      };
      if (block[star].children) {
        style = {
          opacity: 1,
          color: style.color
        };
        block[star].children.forEach(function (book) {
          book.value = 1;
          book.itemStyle = style;
          book.label = {
            color: style.color
          };
          let value = 1;
          if (bookScoreId === 0 || bookScoreId === 3) {
            value = 5;
          }
          if (bookScore[bookScoreId]) {
            bookScore[bookScoreId].value += value;
          } else {
            bookScore[bookScoreId] = {
              color: colors[bookScoreId],
              value: value
            };
          }
        });
      }
    }
    level1[i].itemStyle = {
      color: data[j].itemStyle.color
    };
  }
}
option = {
  backgroundColor: bgColor,
  color: colors,
  series: [
    {
      type: 'sunburst',
      center: ['50%', '48%'],
      data: data,
      sort: function (a, b) {
        if (a.depth === 1) {
          return b.getValue() - a.getValue();
        } else {
          return a.dataIndex - b.dataIndex;
        }
      },
      label: {
        rotate: 'radial',
        color: bgColor
      },
      itemStyle: {
        borderColor: bgColor,
        borderWidth: 2
      },
      levels: [
        {},
        {
          r0: 0,
          r: 40,
          label: {
            rotate: 0
          }
        },
        {
          r0: 40,
          r: 105
        },
        {
          r0: 115,
          r: 140,
          itemStyle: {
            shadowBlur: 2,
            shadowColor: colors[2],
            color: 'transparent'
          },
          label: {
            rotate: 'tangential',
            fontSize: 10,
            color: colors[0]
          }
        },
        {
          r0: 140,
          r: 145,
          itemStyle: {
            shadowBlur: 80,
            shadowColor: colors[0]
          },
          label: {
            position: 'outside',
            textShadowBlur: 5,
            textShadowColor: '#333'
          },
          downplay: {
            label: {
              opacity: 0.5
            }
          }
        }
      ]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  };