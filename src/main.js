// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import wui from '../packages'
import App from './App'
import {router} from './router'
import store from './store'
import services from './utils/services'
import './assets/css/reset.scss'
import '../packages/__assets/css/wui.scss'

Vue.config.productionTip = false
Vue.use(wui)
Vue.use(services)

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
