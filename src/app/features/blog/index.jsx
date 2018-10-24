/* @flow */
// Dependencies
import React, { Component, createContext } from 'react'
import GetUserInfo, { GetUsers } from 'Features/blog/api'

const Post: Object = createContext()
const PostConsumer = Post.Consumer
const PostProvider = Post.Provider

// Flow Props and Types
type Props = {
  /** */
}
type State = {
  userData: {
    id: number,
    public_repos: number,
    avatar_url: string,
    name: string,
    created_at: string
  }
}

class PostStore extends Component<Props, State> {
  state = {
    userData: {
      id: 0,
      public_repos: 0,
      avatar_url: '',
      name: '',
      created_at: ''
    }
  }

  componentDidMount() {
    GetUserInfo().then(data => {
      this.setState({ userData: data })
    })
    GetUsers().then(data => {
      console.log('AllUsers_', data) // eslint-disable-line
    })
  }

  render() {
    const { userData }: Object = this.state
    console.log('User_', userData) // eslint-disable-line
    return <PostProvider value={userData}>{this.props.comp}</PostProvider> // eslint-disable-line
  }
}

export default PostStore
export { PostConsumer }
export { PostProvider }
