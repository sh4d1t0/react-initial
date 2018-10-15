// @flow
// Dependencies
import { combineReducers } from 'redux'

// Containers Reducers
import blog from '../../app/features/blog/reducer'

// Shared Reducers
import device from './deviceReducer'

const rootReducer = combineReducers({
  blog,
  device
})

export default rootReducer
