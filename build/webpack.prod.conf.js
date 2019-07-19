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
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HappyPack = require('happypack')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const os = require('os')
const fs = require('fs')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const plugins = [
  // http://vuejs.github.io/vue-loader/en/workflow/production.html
  new webpack.DefinePlugin({
    'process.env': require('../config/prod.env')
  }),
  new CleanWebpackPlugin(),
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
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].[chunkhash].css'
  }),
  // 配置PWA
  new WorkboxPlugin.GenerateSW({
    cacheId: 'webpack-pwa', // 设置前缀
    skipWaiting: true, // 强制等待中的 Service Worker 被激活
    clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
    swDest: 'service-worker.js', // 输出 Service worker 文件
    globPatterns: ['**/*.{html,js,css,png.jpg}'], // 匹配的文件
    globIgnores: ['service-worker.js'] // 忽略的文件
  }),
  new LodashModuleReplacementPlugin(),
  // generate dist index.html with correct asset hash for caching.
  // you can customize output by editing /index.html
  // see https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: process.env.NODE_ENV === 'test' ? 'index.html' : config.build.index,
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
  new PreloadWebpackPlugin({
    rel: 'prefetch'
  }),
  new PreloadWebpackPlugin({
    rel: 'preload',
    as(entry) {
      if (/\.css$/.test(entry)) return 'style'
      if (/\.woff$/.test(entry)) return 'font'
      if (/\.png$/.test(entry)) return 'image'
      return 'script'
    }
  }),
  // keep module.id stable when vendor modules does not change
  new webpack.HashedModuleIdsPlugin(),
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

// 配置dll的映射
const files = fs.readdirSync(path.resolve(__dirname, '../dll'))
files.forEach(file => {
  if (/.*\.dll.js/.test(file)) {
    plugins.push(
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, '../dll', file)
      })
    )
  }
  if (/.*\.manifest.json/.test(file)) {
    plugins.push(
      new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, '../dll', file)
      })
    )
  }
})

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  optimization: {
    providedExports: true,
    usedExports: true, // 开启tree shaking
    // 识别package.json中的sideEffects以剔除无用的模块，用来做tree-shake
    // 依赖于optimization.providedExports和optimization.usedExports
    sideEffects: true,
    // 取代 new webpack.optimize.ModuleConcatenationPlugin()
    concatenateModules: true,
    // 取代 new webpack.NoEmitOnErrorsPlugin()，编译错误时不打印输出资源。
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1, // 判断库被引用多少次才进行打包分割
      maxAsyncRequests: 5, // 最大异步请求数， 默认1，只会对前5个库文件代码分割打包
      maxInitialRequests: 3, // 最大初始化请求数，默认1，对项目入口文件的前3个库文件进行代码分割
      automaticNameDelimiter: '~', // 代码分割名称的分割符
      name: true, // cacheGroups中的设置名称有效
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
          // filename: 'vendors.js'
        },
        default: {
          priority: -20,
          reuseExistingChunk: true // 如果一个模块已经被打包了，则忽略该模块打包
          // filename: 'common.js'
        }
      }
    },
    // 打包提取公共的关联关系代码（vendors和default）的关联关系代码
    runtimeChunk: {
      name: 'manifest'
    },
    minimizer: [new OptimizeCssAssetsPlugin({})]
  },
  plugins
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
  webpackConfig.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8889,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    })
  )
}

module.exports = webpackConfig
