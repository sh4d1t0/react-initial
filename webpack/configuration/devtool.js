// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = () =>
  !isDevelopment ? 'cheap-source-map' : 'inline-source-map'
