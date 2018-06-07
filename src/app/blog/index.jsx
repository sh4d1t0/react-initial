// @flow
// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Posts from './components/Posts'

// Actions
import { fetchPosts } from './actions'

// Utils
import { isFirstRender } from '../../shared/utils/data'

type Action = { payload: Object }

type Dispatch = (action: Action | Array<Action>) => any

type Props = {
  posts: Array<{
    id: number,
    title: string,
    author: string,
    date: string
  }>,
  dispatch: Dispatch
}

class Blog extends Component<Props> {
  static initialAction(fetchingFrom) {
    return fetchPosts(fetchingFrom)
  }

  componentDidMount() {
    if (isFirstRender(this.props.posts)) {
      this.props.dispatch(Blog.initialAction('client'))
    }
  }

  render() {
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
