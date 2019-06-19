import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Invitation from './views/Invitation/Invitation.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/invitation',
      name: 'invitation',
      component: Invitation
    },
  ]
})
