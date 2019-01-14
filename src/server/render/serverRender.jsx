/* @flow */
// dependencies
import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router-dom'
import Helmet from 'react-helmet'
// containers
import App from 'App/App'
// Routes
import routes from 'Shared/routes'
// HTML
import html from './html'

function serverRender() {
  return (
    req: { url: string },
    res: { redirect: any, send: any },
    next: any
  ) => {
    // Getting the promises from the components which has initialAction.
    // eslint-disable-next-line no-shadow
    const promises = routes.paths((promises, route) => {
      if (
        matchPath(req.url, route) &&
        route.component &&
        route.component.initialAction
      ) {
        promises.push(Promise.resolve(route.component.initialAction()))
      }

      return promises
    }, [])

    Promise.all(promises)
      .then(() => {
        const markup = renderToString(<App server location={req.url} />)

        // Let Helmet know to insert the right tags
        const helmet = Helmet.renderStatic()

        // Sending our HTML code.
        res.send(html({ helmet, initialState: '', markup }))
      })
      .catch(next)
  }
}

export default serverRender
