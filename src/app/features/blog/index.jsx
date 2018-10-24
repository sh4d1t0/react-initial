/* @flow */
// Dependencies
import React, { Component, createContext } from 'react'
import GetUserInfo, { GetUsers } from 'Features/blog/api'

const Post: Object = createContext()
const PostConsumer = Post.Consumer
const PostProvider = Post.Provider

// Flow Props and Types
type Props = {
  comp: Object
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
    const { comp }: Object = this.props
    const { userData }: Object = this.state

    return <PostProvider value={{ userData }}>{comp}</PostProvider>
  }
}
// eslint-disable-next-line
const WrapperConsumer = (Component): any => (props): any => (
  <PostConsumer>
    {context => <Component {...props} context={context} />}
  </PostConsumer>
)

export default PostStore
export { WrapperConsumer }
