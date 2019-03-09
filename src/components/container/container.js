import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import styles from './container.less'

const { SubMenu } = Menu
const { Header, Sider, Footer } = Layout

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: []
    }
  }
  componentDidMount() {
    this.getInfo()
  }
  getInfo() {
    const { dispatch } = this.props
    dispatch({ type: 'GOLOBAL_SAGA' })
  }
  onSelect({ item, key, selectedKeys }) {
    this.setState({
      selectedKeys
    })
  }
  render() {
    const { menuInfo, children } = this.props
    const subMenuList = menuInfo.map((itm, idx) => {
      return (
        <SubMenu
          key={`sub${idx}`}
          title={
            <span>
              <Icon type='user' />
              {itm.name}
            </span>
          }
        >
          {itm.children.map((im, ix) => {
            return (
              <Menu.Item key={im.relativeUrl}>
                <Link to={im.relativeUrl}>{im.name}</Link>
              </Menu.Item>
            )
          })}
        </SubMenu>
      )
    })
    return (
      <div className={styles.container}>
        <Layout>
          <Header className={styles.header}>
            <div className={styles.logo}>
              <a href='/'>React-Pro</a>
            </div>
            <a className={styles['dropdown-link']}>{this.props.currentUser}</a>
          </Header>
          <Layout>
            <Sider
              width={200}
              style={{
                background: '#fff',
                boxShadow: '2px 0px 5px 0px rgba(0,0,0,0.06)',
                position: 'relative',
                zIndex: '9'
              }}
            >
              <Menu
                mode='inline'
                selectedKeys={this.state.selectedKeys}
                defaultOpenKeys={['sub0', 'sub1']}
                style={{ height: '100vh', borderRight: 0 }}
                onSelect={this.onSelect.bind(this)}
              >
                {subMenuList}
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 12px 12px' }}>{this.props.currentUser ? children : ''}</Layout>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>React-cli ©2019 Created by wangqi</Footer>
        </Layout>
      </div>
    )
  }
}

Container.propTypes = {
  dispatch: PropTypes.func,
  currentUser: PropTypes.string,
  children: PropTypes.any,
  menuInfo: PropTypes.array
}

export default connect(state => {
  return {
    currentUser: state.globalData.currentUser,
    menuInfo: state.globalData.menuInfo
  }
})(Container)
