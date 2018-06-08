// dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default () => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: '../../public/css/style.css'
    })
  ]

  if (isDevelopment) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    )
  }

  return plugins
}
