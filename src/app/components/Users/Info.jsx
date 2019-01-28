/* @flow */
// Dependencies
import React, { Fragment } from 'react'
import timeAgo from 'node-time-ago'
// Components
import Avatar from 'Components/Users/Avatar'
// Styles
import styles from 'Components/Posts/Posts.less'

// Flow Props
type Props = {
  userInfo: {
    name: string,
    avatar_url: string,
    public_repos: string,
    created_at: string
  }
}

function UserInfo(props: Props) {
  const { userInfo } = props
  return (
    <Fragment>
      <div className={styles.posts}>
        <p>
          <Avatar
            userName={userInfo.name}
            avatarUrl={userInfo.avatar_url}
            avatarSize={{ width: 100, height: 100 }}
          />
          <br />
          {userInfo.name}
          <br />
          {'Repositorios Publicos: '}
          {userInfo.public_repos}
        </p>
        <p>{timeAgo(userInfo.created_at)}</p>
      </div>
    </Fragment>
  )
}

export default UserInfo
