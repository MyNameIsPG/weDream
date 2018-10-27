import { backen } from '@/path/path'
import axiosToken from '@/util/axiosToken'
import axiosTokenGet from '@/util/axiosTokenGet'


/*登录*/
export function wxlogin(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'user/wxlogin', params).then(data => {
      resolve(data)
    })
  })
}



/*登录*/
export function gzhLogin(params) {
  return new Promise((resolve, reject) => {
    axiosTokenGet.get(backen + 'user/gzhLogin', {params: params}).then(data => {
      resolve(data)
    })
  })
}


/*获取用户信息*/
export function getUser(params) {
  return new Promise((resolve, reject) => {
    axiosTokenGet.get(backen + 'wx/getUser', {params: params}).then(data => {
      resolve(data)
    })
  })
}
