import Mock from 'mockjs';
import CONF from '@/views/demo/conf';
import { initMock } from '@/public/utils/confUtils';

const mData = {
  module: {
    API: {
      GET: {
        "code": 200,
        "msg": "成功",
        "data": [
          { "label": "123", "value": 53508 },
          { "label": "123", "value": 280933 },
          { "label": "1230", "value": 166370 },
          { "label": "princesses", "value": 239167 },
          { "label": "A-life", "value": 123 },
          { "label": "123", "value": 53508 },
          { "label": "123", "value": 280933 },
          { "label": "1230", "value": 166370 },
          { "label": "princesses", "value": 239167 },
          { "label": "A-life", "value": 123 },
          { "label": "123", "value": 53508 },
          { "label": "123", "value": 280933 },
          { "label": "1230", "value": 166370 },
          { "label": "princesses", "value": 239167 },
          { "label": "A-life", "value": 123 },{ "label": "123", "value": 53508 },
          { "label": "123", "value": 280933 },
          { "label": "1230", "value": 166370 },
          { "label": "princesses", "value": 239167 },
          { "label": "A-life", "value": 123 },{ "label": "123", "value": 53508 },
          { "label": "123", "value": 280933 },
          { "label": "1230", "value": 166370 },
          { "label": "princesses", "value": 239167 },
          { "label": "A-life", "value": 123 },{ "label": "123", "value": 53508 },
          { "label": "123", "value": 280933 },
          { "label": "1230", "value": 166370 },
          { "label": "princesses", "value": 239167 },
          { "label": "A-life", "value": 123 }
        ]
      }
    }
  }
}
/**
 * 接受参数，动态创建
 */
export default initMock(Mock, CONF, mData)
