import { backen } from '@/path/path'
import axiosToken from '@/util/axiosToken'


/*所有的频道*/
export function classificationQueryAll(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'classification/queryAll', params).then(data => {
      resolve(data)
    })
  })
}


/*查询圈子列表*/
export function classificationQueryByIf(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'classification/queryByIf', params).then(data => {
      resolve(data)
    })
  })
}
