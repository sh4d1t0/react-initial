// Action Types
import { FETCH_POSTS_SUCCESS } from 'Actions/Posts/actionTypes'

const initialState = {
  posts: []
}

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload
      }
    }

    default:
      return state
  }
}
