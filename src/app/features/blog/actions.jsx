/* @flow */
// API
import blogApi from './api'

// action types
import FETCH_POSTS from './actionTypes'

const fetchPosts = (fetchingFrom: any, query: any) => (
  dispatch: any
): string => {
  const requestPosts = () => ({
    type: FETCH_POSTS.request()
  })

  const receivedPosts = posts => ({
    type: FETCH_POSTS.success(),
    payload: posts
  })

  dispatch(requestPosts())

  return blogApi
    .getAllPosts(query, fetchingFrom)
    .then(posts => dispatch(receivedPosts(posts)))
}

export default fetchPosts
