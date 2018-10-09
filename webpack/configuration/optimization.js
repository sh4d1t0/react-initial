// dependencies
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import cssnano from 'cssnano'

// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default type => {
  const optimization = {
    splitChunks: {
      cacheGroups: {
        default: false,
        // vendors chunk
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 20,
          reuseExistingChunk: true
        },
        // commons chunk
        commons: {
          name: 'commons',
          chunks: 'async',
          enforce: true,
          minChunks: 2,
          priority: 10,
          reuseExistingChunk: true
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
    optimization.minimizer.push(
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
          discardComments: { removeAll: true }
        },
        canPrint: false
      })
    )
  }

  return optimization
}
