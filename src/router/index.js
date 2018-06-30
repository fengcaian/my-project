import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SvgCharts from '@/components/SvgCharts'
import Dialog from '@/components/Dialog'
import Table from '@/components/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [{
        path: 'element-search2',
        name: 'search2',
        component: resolve => require(['@/components/Search2'], resolve)
      }]
    },
    {
      path: '/element-search',
      name: 'search',
      component: resolve => require(['@/components/Search'], resolve)
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
    }
  ]
})
