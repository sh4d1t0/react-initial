// dependencies
import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'
// containers
import App from 'App/App'
// Routes
import routes from 'Shared/routes'
// Redux Store
import configureStore from 'Shared/configureStore'
// HTML
import html from './html'

function serverRender() {
  return (
    req: { url: string },
    res: { redirect: any, send: any },
    next: any
  ) => {
    // configure redux store
    const store = configureStore()
    // Getting the promises from the components which has initialAction.
    const promises = routes.reduce((acc, route) => {
      if (
        matchPath(req.url, route) &&
        route.component &&
        route.component.initialAction
      ) {
        acc.push(
          Promise.resolve(
            store.dispatch(route.component.initialAction('server'))
          )
        )
      }

      return acc
    }, [])

    Promise.all(promises)
      .then(() => {
        const context = {}

        const initialState = store.getState()

        const markup = renderToString(
          <Provider store={store}>
            <App server location={req.url} context={context} />
          </Provider>
        )

        // Let Helmet know to insert the right tags
        const helmet = Helmet.renderStatic()

        // Sending our HTML code.
        if (context.url) {
          res.redirect(301, context.url)
        } else {
          res.send(html({ helmet, initialState, markup }))
        }
      })
      .catch(next)
  }
}

export default serverRender
