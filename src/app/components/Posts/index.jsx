/* @flow */
// dependencies
import React, { Component } from 'react'
import UserInfo from 'Components/Users/Info'
import { PostConsumer } from 'Context/blog'
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

        <UserInfo userInfo={userContext.userData} />
      </div>
    )
  }
}

export default Posts
