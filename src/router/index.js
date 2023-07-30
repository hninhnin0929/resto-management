import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Header from '@/components/Header'
import Add from '@/components/Add'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    }
  ]
})
