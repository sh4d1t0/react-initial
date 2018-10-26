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
  users: Object,
  userData: Object
}

class Blog extends Component<Props, State> {
  state = {
    users: {},
    userData: {}
  }

  componentDidMount() {
    GetUserInfo().then(data => {
      this.setState({ userData: data })
    })
    GetUsers().then(data => {
      this.setState({ users: data })
    })
  }

  render() {
    const { users, userData }: Object = this.state

    return (
      <Fragment>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <PostProvider value={{ userData, users }}>
          <Posts {...this.props} userData={userData} users={users} />
        </PostProvider>
        {/* </Suspense> */}
      </Fragment>
    )
  }
}

export default Blog
