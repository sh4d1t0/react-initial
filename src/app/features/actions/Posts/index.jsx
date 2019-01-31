/* @flow */
import axios from 'axios'

// action types
import FETCH_POSTS from '@actions/Posts/actionTypes'

// Base Actions
import { request, received, error } from '@baseActions'

const fetchPosts = (fetchingFrom: any) => (dispatch: any) => {
  const action = FETCH_POSTS

  // Dispatchinquest action
  dispatch(request(action))

  const axiosData = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  // If everything is correct we dispatch our received action otherwise our error action.
  return axios(axiosData, fetchingFrom)
    .then(response => dispatch(received(action, response.data)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response) // eslint-disable-line no-console
      dispatch(error(action))
    })
}

export default fetchPosts
