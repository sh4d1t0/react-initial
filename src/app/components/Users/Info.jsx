/* @flow */
// Dependencies
import React, { Fragment } from 'react'
import timeAgo from 'node-time-ago'
// Components
import Avatar from '@components/Users/Avatar'
// Styles
import styled from 'styled-components'

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

  const Post = styled.div`
    color: rgb(0, 0, 255);
  `

  return (
    <Fragment>
      <Post>
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
      </Post>
    </Fragment>
  )
}

export default UserInfo
