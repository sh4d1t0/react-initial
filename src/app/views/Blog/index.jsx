/* @flow */
// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
// Components
import Posts from 'Components/Posts'
// Actions
import fetchPosts from 'Features/blog/actions'
// Utils
import isFirstRender from 'SharedUtils/data'

type Action = { payload?: void }
type Dispatch = (action: Action | Promise<Action>) => void
type Props = {
  dispatch: Dispatch
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
  static initialAction(fetchingFrom: string): any {
    return fetchPosts(fetchingFrom)
  }

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
    const { dispatch } = this.props

    if (isFirstRender()) {
      dispatch(Blog.initialAction('client'))
    }

    axios({
      method: 'get',
      url: 'https://api.github.com/users/sh4d1t0',
      responseType: 'stream'
    }).then(res => {
      const userData = res.data
      this.setState({ userData })
    })
  }

  render(): any {
    const { userData } = this.state

    return <Posts userData={userData} />
  }
}

export default connect(
  ({ blog }) => ({
    userData: blog.userData
  }),
  null
)(Blog)
