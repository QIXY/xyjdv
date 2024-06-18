function draw_sankey_movie() {
var dom = document.getElementById('sankey_movie');
    var myChart = echarts.init(dom, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    // var ROOT_PATH = 'https://echarts.apache.org/examples';
    var option;

    myChart.showLoading();
$.get('./data/sankeydatamovie.json', function (data) {
  myChart.hideLoading();
  myChart.setOption(
    (option = {
      // title: {
      //   text: 'Sankey Diagram'
      // },
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'sankey',
          data: data.nodes,
          links: data.links,
          emphasis: {
            focus: 'adjacency'
          },
          levels: [
            {
              depth: 0,
              itemStyle: {
                color: '#FF7F00'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            },
            {
              depth: 1,
              itemStyle: {
                color: '#cd6600'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            },
            {
              depth: 2,
              itemStyle: {
                color: '#8B4513'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            },
            {
              depth: 3,
              itemStyle: {
                color: '#8B5A00'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            }
          ],
          lineStyle: {
            curveness: 0.5
          }
        }
      ]
    })
  );
});

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
}