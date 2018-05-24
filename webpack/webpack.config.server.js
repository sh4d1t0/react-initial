// dependencies
import webpackMerge from 'webpack-merge'

// Webpack configuration
import commonConfig from './webpack.config.common'
import { context, entry, externals, name, output, plugins, target } from './configuration'

// Type of configuration
const type = 'server'

export default webpackMerge(commonConfig(type), {
  context: context(type),
  entry: entry(type),
  externals: entry(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
})
