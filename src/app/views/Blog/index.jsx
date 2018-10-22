/* @flow */
// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
// Components
import Posts from 'Components/Posts'
// Actions
import fetchPosts from 'Features/blog/actions'
// Utils
import isFirstRender from 'SharedUtils/data'

type Action = { payload?: void }
type Dispatch = (action: Action | Promise<Action>) => void
type Props = {
  posts: Array<{
    id: number,
    title: string,
    author: string,
    date: string
  }>,
  dispatch: Dispatch
}
type State = {
  /** *** */
}

class Blog extends Component<Props, State> {
  static initialAction(fetchingFrom: string): any {
    return fetchPosts(fetchingFrom)
  }

  componentDidMount() {
    const { posts, dispatch } = this.props

    if (isFirstRender(posts)) {
      dispatch(Blog.initialAction('client'))
    }
  }

  render(): any {
    const { posts } = this.props

    return <Posts posts={posts} />
  }
}

export default connect(
  ({ blog }) => ({
    posts: blog.posts
  }),
  null
)(Blog)