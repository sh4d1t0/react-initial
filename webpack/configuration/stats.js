// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default () => {
  const stats = isDevelopment ? 'verbose' : 'none'

  return stats
}
