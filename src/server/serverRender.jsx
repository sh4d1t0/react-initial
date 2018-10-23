/* @flow */
// dependencies
import React from 'react'
import { renderToString } from 'react-dom/server'
// containers
import App from 'App/App'
// HTML
import html from './html'

export default function serverRender(): any {
  return (
    req: { url: string },
    res: { component: string, redirect: any, send: any },
    next: any // eslint-disable-line
  ) => {
    const context = {}

    const markup = renderToString(
      <App server location={req.url} context={context} />
    )

    if (context.url) {
      res.redirect(301, context.url)
    } else {
      res.send(
        html({
          markup
        })
      )
    }
  }
}
