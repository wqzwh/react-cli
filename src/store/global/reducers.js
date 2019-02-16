import actionTypes from '../actionTypes'
import { createReducer } from '../lib'

const { SET_CURRENT, SET_MENUINFO } = actionTypes
const initialState = {
  currentUser: '',
  menuInfo: []
}

const reducer = createReducer(initialState, {
  [SET_CURRENT]: (state, { user }) => {
    return { ...state, currentUser: user }
  },
  [SET_MENUINFO]: (state, { menuInfo }) => {
    return { ...state, menuInfo }
  }
})

export default reducer
