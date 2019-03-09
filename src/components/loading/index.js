import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styles from './index.less'

class LoadingComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Row className={styles.ske}>
        <Col span={24} className={styles['ske-con']}>
          数据加载中...
        </Col>
      </Row>
    )
  }
}

export default LoadingComponent
