/* @flow */
// TODO: lazy is not yet available for server-side rendering
// Dependencies
import React, { Component, Fragment /* , lazy, Suspense */ } from 'react'
import GetUserInfo, { GetUsers } from 'Features/blog/api'
import { PostProvider } from 'Features/blog'
// Components
import Posts from 'Components/Posts'

// Flow Props and Types
type Props = {
  /** */
}
type State = {
  users?: Array<mixed>,
  userData?: Object
}

class Blog extends Component<Props, State> {
  state = {
    users: [],
    userData: {}
  }

  componentDidMount() {
    GetUsers().then(data => {
      if (data !== false) {
        this.setState({ users: data })
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
  }

  render() {
    const { users, userData }: Object = this.state

    return (
      <Fragment>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <PostProvider value={{ userData, users }}>
          <Posts {...this.props} />
        </PostProvider>
        {/* </Suspense> */}
      </Fragment>
    )
  }
}

export default Blog
