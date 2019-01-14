/* @flow */
// dependencies
import React from 'react'
import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'
// containers
import App from 'App/App'
// HTML
import html from './html'

function serverRender() {
  return (
    req: { url: string },
    res: { redirect: any, send: any },
    next: any // eslint-disable-line
  ) => {
    const context = {}

    const markup: any = renderToString(
      <App server location={req.url} context={context} />
    )
    // Let Helmet know to insert the right tags
    const helmet = Helmet.renderStatic()

    if (context.url) {
      res.redirect(301, context.url)
    } else {
      res.send(html({ helmet, initialState: '', markup }))
    }
  }
}

export default serverRender
