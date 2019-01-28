// Dependencies
import { combineReducers } from 'redux'

// Containers Reducers
import blog from 'Reducers/Posts'

// Shared Reducers
import device from './deviceReducer'

const rootReducer = combineReducers({
  blog,
  device
})

export default rootReducer
