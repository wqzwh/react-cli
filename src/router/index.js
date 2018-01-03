import React, { Component } from 'react'
import {
  Route,
  Switch,
  HashRouter as Router,
  Redirect
} from 'react-router-dom'

import Index from '@/views/index/index'

class Routers extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Index/>} />
          <Route path="/index" render={() => <Index/>} />
        </Switch>
      </Router>
    )
  }
}

export default Routers
