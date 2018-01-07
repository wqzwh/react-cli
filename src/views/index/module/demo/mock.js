import Mock from 'mockjs';
import CONF from '@/views/index/conf';
import { initMock } from '@/public/utils/confUtils';

const mData = {
  module: {
    API: {
      GET: {
        "code": 200,
        "msg": "成功",
        "data": [
        ]
      }
    }
  }
}
/**
 * 接受参数，动态创建
 */
export default initMock(Mock, CONF, mData)
