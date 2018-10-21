import { backen } from '@/path/path'
import axiosToken from '@/util/axiosToken'


/*查询商家*/
export function merchantQueryAll(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'merchant/queryAll', params).then(data => {
      resolve(data)
    })
  })
}


/*查询单个公告*/
export function queryOne(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'merchant/queryOne', params).then(data => {
      resolve(data)
    })
  })
}
