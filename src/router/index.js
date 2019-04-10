import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Container from '@/components/container/container'
import LoadingComponent from '@/components/loading/index'

const Index = Loadable({
  loader: () => import('@/views/index/index'),
  loading: LoadingComponent
})

const NotFound = Loadable({
  loader: () => import('@/views/not-found/index'),
  loading: LoadingComponent
})

class Routers extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path='/' render={() => <Index />} />
            <Route render={() => <NotFound />} />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default Routers
