/* @flow */
import axios from 'axios'

// action types
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR
} from 'Actions/Posts/actionTypes'

// Base Actions
import { request, received, error } from 'Shared/redux/baseActions'

const fetchPosts = (fetchingFrom: any) => (dispatch: any) => {
  // Dispatching our request action
  dispatch(request(FETCH_POSTS_REQUEST))

  // Axios Data
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
    .then(response => dispatch(received(FETCH_POSTS_SUCCESS, response.data)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response) // eslint-disable-line no-console
      dispatch(error(FETCH_POSTS_ERROR))
    })
}

export default fetchPosts
