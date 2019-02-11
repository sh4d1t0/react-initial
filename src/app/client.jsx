// dependencies
import '@babel/polyfill'
import React from 'react'
import { hydrate, render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
// containers
import App from '@app'
// Redux Store
import configureStore from '@configureStore'

// Configuring Redux Store
const store = configureStore(window.initialState)

// DOM
const rootElement = document.querySelector('#root')

const clientDomRenderer = rootElement.hasChildNodes() ? hydrate : render

// App Wrapper
const renderApp = Component => {
  clientDomRenderer(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootElement
  )
}

// Rendering app
renderApp(App)

// HMR
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(App)
  })
}
