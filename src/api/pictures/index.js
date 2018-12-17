import { backen } from '@/path/path'
import axiosToken from '@/util/axiosToken'


/*查询轮播图列表*/
export function picturesQuery(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'pictures/queryAll', params).then(data => {
      resolve(data)
    })
  })
}
