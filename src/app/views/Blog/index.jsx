/* @flow */
// TODO: lazy is not yet available for server-side rendering
// Dependencies
import React, { Component, Fragment /* , lazy, Suspense */ } from 'react'
import GetUserInfo, { GetUsers } from 'Features/blog/api'
import Context from 'Features/blog'
// Components
import Posts from 'Components/Posts'

// Flow Props and Types
type Props = {
  /** */
}
type State = {
  userData: {}
}

class Blog extends Component<Props, State> {
  state = {
    userData: {}
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

    return (
      <Fragment>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Context.Provider value={{ userData }}>
          <Posts {...this.props} />
        </Context.Provider>
        {/* </Suspense> */}
      </Fragment>
    )
  }
}

export default Blog
