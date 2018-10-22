// dependencies
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
const Stylish = require('webpack-stylish')
const DashboardPlugin = require('webpack-dashboard/plugin')
// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'
// Analyzer
const isAnalyzer = process.env.ANALYZER === 'true'

function plugins() {
  const plugin = [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      filename: '../../public/css/style.css'
    }),
    new Stylish()
  ]

  if (isAnalyzer) {
    plugin.push(
      new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
      new DashboardPlugin()
    )
  }

  if (isDevelopment) {
    plugin.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new DashboardPlugin()
    )
  } else {
    plugin.push(
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
      new HtmlWebpackPlugin({ minify: true }),
      require('autoprefixer') // eslint-disable-line
    )
  }

  return plugin
}

module.exports = plugins
