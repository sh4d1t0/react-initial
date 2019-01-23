/* @flow */
// TODO: lazy is not yet available for server-side rendering
// Dependencies
import React, { Component, Fragment /* , lazy, Suspense */ } from 'react'
import { connect } from 'react-redux'
// Apis
import GetAllUsers, { GetUserInfo } from 'Api/Users'
import GetAllPost from 'Api/Post'
// Contexts
import { BlogProvider } from 'Context/Blog'
// Components
import Posts from 'Components/Posts'
import Navbar from 'SharedComponents/Navbar'
// Actions
import fetchPosts from 'Features/blog/actions'
// Utils
import isFirstRender from 'SharedUtils/data'

// Flow Props and Types
type Action = { payload?: void }
type Dispatch = (action: Action | Promise<Action>) => void
type Props = {
  dispatch: Dispatch
}
type State = {
  posts?: Array<mixed>,
  users?: Array<mixed>,
  userData?: Object
}

class Blog extends Component<Props, State> {
  static initialAction(fetchingFrom: string): any {
    return fetchPosts(fetchingFrom)
  }

  state = {
    posts: [],
    users: [],
    userData: {}
  }

  componentDidMount() {
    const { dispatch } = this.props

    if (isFirstRender()) {
      dispatch(Blog.initialAction('client'))
    }

    const user = 'Sh4d1t0'
    GetAllPost().then(data => {
      if (data !== false) {
        this.setState({ posts: data })
      } else {
        // TODO Add Message
        console.log('error') // eslint-disable-line
      }
    })
    GetUserInfo(user).then(data => {
      if (data !== false) {
        this.setState({ userData: data })
      } else {
        // TODO Add Message
        console.log('error') // eslint-disable-line
      }
    })
    GetAllUsers().then(data => {
      if (data !== false) {
        this.setState({ users: data })
      } else {
        // TODO Add Message
        console.log('error') // eslint-disable-line
      }
    })
  }

  render() {
    const { posts, users, userData }: Object = this.state

    return (
      <Fragment>
        <Navbar />
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <BlogProvider value={{ posts, userData, users }}>
          <Posts {...this.props} />
        </BlogProvider>
        {/* </Suspense> */}
      </Fragment>
    )
  }
}

export default connect(
  ({ blog }) => ({
    posts: blog.posts,
    userData: blog.userData
  }),
  null
)(Blog)
