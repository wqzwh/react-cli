import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import isEqual from 'lodash/isEqual'
import styles from './index.less'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state)
  }
  render() {
    return (
      <Row className={styles.row}>
        <Col span={24}>欢迎</Col>
      </Row>
    )
  }
}

Index.propTypes = {
  dispatch: PropTypes.func
}
export default connect(state => {
  return {}
})(Index)
