import VueRouter from 'vue-router'
import Vue from 'vue'
import NcHome from '@/view/ncHome'
import User from '@/view/user'


Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: NcHome
  },
  {
    name:'user',
    path:'user:id',
    component:User,
  }
]


export default new VueRouter({
  routes
})