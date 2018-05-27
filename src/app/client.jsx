// dependencies
import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
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
const renderApp = Component => {
  hydrate(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
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
