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


/*根据upId查询并带出文章*/
export function classificationQueryAndArticle(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'classification/queryAndArticle', params).then(data => {
      resolve(data)
    })
  })
}


/*文章详情*/
export function articlesQuertOne(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'articles/queryOne', params).then(data => {
      resolve(data)
    })
  })
}


/*分页查询文章*/
export function articlesQueryAll(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'articles/queryAll', params).then(data => {
      resolve(data)
    })
  })
}
