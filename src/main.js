// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router';
import store from './store';
// import VueECharts from 'vue-echarts/components/ECharts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SvgIcon from '../src/components/Svg-Icon';
import './common/icons'; // 有了这个就不用再在使用scg-icon的文件中import svg资源了
axios.defaults.baseURL = 'http://proserver:3000';
Vue.prototype.axios = axios;
// Vue.use(VueECharts)
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.component('svg-icon', SvgIcon);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
