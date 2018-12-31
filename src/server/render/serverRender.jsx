/* @flow */
// dependencies
import React from 'react'
import { renderToString } from 'react-dom/server'
// containers
import App from 'App/App'
// HTML
import html from '../html'

function serverRender() {
  return (
    req: { url: string },
    res: { redirect: void, send: void },
    next: void // eslint-disable-line
  ) => {
    const context: Array<mixed> = {}

    const markup: void = renderToString(
      <App server location={req.url} context={context} />
    )
    const title: string = 'SSR'
    const app: string = 'main'
    const vendor: string = 'vendor'
    const stylesheet: string = '/app/main.css'

    if (context.url) {
      res.redirect(301, context.url)
    } else {
      res.send(html({ markup, title, app, vendor, stylesheet }))
    }
  }
}

export default serverRender
