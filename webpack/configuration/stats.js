// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default () => {
  const stats = isDevelopment ? {} : 'none'

  if (isDevelopment) {
    stats.push({
      colors: true,
      hash: true,
      timings: true,
      assets: true,
      chunks: true,
      chunkModules: true,
      modules: true,
      children: true
    })
  }

  return stats
}
