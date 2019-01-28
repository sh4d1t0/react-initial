// dependencies
import '@babel/polyfill'
import React from 'react'
import { hydrate, render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
// containers
import App from 'App/App'
// Redux Store
import configureStore from 'Shared/redux/configureStore'

// Configuring Redux Store
const store = configureStore(window.initialState)

// DOM
const rootElement = document.getElementById('root')

const clientDomRenderer = rootElement.hasChildNodes() ? hydrate : render

// App Wrapper
const renderApp = Component => {
  clientDomRenderer(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
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
