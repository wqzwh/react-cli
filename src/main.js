import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/demo/index'

/**
 * 引入路由
 */
import Routers from '@/router/index'

ReactDOM.render(
    <Routers/>,
  document.getElementById('app')
);

