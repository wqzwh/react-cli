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
          <Route exact path="/" render={() => <Demo/>} />
          <Route path="/demo" render={() => <Demo/>} />
          <Route path="/wq" render={ () => <Button/>} />
        </Switch>
      </Router>
    )
  }
}

export default Routers
