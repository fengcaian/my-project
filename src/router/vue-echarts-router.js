const EChartsBar = r => require.ensure([], () => r(require('@/views/vue-echarts/echarts-bar')), 'vue-echarts')
export default [
  {
    path: '/vue-echart-bar',
    name: 'vue-echart-bar',
    component: EChartsBar
  }
]
