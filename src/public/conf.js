/**
 *  系统 配置项
 *  因为没有条件注释，这里通过编译时判断 process.env.STATS  dev/dist
 */
export default {
    HOST: "http://xxx.xxx.com",
    JSONP_HOST: 'http://xxx.xxxx.com',
    DEBUGMOCK: true && process.env.STATS === 'dev'
}
