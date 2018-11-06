/* @flow */
// Dependencies
import axios from 'axios'

export default async function GetAllUsers() {
  if (this instanceof GetAllUsers) {
    return new GetAllUsers()
  }
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.github.com/users',
      responseType: 'stream'
    })
    return response.data
  } catch (error) {
    console.log(error) // eslint-disable-line
    return false
  }
}

export async function GetUserInfo(user: string) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.github.com/users/${user}`,
      responseType: 'stream'
    })
    return response.data
  } catch (error) {
    console.log(error) // eslint-disable-line
    return false
  }
}

/* export default function git() {
  axios
    .all([GetUserInfo(), GetUsers()])
    .then(axios.spread((userInfo, Users) => ({ userInfo, Users })))
} */
