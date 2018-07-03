/* @flow */
// dependencies
import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'

// redux store
import configureStore from '../shared/configureStore'

// containers
import App from './App'

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
