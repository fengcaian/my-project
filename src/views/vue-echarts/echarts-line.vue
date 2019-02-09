<template>
  <div ref="chartContainer">
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
    const colors = ['#5793f3', '#d14a61', '#675bba'];
    return {
      colors
    };
  },
  computed: {
    options () { // 异步获取数据更新options
      return {
        color: this.colors,
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
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
          data: ['2015 降水量', '2016 降水量']
        },
        grid: {
          top: 70,
          right: '1%',
          bottom: 50,
          left: '3%'
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            boundaryGap: false, // 折线从0开始
            axisLine: {
              onZero: false,
              lineStyle: {
                color: this.colors[1]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return `降水量  ${params.value}${params.seriesData.length ? '：' + params.seriesData[0].data : ''}`;
                }
              }
            },
            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: this.colors[0]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return `降水量  ${params.value}${params.seriesData.length ? '：' + params.seriesData[0].data : ''}`;
                }
              }
            }
            // data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
          }
        ],
        yAxis: [
          {
            type: 'value',
            minInterval: 1, // 纵坐标只能为整数
            splitLine: { // 分割线
              show: true
            }
          }
        ],
        series: [
          {
            name: '2015 降水量',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '2016 降水量',
            type: 'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
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
