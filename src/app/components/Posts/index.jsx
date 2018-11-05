/* @flow */
// dependencies
import React, { Component } from 'react'
import UserInfo from 'Components/Users/Info'
import { BlogConsumer } from 'Context/Blog'
// styles
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

    return (
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
    )
  }
}

export default Posts
