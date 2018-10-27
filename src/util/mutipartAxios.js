import * as axios from 'axios'
import Qs from 'qs'
import { getCookie, setCookie } from '@/util/cookie'

let options = {
  headers: {
    'Content-Type': 'multipart/form-data',
    "access-token": sessionStorage.getItem("tooken"),
  },
}

export default axios.create(options)
