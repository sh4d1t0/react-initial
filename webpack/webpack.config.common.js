// configuration
const { extensions, modules, rules, performance } = require('./configuration')

module.exports = type => ({
  devServer: {
    hot: true
  },
  module: {
    rules: rules(type)
  },
  resolve: {
    extensions,
    modules
  },
  performance: performance(type)
})
