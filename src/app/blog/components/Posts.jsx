/* @flow */
// dependencies
import React, { Component } from 'react'
import timeAgo from 'node-time-ago'

// utils
import { isFirstRender } from '../../../shared/utils/data'

// styles
import styles from './Posts.scss'

class Posts extends Component<{
  posts: Array<{ id: number, title: string, author: string, date: string }>
}> {
  render() {
    const { posts } = this.props

    if (isFirstRender(posts)) {
      return null
    }

    return (
      <div className={styles.posts}>
        <div className={styles.header}>
          <h1>Blog</h1>
        </div>

        {posts &&
          posts.map(post => (
            <div key={post.id} className={styles.posts}>
              <p>
                {post.id} - {post.title} by {post.author}
              </p>

              <p>{timeAgo(post.date)}</p>
            </div>
          ))}
      </div>
    )
  }
}

export default Posts
