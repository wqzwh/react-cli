var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    // cheap-module-source-map 线上环境使用这个，线上也能定位错误
    devtool: 'cheap-module-source-map'
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    host: '0.0.0.0',
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    showEslintErrorsInOverlay: false,
    useEslint: true,
    // source-map内容会打包到js文件中，如果使用source-map则会新生成一个map文件
    // cheap-module-inline-source-map 只确定行的错误，增加module则也会监控第三库文件，不加则只会监听业务代码
    // eval 打包速度最快
    // cheap-module-eval-source-map 开发环境使用这个
    devtool: 'cheap-module-eval-source-map'
  }
}
