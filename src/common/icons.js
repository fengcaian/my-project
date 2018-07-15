import Vue from 'vue'
import SvgIcon from '../../src/components/Svg-Icon'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().forEach(requireContext)
const req = require.context('../assets/svg', false, /\.svg$/)

requireAll(req)
