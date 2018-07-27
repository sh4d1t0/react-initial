// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default () => (!isDevelopment ? 'cheap-source-map' : 'inline-source-map')
