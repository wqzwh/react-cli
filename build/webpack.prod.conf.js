'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const env = process.env.NODE_ENV === 'testing' ? require('../config/test.env') : require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    vendors: ['react', 'react-redux', 'react-router-dom', 'moment']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader')
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: [/src/],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              sourceMap: config.build.productionSourceMap,
              importLoaders: 1 // 在执行css-loader的时候会默认先执行less-loader
            }
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              sourceMap: config.build.productionSourceMap,
              modifyVars: {
                'primary-color': '#213BD6'
              },
              javascriptEnabled: true // less-loader 3.x以上的版本需要添加这个
            } // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true, // 开启模块化打包，避免样式全局影响 例：import styles form 'index.less'
              localIdentName: '[local]_[hash:base64:8]'
            }
          },
          {
            loader: require.resolve('less-loader')
          }
        ]
      }
    ]
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  optimization: {
    // minimizer: true,
    providedExports: true,
    usedExports: true,
    // 识别package.json中的sideEffects以剔除无用的模块，用来做tree-shake
    // 依赖于optimization.providedExports和optimization.usedExports
    sideEffects: true,
    // 取代 new webpack.optimize.ModuleConcatenationPlugin()
    concatenateModules: true,
    // 取代 new webpack.NoEmitOnErrorsPlugin()，编译错误时不打印输出资源。
    noEmitOnErrors: true,
    splitChunks: {
      // maxAsyncRequests: 1,                     // 最大异步请求数， 默认1
      // maxInitialRequests: 1,                   // 最大初始化请求书，默认1
      cacheGroups: {
        // 抽离第三方插件
        commons: {
          // test: path.resolve(__dirname, '../node_modules'),
          chunks: 'all',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
          name: 'common'
        },
        vendors: {
          chunks: 'async',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
          name: 'vendors'
        }
      }
    },
    // 提取webpack运行时的代码
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new HappyPack({
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            cacheDirectory: true
          }
        }
      ],
      threadPool: happyThreadPool
    }),
    new LodashModuleReplacementPlugin(),
    // 解决moment语言包问题
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(zh-cn)$/),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing' ? 'index.html' : config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    new webpack.HashedModuleIdsPlugin(),

    // keep module.id stable when vendor modules does not change
    // new webpack.HashedModuleIdsPlugin(),

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
