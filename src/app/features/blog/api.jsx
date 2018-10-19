/* @flow */
// Dependencies
import axios from 'axios'

export default async function GetUserInfo() {
  if (this instanceof GetUserInfo) {
    return new GetUserInfo()
  }
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.github.com/users/sh4d1t0',
      responseType: 'stream'
    })
    return response.data
  } catch (error) {
    console.log(error) // eslint-disable-line
    return error
  }
}

/* function GetUsers() {
  return axios({
    method: 'get',
    url: 'https://api.github.com/users',
    responseType: 'stream'
  })
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })
}

export default function git() {
  axios
    .all([GetUserInfo(), GetUsers()])
    .then(axios.spread((userInfo, Users) => ({ userInfo, Users })))
} */
