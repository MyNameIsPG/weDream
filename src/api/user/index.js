import { backen } from '@/path/path'
import axiosToken from '@/util/axiosToken'
import axiosTokenGet from '@/util/axiosTokenGet'


/*获取短信*/
export function verify(params) {
  return new Promise((resolve, reject) => {
    axiosTokenGet.get(backen + 'people/verify', {params: params}).then(data => {
      resolve(data)
    })
  })
}


/*单个查询*/
export function update(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'people/update', params).then(data => {
      resolve(data)
    })
  })
}


/*单个查询*/
export function queryOne(params) {
  return new Promise((resolve, reject) => {
    axiosTokenGet.get(backen + 'people/queryOne', {params: params}).then(data => {
      resolve(data)
    })
  })
}
