// dependencies
import express from 'express'
import open from 'open'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'
// Utils
import { isMobile, isBot } from '../shared/utils/device'
// webpack config
import webpackConfig from '../../webpack.config'
// Client Render
import clientRender from './render/clientRender'
// API
/* import api from './api' */
// Environment
const isProduction = process.env.NODE_ENV === 'production'
// Analyzer
const isAnalyzer = process.env.ANALYZER === 'true'
// express App
const app = express()
// Webpack Compiler
const compiler = webpack(webpackConfig)
// Port listen
const port = process.env.NODE_PORT || 3000

// GZip Compression just for Production
if (isProduction) {
  app.get('*.js', (req, res, next) => {
    /* req.url = `${req.url}.gz`
    res.set('Content-Encoding', 'gzip') */
    req.url = `${req.url}.br`
    res.set('Content-Encoding', 'br')
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
  // We detect if a search bot is accessing...
  req.isBot = isBot(req.headers['user-agent'])
  next()
})

if (!isProduction) {
  // hot module replacement
  app.use(webpackDevMiddleware(compiler))
  app.use(
    webpackHotMiddleware(
      compiler.compilers.find(compiler => compiler.name === 'client') // eslint-disable-line
    )
  )
}

// Client Side Rendering
app.use(clientRender())

if (isProduction) {
  try {
    // eslint-disable-next-line
    const serverRender = require('../../dist/app/server.js').default

    app.use(serverRender())
  } catch (e) {
    throw e
  }
}

// For Server Side Rendering on Development Mode
app.use(webpackHotServerMiddleware(compiler))

// Disabling x-powered-by
app.disable('x-powered-by')

// listening port
app.listen(port, err => {
  if (!err || isAnalyzer) {
    open(`http://localhost:${port}`)
  }
})
