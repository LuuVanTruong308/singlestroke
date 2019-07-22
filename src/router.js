import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Invitation from './views/Invitation/Invitation.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/wedding-detail',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'invitation',
      component: Invitation
    },
  ]
})
