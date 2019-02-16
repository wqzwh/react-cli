import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import globalReducer from './global/reducers'

const reducers = combineReducers({
  globalData: globalReducer,
  routing: routerReducer
})
export default reducers
