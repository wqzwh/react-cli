import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../../store/action';
import Module from './module/index';

import '../../assets/views/demo.less';

class App extends Component {
  render() {
    const {dispatch} = this.props
    return (
      <div>
        <Module 
        onSetLoginClick={text =>
          dispatch(types.setLogin(text))
        }/>
      </div>
    );
  }
}

export default connect()(App);
