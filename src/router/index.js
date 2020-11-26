import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Layout from '@/views/layout/index.vue'
import Article from '@/views/article'


Vue.use(VueRouter)

//路由配置表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '',//path为空，会作为默认子路由
        name: 'home',
        component: Home
      },
      {
        path: '/article',
        name: 'article',
        component: Article
      },

    ]
  },

]

const router = new VueRouter({
  routes
})

// 路由导航守卫,vue.js官网,所有界面的导航都会经过这里
// to:要去的路哟界面信息
// from:从哪来的
// next:放行的方法
router.beforeEach((to, from, next) => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  // 如果访问的不是登录界面，则跳转到登录界面，如果登录了，进入首页
  if (to.path !== '/login') {
    if (user) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
