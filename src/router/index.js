import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Container from '@/components/container/container'
import Index from '@/views/index/index'
class Routers extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path='/' render={() => <Index />} />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default Routers
