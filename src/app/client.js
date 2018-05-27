// dependencies
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// containers
import App from 'containers/App'

// DOM
const rootElement = document.getElementById('root')

// app wrapper
const renderApp = Component => {
  render(
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
  module.hot.accept('containers/App', () => {
    renderApp(require('containers/App').default)
  })
}
