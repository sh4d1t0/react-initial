// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default () => (!isDevelopment ? 'source-map' : 'inline-source-map')
