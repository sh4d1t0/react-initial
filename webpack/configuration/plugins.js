// dependencies
import CompressionPlugin from 'compression-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'
import Stylish from 'webpack-stylish'
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin'
import DashboardPlugin from 'webpack-dashboard/plugin'

// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

// Analyzer
const isAnalyzer = process.env.ANALYZER === 'true'

export default () => {
  const plugins = [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      filename: '../../public/css/style.css'
    }),
    new Stylish(),
    new HardSourceWebpackPlugin({
      // Either an absolute path or relative to webpack's options.context.
      cacheDirectory: '../../node_modules/.cache/hard-source/[confighash]',
      // Either a string of object hash function given a webpack config.
      // configHash: function(webpackConfig) {
      // node-object-hash on npm can be used to build this.
      // return require('node-object-hash')({ sort: false }).hash(webpackConfig)
      // },
      // Either false, a string, an object, or a project hashing function.
      environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ['package-lock.json', 'yarn.lock']
      },
      // An object.
      info: {
        // 'none' or 'test'.
        mode: 'none',
        // 'debug', 'log', 'info', 'warn', or 'error'.
        level: 'debug'
      },
      // Clean up large, old caches automatically.
      cachePrune: {
        // Caches younger than `maxAge` are not considered for deletion. They must
        // be at least this (default: 2 days) old in milliseconds.
        maxAge: 2 * 24 * 60 * 60 * 1000,
        // All caches together must be larger than `sizeThreshold` before any
        // caches will be deleted. Together they must be at least this
        // (default: 50 MB) big in bytes.
        sizeThreshold: 50 * 1024 * 1024
      }
    })
  ]

  if (isAnalyzer) {
    plugins.push(
      new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
      new DashboardPlugin()
    )
  }

  if (isDevelopment) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new DashboardPlugin()
    )
  } else {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new HtmlWebpackPlugin({ minify: true })
    )
  }

  return plugins
}
