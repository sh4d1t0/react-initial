/* @flow */
// Dependencies
import React, { Component } from 'react'
import GetUserInfo from 'Features/blog/api'
// Components
import Posts from 'Components/Posts'
import { Provider } from '../../store'

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

class Blog extends Component<Props, State> {
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
  }

  render() {
    const { userData }: Object = this.state

    return (
      <Provider value={{ userData }}>
        <Posts />
      </Provider>
    )
  }
}

export default Blog
