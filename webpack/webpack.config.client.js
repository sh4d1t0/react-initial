// dependencies
import webpackMerge from 'webpack-merge'

// Webpack configuration
import commonConfig from './webpack.config.common'
import {
  context,
  devtool,
  entry,
  name,
  output,
  optimization,
  plugins,
  target
} from './configuration'

// Type of configuration
const type = 'client'

export default webpackMerge(commonConfig(type), {
  mode: 'development',
  context: context(type),
  devtool: devtool(type),
  entry: entry(type),
  name: name(type),
  output: output(type),
  optimization: optimization(type),
  plugins: plugins(type),
  target: target(type)
})
