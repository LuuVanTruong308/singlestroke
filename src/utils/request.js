import axios from 'axios'
import * as Api from './api'
// import Vue from 'vue'
// import VueAxios from 'vue-axios'
 
// Vue.use(VueAxios, axios)

export default function request(endpoint, methor, body) {
  return axios({
      method: methor,
      url: `${Api.api}/${endpoint}`,
      data: body
  }).catch(err => {
      alert(err);
  });
}