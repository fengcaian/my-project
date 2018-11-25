const EChartsBar = r => require.ensure([], () => r(require('@/views/vue-echarts/echarts-bar')), 'vue-echarts');
const EChartsLine = r => require.ensure([], () => r(require('@/views/vue-echarts/echarts-line')), 'vue-echarts');
const vueEChartsRouter = [
  {
    path: '/vue-echart-bar',
    name: 'vue-echart-bar',
    component: EChartsBar
  },
  {
    path: '/vue-echart-line',
    name: 'vue-echart-line',
    component: EChartsLine
  }
];
export { vueEChartsRouter };
