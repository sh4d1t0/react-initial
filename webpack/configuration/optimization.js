// dependencies
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import cssnano from 'cssnano'

// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default type => {
  const optimization = {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: -10
        },
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        styles: {
          name: 'style',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimize: true,
    minimizer: []
  }

  if (!isDevelopment || type === 'server') {
    optimization.minimizer.push(
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
        uglifyOptions: {
          compress: {
            ecma: 8,
            warnings: false, // Suppress uglification warnings
            toplevel: false,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: cssnano,
        cssProcessorOptions: {
          discardComments: { removeAll: true }
        },
        canPrint: false
      })
    )
  }

  return optimization
}
