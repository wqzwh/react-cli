import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Service from './service'
class Module extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data:''
    };
  }

  componentDidMount(){
    Service.get().then((data)=>{
      // console.log(data)
    })
  }

  render() {
    const { store } = this.context
    return (
      <div className="center">
        <p className="p1">Ga-React-cli</p>
        <p className="p2">欢迎使用</p>
        <p>{store.getState().setLogin.info}</p>
        <button onClick={(e) => this.handleClick(e)}>
          setStore
        </button>
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onSetLoginClick('wangqiwangqi')
    this.setState({})
  }
}

Module.contextTypes = {
  store: PropTypes.object.isRequired
}

export default Module;
