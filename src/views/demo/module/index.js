import React, { Component } from 'react';
import Service from './service'
class Module extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    Service.get().then((data)=>{
      console.log(data)
    })
  }

  render() {
    return (
      <div className="center">
        <p className="p1">Ga-React-cli</p>
        <p className="p2">欢迎使用</p>
      </div>
    );
  }
}

export default Module;
