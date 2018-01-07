import Mock from 'mockjs';
import CONF from '@/components/conf';
import { initMock } from '@/public/utils/confUtils';

const mData = {
  header: {
    API: {
      GET: {
        "code": 200,
        "msg": "成功",
        "data": [
          {
            type: 'a',
            value: '推荐',
            checked: true
          },
          {
            type: 'b',
            value: '居家',
            checked: false
          },
          {
            type: 'c',
            value: '餐厨',
            checked: false
          },
          {
            type: 'd',
            value: '配件',
            checked: false
          },
          {
            type: 'e',
            value: '服装',
            checked: false
          },
          {
            type: 'f',
            value: '电器',
            checked: false
          },
          {
            type: 'g',
            value: '洗护',
            checked: false
          },
          {
            type: 'h',
            value: '杂货',
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
