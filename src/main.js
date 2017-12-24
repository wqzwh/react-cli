import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
// import App from './views/demo/index'
// import { createStore } from 'redux'
// import loginApp from './store/reducers'
// let store = createStore(loginApp)
/**
 * 引入路由
 */
import Routers from '@/router/index'

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('app')
);

