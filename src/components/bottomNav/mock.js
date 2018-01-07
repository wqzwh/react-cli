import Mock from 'mockjs';
import CONF from '@/components/conf';
import { initMock } from '@/public/utils/confUtils';

const mData = {
  bottomNav: {
    API: {
      GET: {
        "code": 200,
        "msg": "成功",
        "data": [
          {
            type: 'a',
            href: '/',
            value: '首页',
            checked: true
          },
          {
            type: 'b',
            href: '/',
            value: '识物',
            checked: false
          },
          {
            type: 'c',
            href: '/',
            value: '分类',
            checked: false
          },
          {
            type: 'd',
            href: '/',
            value: '购物车',
            checked: false
          },
          {
            type: 'e',
            href: '/',
            value: '个人',
            checked: false
          }
        ]
      }
    }
  }
}
/**
 * 接受参数，动态创建
 */
export default initMock(Mock, CONF, mData)
