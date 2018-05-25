// configuration
import { rules, extensions, modules } from './configuration'

export default type => ({
  mode: 'none',
  module: {
    rules: rules(type)
  },
  resolve: {
    extensions: extensions(type),
    modules: modules(type)
  }
})
