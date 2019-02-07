/* @flow */
// Dependencies
import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
// Components
import UserInfo from '@components/Users/Info'
// Contexts
import { BlogConsumer } from '@context/Blog'
// Styles
import styled from 'styled-components'

// Flow Props
type Props = {
  /** */
}

const Post = styled.div`
  color: rgb(0, 0, 255);
`

class Posts extends Component<Props> {
  static contextType = BlogConsumer

  render() {
    const blogContext = this.context
    const mobileContext = blogContext.isMobile
    const userContext = blogContext.userData
    const postsContext = blogContext.posts

    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {'Blog - '}
            {mobileContext ? 'mobile' : 'desktop'}
          </title>
          <meta name="description" content="Blog component" />
        </Helmet>
        <Post>
          <div>
            <h1>Blog</h1>
          </div>

          <UserInfo userInfo={userContext} />

          <div>
            {postsContext &&
              postsContext.map(post => (
                <posts key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </posts>
              ))}
          </div>
        </Post>
      </Fragment>
    )
  }
}

export default Posts
