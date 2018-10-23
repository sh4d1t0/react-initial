/* @flow */
// dependencies
import '@babel/polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
// containers
import App from 'App/App'

// DOM
const rootElement = document.getElementById('root')

// app wrapper
if (rootElement) {
  hydrate(<App />, rootElement)
}
