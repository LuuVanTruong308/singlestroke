import '@/styles/main.scss' // global css

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as VueGoogleMaps from 'vue2-google-maps'
import Vuetify from 'vuetify'

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueMasonry from 'vue-masonry-css'

Vue.use(Vuetify, {
 iconfont: 'fa'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDPk6bz4dSUR5f-oL9bdz5lX0z5loZJuB0',
    libraries: 'places'
  }
});

Vue.use(VueMasonry)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  mounted() {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1200,
      anchorPlacement: 'top-center'
    })
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
