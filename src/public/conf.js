/**
 *  系统 配置项
 *  因为没有条件注释，这里通过编译时判断 process.env.STATS
 */
const HOST = process.env.NODE_ENV === 'production' ? '' : 'https://easy-mock.com/mock/5c67b439adf6a5499fb8d225/react'

export default {
  HOST: HOST,
  OTHER_HOST: '',
  JSONP_HOST: '',
  MOCK_HOST: 'https://easy-mock.com/mock/5c67b439adf6a5499fb8d225/react'
}
