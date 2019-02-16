import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import isEqual from 'lodash/isEqual'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state)
  }
  render() {
    return (
      <Row>
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
