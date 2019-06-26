import '@/styles/main.scss' // global css

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vuetify from 'vuetify'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(Vuetify, {
 iconfont: 'fa'
})

//map
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  mounted() {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1400
    })
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
