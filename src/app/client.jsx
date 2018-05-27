// dependencies
import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// containers
import App from './App'

// DOM
const rootElement = document.getElementById('root')

// app wrapper
const renderApp = Component => {
  hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  )
}

// rendering app
renderApp(App)

// react hot loader
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(require('./App').default)
  })
}
