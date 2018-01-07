import React, { Component } from 'react';
import Service from './service';

const Style = {
  innerStyle: {
    position:'relative',
    height:'100%',
    width:'100%',
    overflowX: 'auto'
  },
  listStyle: {
    transitionTimingFunction: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
    transitionDuration: '0ms',
    transform: 'translate(0px, 0px) translateZ(0px)'
  }
}


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabArray: []
    };
  }

  componentWillMount() {
    Service.get().then((data) => {
      this.setState({
        tabArray: data
      })
    })
  }
  
  tabRender() {
    return (
      this.state.tabArray.map((item,index) => (
        <div className={item.checked ? 'tab active' : 'tab'} key={index}>
          <span className="txt">{item.value}</span>
        </div>
      ))
    )
  }
  render() {
    return (
      <div className="m-indexHd">
        <div className="line">
          <a className="logo" href="/"></a>
          <div className="m-topSearchIpt ipt">
            <i className="icon"></i>
            <span className="placeholder">搜索商品, 共10364款好物</span>
          </div>
        </div>
        <div className="m-tabs scroll">
          <header>
            <div className="inner" style={Style.innerStyle}>
              <div className="list" style={Style.listStyle}>
              {this.tabRender()}
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
