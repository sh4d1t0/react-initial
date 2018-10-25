/* @flow */
// TODO: lazy is not yet available for server-side rendering
// Dependencies
import React, { Component, Fragment /* , lazy, Suspense */ } from 'react'
// Components
import Posts from 'Components/Posts'

// const Posts = lazy(() => import('Components/Posts'))

// Flow Props and Types
type Props = {
  /** */
}

class Blog extends Component<Props> {
  componentDidMount() {
    /** */
  }

  render() {
    return (
      <Fragment>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Posts />
        {/* </Suspense> */}
      </Fragment>
    )
  }
}

export default Blog
