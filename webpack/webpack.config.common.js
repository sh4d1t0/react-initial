// configuration
import { rules, extensions, modules, performance } from './configuration'

export default type => ({
  module: {
    rules: rules(type)
  },
  resolve: {
    extensions: extensions(type),
    modules: modules(type)
  },
  performance: performance(type)
})
