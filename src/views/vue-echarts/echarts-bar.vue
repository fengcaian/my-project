<template>
  <div ref="chartContainer" style="width: 100%; height: 100%">
    <chart ref="chart" :options="options"></chart>
  </div>
</template>

<script>
import Chart from 'vue-echarts/components/ECharts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
import 'echarts/extension/dataTool'; // 线的标示

export default {
  name: 'app',
  components: {
    Chart
  },
  data () {
    return {};
  },
  computed: {
    options () {
      return {
        title: {
          text: '知识分类统计',
          textStyle: {
            color: '#436EEE',
            fontSize: 17
          }
        },
        // 鼠标触发提示数量
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['政策法规', '经办规程', '业务场景模拟', '常见问题']
        },
        grid: {
          left: '3%',
          right: '1%',
          bottom: '3%',
          containLabel: true
        },
        // x轴显示
        xAxis: {
          data: ['2018-4', '2018-5', '2018-6', '2018-7', '2018-8', '2018-9', '2018-10'],
          splitLine: {
            show: false
          }
        },
        // y轴显示
        yAxis: {
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: '政策法规',
            type: 'bar',
            stack: '业务', // 折叠显示
            data: [1, 4, 3, 4, 2, 3, 3],
            barWidth: 38,
            // 显示颜色
            itemStyle: {
              normal: {color: '#FFFF49'}
            }
          },
          {
            name: '经办规程',
            type: 'bar',
            stack: '业务',
            data: [6, 1, 3, 4, 2, 3, 3],
            barWidth: 38,
            itemStyle: {
              normal: {color: '#FF8849'}
            }
          },
          {
            name: '业务场景模拟',
            type: 'bar',
            stack: '业务',
            data: [1, 2, 3, 4, 2, 5, 3],
            barWidth: 38,
            itemStyle: {
              normal: {color: '#3FBB49'}
            }
          },
          {
            name: '常见问题',
            type: 'bar',
            stack: '业务',
            data: [1, 2, 3, 4, 2, 3, 3],
            barWidth: 38,
            itemStyle: {
              normal: {color: '#56C4A5'}
            }
          }
        ]
      };
    }
  },
  mounted () {
    this.resizeChart();
    const that = this;
    let resizeTag = true;
    window.onresize = () => { //  根据窗口大小调整大小
      if (resizeTag) {
        that.resizeChart();
        resizeTag = false;
        setTimeout(() => {
          resizeTag = true;
        }, 100);
      }
    };
  },
  methods: {
    resizeChart () {
      this.$refs.chart.resize({width: this.$refs.chartContainer.offsetWidth}); // this.$refs.chartContainer.offsetWidth
    }
  }
};
</script>
<style scoped>
  /*.echarts {
    width: 100% !important;
  }*/
</style>
