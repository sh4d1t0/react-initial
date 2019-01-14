/* @flow */
// dependencies
import '@babel/polyfill'
import React from 'react'
import { hydrate, render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// containers
import App from 'App/App'

// DOM
const rootElement = document.getElementById('root')

const clientDomRenderer = rootElement.hasChildNodes() ? hydrate : render

// App Wrapper
const renderApp = Component => {
  clientDomRenderer(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  )
}

// Rendering app
renderApp(App)

// HMR
if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    renderApp(require('./App').default)
  })
}
