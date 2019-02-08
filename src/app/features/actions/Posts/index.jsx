/* @flow */
import axios from 'axios'

// action types
import FETCH_POSTS from '@actions/Posts/actionTypes'

// Base Actions
import { request, received, error } from '@baseActions'

const fetchPosts = (fetchingFrom: any) => async (dispatch: any) => {
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
  try {
    const response = await axios(axiosData, fetchingFrom)
    return dispatch(received(action, response.data))
  } catch (err) {
    console.log('AXIOS ERROR:', err.message) // eslint-disable-line no-console
    return dispatch(error(action))
  }
}

export default fetchPosts
