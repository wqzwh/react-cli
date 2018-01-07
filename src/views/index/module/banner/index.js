import React, { Component } from 'react';

const img = require('../../../../assets/images/123.jpg')

const Style = {
  itemStyle: {
    backgroundImage:'url("http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png")'
  }
}

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="m-indexFloor">
        <div className="slideWarp">
          <div className="m-slide m-indexSlide">
            <div className="slide-con">
              <div className="swiper-container common-swiper-container swiper-container-horizontal">
                <div className="swiper-wrapper">
                  <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next">
                    <img src={img}/>
                  </div>
                </div>
                <div className="swiper-pagination common-swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                  <span className="swiper-pagination-bullet"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-indexServicePolicy">
          <ul className="g-grow">
            <li className="item">
              <a>
                <i className="u-icon u-icon-servicePolicy-index" style={Style.itemStyle}></i>
                <span className="text">网易自营品牌</span>
              </a>
            </li>
            <li className="item">
              <a>
                <i className="u-icon u-icon-servicePolicy-index" style={Style.itemStyle}></i>
                <span className="text">30天无忧退货</span>
              </a>
            </li>
            <li className="item">
              <a>
                <i className="u-icon u-icon-servicePolicy-index" style={Style.itemStyle}></i>
                <span className="text">48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Banner;
