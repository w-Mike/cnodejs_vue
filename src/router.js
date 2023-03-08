import VueRouter from 'vue-router'
import Vue from 'vue'
import ncHome from '@/view/ncHome'
Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: ncHome
  },
]
export default new VueRouter({
  routes
})