const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    vendors: ['lodash', 'moment'],
    react: ['react', 'react-dom', 'redux', 'react-redux']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dll'),
    library: '[name]'
  },
  plugins: [
    // 解决moment语言包问题
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(zh-cn)$/),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../dll/[name].manifest.json')
    })
  ]
}
