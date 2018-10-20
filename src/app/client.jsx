/* @flow */
// dependencies
import '@babel/polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/scss/bootstrap.scss'

// redux store
import configureStore from 'Shared/configureStore'
// containers
import App from 'App/App'

// configuring redux store
const store = configureStore(window.initialState)
// DOM
const rootElement = document.getElementById('root')

// app wrapper
if (rootElement) {
  hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
}
