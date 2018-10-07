import { backen } from '@/path/path'
import axiosToken from '@/util/axiosToken'


/*查询活动*/
export function query(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'app/queryAct', params).then(data => {
      resolve(data)
    })
  })
}


/*查询单个活动*/
export function queryOne(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'app/queryOneActs', params).then(data => {
      resolve(data)
    })
  })
}


/*查询我的活动*/
export function queryMyAct(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'app/queryMyAct', params).then(data => {
      resolve(data)
    })
  })
}


/*报名活动*/
export function joinAct(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'app/joinAct', params).then(data => {
      resolve(data)
    })
  })
}
