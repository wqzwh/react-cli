import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
require('@/assets/style/css.css')
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

