// import * as vueEChartsRouter from 'vue-echarts-router'
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import HelloWorld from '@/components/HelloWorld'
import SvgCharts from '@/components/SvgCharts'
// import Dialog from '@/components/Dialog'
// import Table from '@/components/table'
const Search2 = r => require.ensure([], () => r(require('@/components/Search2')), 'group-home1')
const Search = r => require.ensure([], () => r(require('@/components/Search')), 'group-home1')
const TestAxios = r => require.ensure([], () => r(require('@/components/test-axios-timeout')), 'group-home1')
const Popover = r => require.ensure([], () => r(require('@/components/popover')), 'group-home1')
const Table = r => require.ensure([], () => r(require('@/components/table')), 'group-home')
const Dialog = r => require.ensure([], () => r(require('@/components/Dialog')), 'group-home')
const VueEChartsTest = r => require.ensure([], () => r(require('@/components/vue-echarts-test')), 'group-home')
const EChartsBar = r => require.ensure([], () => r(require('@/view/vue-echarts/echarts-bar')), 'vue-echarts')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '',
        component: Search2 // resolve => require(['@/components/Search2'], resolve)
      },
      {
        path: '/vue-echart-bar',
        name: 'vue-echart-bar',
        component: EChartsBar
      },
      {
        path: '/element-search',
        name: 'search',
        component: Search
        /* children: [{
          path: '',
          component: resolve => require(['@/components/Search'], resolve)
        }] */
      },
      {
        path: '/svg-charts',
        name: 'svg-charts',
        component: SvgCharts
      },
      {
        path: '/dialog',
        name: 'dialog',
        component: Dialog
      },
      {
        path: '/table',
        name: 'table',
        component: Table
      },
      {
        path: '/hello_world',
        name: 'hello_world',
        component: HelloWorld
      },
      {
        path: '/test-axios',
        name: 'test-axios',
        component: TestAxios // resolve => require(['@/components/test-axios-timeout'], resolve)
      },
      {
        path: '/popover',
        name: 'popover',
        component: Popover
      },
      {
        path: '/vue-echarts-test',
        name: 'vue-echarts-test',
        component: VueEChartsTest
      }]
    }
  ]
})
