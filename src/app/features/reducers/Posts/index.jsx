// Action Types
import FETCH_POSTS from '@actions/Posts/actionTypes'

const initialState = {
  posts: []
}

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS.success(): {
      return {
        ...state,
        posts: action.payload
      }
    }
    case FETCH_POSTS.error(): {
      return { ...state }
    }
    default:
      return state
  }
}
