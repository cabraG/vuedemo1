import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Firstcomponent from '@/components/firstcomponents'
import login from '@/components/login'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/first',
      name: 'Firstcomponent',
      component: Firstcomponent
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld

    },
    {
      path: '/login',
      name: 'login',
      component: login

    }
  ]
})


router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.sessionStorage.removeItem('access-token')
    next()
  } else {
    let token = window.sessionStorage.getItem('access-token')
    if (!token) {
      next({ path: '/login' })
    } else {
      next()
    }
  }

})


export default router
