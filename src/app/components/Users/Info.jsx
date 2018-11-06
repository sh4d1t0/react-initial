/* @flow */
// Dependencies
import React from 'react'
import timeAgo from 'node-time-ago'
// Components
import Avatar from 'Components/Users/Avatar'
// Styles
import styles from 'Components/Posts/Posts.less'

// Flow Props
type Props = {
  userInfo: Object
}

function UserInfo(props: Props) {
  const { userInfo } = props
  return (
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
  )
}

export default UserInfo
