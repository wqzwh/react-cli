import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHashHistory } from 'history'
import { store } from './store/index'

/**
 * 引入路由
 */
import Routers from '@/router/index'
const history = syncHistoryWithStore(createHashHistory(), store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routers />
    </Router>
  </Provider>,
  document.getElementById('app')
)
