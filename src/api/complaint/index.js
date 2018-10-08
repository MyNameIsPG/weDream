import { backen } from '@/path/path'
import axiosToken from '@/util/axiosToken'


/*查询全部*/
export function complaintQuery(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'complaint/queryAll', params).then(data => {
      resolve(data)
    })
  })
}


/*查询单个*/
export function complaintQueryOne(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'complaint/queryOne', params).then(data => {
      resolve(data)
    })
  })
}


/*新增*/
export function complaintAdd(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'complaint/add', params).then(data => {
      resolve(data)
    })
  })
}


/*回复*/
export function complaintCommentQueryAll(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'complaintComment/queryAll', params).then(data => {
      resolve(data)
    })
  })
}
