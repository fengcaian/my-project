<template>
  <div ref="chartContainer" style="width: 100%; height: 100%">
    <chart ref="chart" :options="options"></chart>
  </div>
</template>

<script>
import Chart from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/extension/dataTool' // 线的标示

export default {
  name: 'app',
  components: {
    Chart
  },
  data () {
    return {
      options: {
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
        legend: {
          data: ['政策法规', '经办规程', '业务场景模拟', '常见问题']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        // x轴显示
        xAxis: {
          data: ['公共管理业务', '基金财务业务', '内控监督业务', '养老待遇业务', '医疗待遇业务', '工伤待遇业务', '失业待遇业务', '生育待遇业务'],
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
            data: [1, 2, 3, 4, 2, 3, 3],
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
      }
    }
  },
  mounted () {
    const that = this
    that.$refs.chart.resize({width: this.$refs.chartContainer.offsetWidth})
    window.onresize = () => { //  根据窗口大小调整大小
      that.$refs.chart.resize({width: 200})
    }
  }
}
</script>
<style scoped>
  /*.echarts {
    width: 100% !important;
  }*/
</style>
