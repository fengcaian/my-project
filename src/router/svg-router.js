const SvgCharts = r => require.ensure([], () => r(require('@/views/svg/svg-charts')), 'vue-echarts');
const svgRouter = [
  {
    path: '/svg-charts',
    name: 'svg-charts',
    component: SvgCharts
  }
];
export { svgRouter };
