/* @flow */
// Dependencies
import React, { Component, Fragment } from 'react'
// Components
import UserInfo from 'Components/Users/Info'
// Contexts
import { BlogConsumer } from 'Context/Blog'
// Utils
/* import isFirstRender from 'SharedUtils/data' */
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
    const userContext = blogContext.userData
    const postsContext = blogContext.posts

    /* if (isFirstRender(posts)) {
      return null
    } */

    return (
      <Fragment>
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
