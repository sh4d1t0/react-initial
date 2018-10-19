/* @flow */
// dependencies
import React from 'react'
import timeAgo from 'node-time-ago'
// styles
import styles from './Posts.less'

type Props = {
  userData: {
    id: number,
    public_repos: number,
    avatar_url: string,
    name: string,
    created_at: string
  }
}

function Posts(props: Props) {
  const { userData } = props

  return (
    <div className={styles.posts}>
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>

      {userData && (
        <div key={userData.id} className={styles.posts}>
          <p>
            <img src={userData.avatar_url} alt="" width="100" height="100" />
            <br />
            {userData.name}
            <br />
            {'Repositorios Publicos: '}
            {userData.public_repos}
          </p>
          <p>{timeAgo(userData.created_at)}</p>
        </div>
      )}
    </div>
  )
}

export default Posts
