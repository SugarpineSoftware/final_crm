import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Customers from './views/customers'
import Projects from './views/projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },

  ]
})
