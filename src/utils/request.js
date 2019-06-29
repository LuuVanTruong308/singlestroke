import axios from 'axios'
import * as Api from './api'

export default function request(endpoint, methor, body, params) {
  return axios({
      method: methor,
      url: `${Api.api}/${endpoint}`,
      data: body,
      params: params,
  }).catch(err => {
      alert(err);
  });
}