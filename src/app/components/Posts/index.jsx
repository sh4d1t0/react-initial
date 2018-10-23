/* @flow */
// dependencies
import React from 'react'
import timeAgo from 'node-time-ago'
import Consumer from '../../store'
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
        <Consumer>
          {value => (
            <div key={value.userData.id} className={styles.posts}>
              <p>
                <img
                  src={value.userData.avatar_url}
                  alt=""
                  width="100"
                  height="100"
                />
                <br />
                {value.userData.name}
                <br />
                {'Repositorios Publicos: '}
                {value.userData.public_repos}
              </p>
              <p>{timeAgo(value.userData.created_at)}</p>
            </div>
          )}
        </Consumer>
      }
    </div>
  )
}

export default Posts
