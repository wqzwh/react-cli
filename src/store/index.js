import { createStore } from 'redux'
import loginApp from './reducers'
let store = createStore(loginApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store