import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../../store/action';
// import Module from './module/index';
import Header from '@/components/header/index';
import Banner from './module/banner/index';

import '@/assets/views/index.less';

class App extends Component {
  render() {
    const {dispatch} = this.props
    return (
      <div id="j-bd">
        <div className="g-row m-index">
          <div className="m-hd">
            <Header/>
          </div>
        </div>
        <Banner/>
        {/* <Module 
        onSetLoginClick={text =>
          dispatch(types.setLogin(text))
        }/> */}
      </div>
    );
  }
}

export default connect()(App);
