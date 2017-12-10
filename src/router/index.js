import React, { Component } from 'react'
import {
  Route,
  Switch,
  HashRouter as Router,
  Redirect
} from 'react-router-dom'

import Demo from '@/views/demo/index'
import Button from '@/views/button/index'

class Routers extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/demo" component={Demo} />
          <Route path="/button" component={Button} />
        </Switch>
      </Router>
    )
  }
}

export default Routers
