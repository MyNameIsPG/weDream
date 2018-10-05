import { backen } from '@/path/path'
import axiosToken from '@/util/axiosToken'


/*登录*/
export function wxlogin(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'user/wxlogin', params).then(data => {
      resolve(data)
    })
  })
}
