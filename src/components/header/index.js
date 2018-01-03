import React, { Component } from 'react';

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
        <div className="m-tabs   scroll">
          <header>
            <div className="inner" style={Style.innerStyle}>
              <div className="list" style={Style.listStyle}>
                <div className="tab active">
                  <span className="txt">推荐</span>
                </div>
                <div className="tab">
                  <span className="txt">居家</span>
                </div>
                <div className="tab">
                  <span className="txt">餐厨</span>
                </div>
                <div className="tab">
                  <span className="txt">配件</span>
                </div>
                <div className="tab">
                  <span className="txt">服装</span>
                </div>
                <div className="tab">
                  <span className="txt">电器</span>
                </div>
                <div className="tab">
                  <span className="txt">洗护</span>
                </div>
                <div className="tab">
                  <span className="txt">杂货</span>
                </div>
                <div className="tab">
                  <span className="txt">饮食</span>
                </div>
                <div className="tab">
                  <span className="txt">婴童</span>
                </div>
                <div className="tab">
                  <span className="txt">志趣</span>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
