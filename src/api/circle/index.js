import { backen } from '@/path/path'
import axiosToken from '@/util/axiosToken'


/*查询圈子列表*/
export function circleQuery(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'circle/query', params).then(data => {
      resolve(data)
    })
  })
}


/*查询圈子详情*/
export function circleQueryOne(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'circle/queryOne', params).then(data => {
      resolve(data)
    })
  })
}


/*查询帖子列表*/
export function postQuery(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'post/query', params).then(data => {
      resolve(data)
    })
  })
}

/*查询帖子详情*/
export function postQueryOne(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'post/queryOne', params).then(data => {
      resolve(data)
    })
  })
}

/*查询帖子详情*/
export function postAdd(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'post/add', params).then(data => {
      resolve(data)
    })
  })
}

/*点赞*/
export function postThumb(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'post/thumb', params).then(data => {
      resolve(data)
    })
  })
}

/*发布评论*/
export function circlePostCommentAdd(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'circlePostComment/add', params).then(data => {
      resolve(data)
    })
  })
}

/*查询评论列表*/
export function circlePostCommentQueryAll(params) {
  return new Promise((resolve, reject) => {
    axiosToken.post(backen + 'circlePostComment/queryAll', params).then(data => {
      resolve(data)
    })
  })
}
