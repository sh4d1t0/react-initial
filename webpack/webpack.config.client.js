// dependencies
import webpackMerge from 'webpack-merge'

// Webpack configuration
import commonConfig from './webpack.config.common'
import { context, devtool, entry, name, output, plugins, target } from './configuration'

// Type of configuration
const type = 'client'

export default webpackMerge(commonConfig(type), {
  context: context(type),
  devtool: devtool(type),
  entry: entry(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
})
