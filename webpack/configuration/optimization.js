// dependencies
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const cssnano = require('cssnano')
// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

function optimization(type) {
  const optimizations = {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        default: false,
        vendors: false,
        // vendor chunk; splitting react and react-dom into a separate chunk
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'all',
          priority: 1,
          reuseExistingChunk: true
        },
        // commons chunk
        common: {
          name: 'common',
          chunks: 'async',
          minChunks: 2,
          priority: 1,
          reuseExistingChunk: true,
          enforce: true
        },
        styles: {
          name: 'style',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
          minChunks: Infinity
        }
      }
    },
    minimize: true,
    minimizer: []
  }

  if (!isDevelopment || type === 'server') {
    optimizations.minimizer.push(
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
        terserOptions: {
          ecma: 8,
          warnings: false, // Suppress terser warnings
          keep_classnames: undefined,
          keep_fnames: false,
          toplevel: false,
          ie8: false,
          safari10: false
        }
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: cssnano,
        cssProcessorOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        },
        canPrint: true
      })
    )
  }

  return optimizations
}

module.exports = optimization
