import request from '../utils/request'

export const getInfor = () => {
  return request('home','GET', null)
}