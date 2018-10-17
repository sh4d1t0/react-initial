/* @flow */
// dependencies
import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
// redux store
import configureStore from 'Shared/configureStore'
// containers
import App from 'App/App'
// routes
import routes from 'Shared/routes'
// HTML
import html from './html'

export default function serverRender(): any {
  return (
    req: { url: string },
    res: { component: string, redirect: any, send: any },
    next: any // eslint-disable-line
  ) => {
    // configure redux store
    const store = configureStore()

    const promises = routes.reduce((acc, route: any): any => {
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
        console.error('Promise error: ', e) // eslint-disable-line
      })
  }
}
