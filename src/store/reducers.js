import _ from 'lodash'
import { combineReducers } from 'redux'
import * as aTypes from './actionTypes'
import State from './state'

// 建立纯函数
function setLogin(state = State, action) {
  switch (action.type) {
    case aTypes.SET_LOGIN:
      return _.assign({}, state, {
        info: action.info
      })
    default:
      return state
  }
}

const loginApp = combineReducers({
  setLogin
})

export default loginApp
