// @flow
// dependencies
import express from 'express'
import open from 'open'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'
// API
/* import api from './api' */
// Utils
import { isMobile } from '../shared/utils/device'
// webpack config
import webpackConfig from '../../webpack.config'
// Environment
const isDevelopment = process.env.NODE_ENV !== 'production'
// Analyzer
const isAnalyzer = process.env.ANALYZER === 'true'

// express App
const app = express()
const compiler = webpack(webpackConfig)
const port = process.env.NODE_PORT || 3000

// GZip Compression just for Production
if (!isDevelopment) {
  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`
    res.set('Content-Encoding', 'gzip')
    next()
  })
}

// public static
app.use(express.static(path.join(__dirname, '../../public')))

// API middleware
/* app.use('/api', api) */

// Device Detection
app.use((req, res, next) => {
  req.isMobile = isMobile(req.headers['user-agent'])
  return next()
})

if (isDevelopment) {
  // hot middleware replacement
  app.use(webpackDevMiddleware(compiler))
  app.use(
    webpackHotMiddleware(
      compiler.compilers.find(compiler => compiler.name === 'client') // eslint-disable-line
    )
  )
  app.use(webpackHotServerMiddleware(compiler))
} else {
  try {
    const serverRender = require('../../dist/app/server.js').default // eslint-disable-line

    app.use(serverRender())
  } catch (e) {
    throw e
  }
}

// listening port
app.listen(port, err => {
  if (!err && !isAnalyzer) {
    open(`http://localhost:${port}`)
  }
})
