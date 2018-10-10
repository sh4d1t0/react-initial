// dependencies
import CompressionPlugin from 'compression-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'
import Stylish from 'webpack-stylish'
import DashboardPlugin from 'webpack-dashboard/plugin'
import { ReactLoadablePlugin } from 'react-loadable/webpack'

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
    new ReactLoadablePlugin({
      filename: './src/react-loadable.json'
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
