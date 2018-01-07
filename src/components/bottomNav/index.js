import React, { Component } from 'react';
import Service from './service';

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navArray: []
    };
    this.navRender = this.navRender.bind(this)
  }

  componentWillMount() {
    Service.get().then((data) => {
      this.setState({
        navArray: data
      })
    })
  }
  
  navRender() {
    return (
      this.state.navArray.map((item,index) => (
        <a className={item.checked ? 'item active' : 'item'}  href={item.href} key={index}>
          <i name="tabBar-index" className="u-icon u-icon-tabBar-index "></i>
          <span className="txt">{item.value}</span>
        </a>
      ))
    )
  }

  render() {
    return (
      <nav className="m-tabBar">
        {this.navRender()}
      </nav>
    );
  }
}

export default BottomNav;
