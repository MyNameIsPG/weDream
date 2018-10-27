import * as axios from 'axios'
import { getCookie, setCookie } from '@/util/cookie'
import Qs from 'qs'

let options = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    "access-token": sessionStorage.getItem("tooken"),
  },
}

export default axios.create(options)
