import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Layout from '@/views/layout/index.vue'


Vue.use(VueRouter)

//路由配置表
const routes = [
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/',
    name:'layout',
    component:Layout,
    children:[
      {
        path:'',//path为空，会作为默认子路由
        name:'home',
        component:Home
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
