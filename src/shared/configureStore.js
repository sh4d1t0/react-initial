// @flow
// Dependencies
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

// Root reducer
import rootReducer from './reducers'

export default function configureStore(initialState: any): any {
  const middleware = [ReduxThunk]

  return createStore(rootReducer, initialState, applyMiddleware(...middleware))
}
