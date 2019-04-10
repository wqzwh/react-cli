import React from 'react'
import { Row } from 'antd'
import styles from './index.less'
import find from '../../assets/img/find.png'

const NotFound = () => {
  return (
    <Row className={styles.row}>
      <Row className={styles.logo}>
        <span>4</span>
        <span className={styles['logo-icon']}>
          <img className={`${styles['find-img']} ${styles['error404animation']}`} src={find} />
        </span>
        <span>4</span>
      </Row>
      <Row className={styles['err-message']}>
        很抱歉，页面不小心迷路了~<a href='/'>返回首页</a>
      </Row>
    </Row>
  )
}
export default NotFound
