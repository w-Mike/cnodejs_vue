import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import dayjs from 'dayjs'

Vue.config.productionTip = false
Vue.prototype.$dayjs=dayjs

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
