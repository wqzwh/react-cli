import React, { Component } from 'react';

class FloorOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="m-indexFloor">
        <header className="hd">
          <a className="more">
            <span>品牌制造商直供</span>
            <i className="u-icon u-icon-go2 icon"></i>
          </a>
        </header>
        <div className="m-indexManufacturersSupplying">
          <ul className="list">
            <li className="item">
              <a>
                <div className="cnt">
                  <h4 className="title">Adidas制造商</h4>
                  <div>
                    <span className="price1">35</span>
                    <span className="price2">元起</span>
                  </div>
                </div>
                <img src="http://yanxuan.nosdn.127.net/2fc924ae44eb0a37dda18690368851af.png?imageView&amp;thumbnail=355x0&amp;quality=65" /></a>
              </li>
              <li className="item">
                <a>
                  <div className="cnt">
                    <h4 className="title">UGG制造商</h4>
                    <div>
                      <span className="price1">129</span>
                      <span className="price2">元起</span>
                    </div>
                  </div>
                  <img src="http://yanxuan.nosdn.127.net/84d16a100eb7997ff106c48932268a4e.png?imageView&amp;thumbnail=355x0&amp;quality=65" />
                </a>
              </li>
              <li className="item">
                <a>
                  <div className="cnt">
                    <h4 className="title">新秀丽制造商</h4>
                    <div>
                      <span className="price1">49</span>
                      <span className="price2">元起</span>
                    </div>
                  </div>
                  <img src="http://yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png?imageView&amp;thumbnail=355x0&amp;quality=65" />
                </a>
              </li>
              <li className="item">
                <a>
                  <div className="cnt">
                    <h4 className="title">MUJI制造商</h4>
                    <div>
                      <span className="price1">12.9</span>
                      <span className="price2">元起</span>
                    </div>
                  </div>
                  <img src="http://yanxuan.nosdn.127.net/4bdc2ae0a30c4a10ea95876a67c695bc.png?imageView&amp;thumbnail=355x0&amp;quality=65" />
                </a>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}
export default FloorOne;
