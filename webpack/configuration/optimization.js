// dependencies
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import cssnano from 'cssnano'

// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default type => {
  const optimization = {
    concatenateModules: true,
    /* runtimeChunk: {
      name: 'vendors'
    }, */
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxInitialRequests: Infinity,
      name: true,
      cacheGroups: {
        vendors: {
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `vendor.${packageName.replace('@', '')}`
          },
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        },
        commons: {
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `common.${packageName.replace('@', '')}`
          },
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          enforce: true,
          minChunks: Infinity
        },
        default: false,
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
