import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import HelloWorld from '@/components/HelloWorld'
import SvgCharts from '@/components/SvgCharts'
import Dialog from '@/components/Dialog'
import Table from '@/components/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '',
        component: resolve => require(['@/components/Search2'], resolve)
      }, {
        path: '/element-search',
        name: 'search',
        component: resolve => require(['@/components/Search'], resolve)
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
        component: resolve => require(['@/components/test-axios-timeout'], resolve)
      },
      {
        path: '/popover',
        name: 'popover',
        component: resolve => require(['@/components/popover'], resolve)
      }]
    }
  ]
})
