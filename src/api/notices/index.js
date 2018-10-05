import { backen } from '@/path/path'
import axiosToken from '@/util/axiosToken'


/*查询公告*/
export function query(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'notices/queryAll', params).then(data => {
      resolve(data)
    })
  })
}


/*查询单个公告*/
export function queryOne(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'notices/queryOne', params).then(data => {
      resolve(data)
    })
  })
}
