import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div class="line">
        <a class="logo" href="/"></a>
        <div class="m-topSearchIpt ipt">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共10364款好物</span>
        </div>
      </div>
    );
  }
}

export default Header;
