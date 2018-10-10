/* @flow */
// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loadable from 'react-loadable'

// Components
/* import Posts from './components/Posts' */

// Actions
import { fetchPosts } from './actions'

// Utils
import isFirstRender from '../../shared/utils/data'

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

function Loading() {
  return '<div>Cargando...</div>'
}

const LoadablePost = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Post" */
    /* webpackMode: "lazy" */ './components/Posts'),
  loading: Loading
})

class Blog extends Component<Props, State> {
  static initialAction(fetchingFrom: string): any {
    return fetchPosts(fetchingFrom)
  }

  componentDidMount() {
    if (isFirstRender(this.props.posts)) {
      this.props.dispatch(Blog.initialAction('client'))
    }
  }

  render(): any {
    const { posts } = this.props

    return <LoadablePost posts={posts} />
  }
}

export default connect(
  ({ blog }) => ({
    posts: blog.posts
  }),
  null
)(Blog)
