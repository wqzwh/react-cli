import * as aTypes from './actionTypes'

// 创建action函数
export function setLogin(info) {
  return {
    type: aTypes.SET_LOGIN,
    info
  }
}
