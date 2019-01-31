/* @flow */
// Dependencies
import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
// Components
import UserInfo from '@components/Users/Info'
// Contexts
import { BlogConsumer } from '@context/Blog'
// Styles
import styles from './Posts.less'

// Flow Props
type Props = {
  /** */
}

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
        </Helmet>
        <div className={styles.posts}>
          <div className={styles.header}>
            <h1>Blog</h1>
          </div>

          <UserInfo userInfo={userContext} />

          <div>
            {postsContext &&
              postsContext.map(post => (
                <div key={post.id} className={styles.posts}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
              ))}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Posts
