/* @flow */
// TODO: lazy is not yet available for server-side rendering
// Dependencies
import React, { Component, Fragment /* , lazy, Suspense */ } from 'react'
import GetAllUsers, { GetUserInfo } from 'Api/blog'
import GetAllPost from 'Api/post'
import { BlogProvider } from 'Context/blog'
// Components
import Posts from 'Components/Posts'

// Flow Props and Types
type Props = {
  /** */
}
type State = {
  posts?: Array<mixed>,
  users?: Array<mixed>,
  userData?: Object
}

class Blog extends Component<Props, State> {
  state = {
    posts: [],
    users: [],
    userData: {}
  }

  componentDidMount() {
    GetAllPost().then(data => {
      if (data !== false) {
        this.setState({ posts: data })
      } else {
        // TODO Add Message
        console.log('error') // eslint-disable-line
      }
    })
    GetUserInfo().then(data => {
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

  /* shouldComponentUpdate(prevState, nextState) {
    console.log('prevS', prevState)
    console.log('nextS', nextState)
  } */

  render() {
    const { posts, users, userData }: Object = this.state

    return (
      <Fragment>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <BlogProvider value={{ posts, userData, users }}>
          <Posts {...this.props} />
        </BlogProvider>
        {/* </Suspense> */}
      </Fragment>
    )
  }
}

export default Blog
