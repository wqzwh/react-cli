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
      <div>
        <ul>
          <li>2222222</li>
        </ul>
      </div>
    );
  }
}

export default Module;
