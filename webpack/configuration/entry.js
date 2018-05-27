// enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

export default type => {
  if (type === 'server') {
    return './serverRender.jsx'
  }

  const entry = {
    main: []
  }

  if (isDevelopment) {
    entry.main.push(
      'webpack-hot-middleware/client',
      'react-hot-loader/patch'
    )
  }

  entry.main.push('./client.jsx')

  return entry
}
