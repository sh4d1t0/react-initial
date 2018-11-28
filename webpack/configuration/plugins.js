// dependencies
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
// eslint-disable-next-line
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const Stylish = require('webpack-stylish')
const DashboardPlugin = require('webpack-dashboard/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'
// Analyzer
const isAnalyzer = process.env.ANALYZER === 'true'

function plugins() {
  // the path(s) that should be cleaned
  const pathsToClean = ['dist', 'build']

  // the clean options to use
  const cleanOptions = {
    verbose: true,
    dry: false,
    watch: false
  }

  const plugin = [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
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
      new HtmlWebpackPlugin({
        title: 'React Initial',
        minify: true
      })
    )
  }

  return plugin
}

module.exports = plugins
