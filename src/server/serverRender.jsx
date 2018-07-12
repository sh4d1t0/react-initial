/* @flow */
// dependencies
import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'

// redux store
import configureStore from '../shared/configureStore'

// containers
import App from '../app/App'

// HTML
import html from './html'

// routes
import routes from '../shared/routes'

export default function serverRender() {
  return (
    req: { url: string },
    res: { component: string, redirect: any, send: any },
    next: any
  ) => {
    // configure redux store
    const store = configureStore()

    const promises = routes.reduce((acc, route: mixed) => {
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

        if (context.url) {
          res.redirect(301, context.url)
        } else {
          res.send(
            html({
              markup,
              initialState
            })
          )
        }
      })
      .catch(e => {
        console.log('Promise error: ', e) // eslint-disable-line
      })
  }
}
