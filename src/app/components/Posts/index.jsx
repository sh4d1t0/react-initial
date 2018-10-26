/* @flow */
// dependencies
import React, { Component } from 'react'
import timeAgo from 'node-time-ago'
import { PostConsumer } from 'Features/blog'
// styles
import styles from './Posts.less'

// Flow Props
type Props = {
  /** */
}

class Posts extends Component<Props> {
  static contextType = PostConsumer

  render() {
    const userContext = this.context

    return (
      <div className={styles.posts}>
        <div className={styles.header}>
          <h1>Blog</h1>
        </div>

        <div key={userContext.userData.id} className={styles.posts}>
          <p>
            <img
              src={userContext.userData.avatar_url}
              alt=""
              width="100"
              height="100"
            />
            <br />
            {userContext.userData.name}
            <br />
            {'Repositorios Publicos: '}
            {userContext.userData.public_repos}
          </p>
          <p>{timeAgo(userContext.userData.created_at)}</p>
        </div>
      </div>
    )
  }
}

export default Posts
