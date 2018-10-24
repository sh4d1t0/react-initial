/* @flow */
// dependencies
import React from 'react'
import timeAgo from 'node-time-ago'
import { PostConsumer } from 'Features/blog'
// styles
import styles from './Posts.less'

// Flow Props
/* type Props = {
  userData: {
    id: number,
    public_repos: number,
    avatar_url: string,
    name: string,
    created_at: string
  }
} */

function Posts(/* props: Props */) {
  /* const { userData } = props */

  return (
    <div className={styles.posts}>
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>

      {
        <PostConsumer>
          {context => (
            <div key={context.userData.id} className={styles.posts}>
              <p>
                <img
                  src={context.userData.avatar_url}
                  alt=""
                  width="100"
                  height="100"
                />
                <br />
                {context.userData.name}
                <br />
                {'Repositorios Publicos: '}
                {context.userData.public_repos}
              </p>
              <p>{timeAgo(context.userData.created_at)}</p>
            </div>
          )}
        </PostConsumer>
      }
    </div>
  )
}

export default Posts
