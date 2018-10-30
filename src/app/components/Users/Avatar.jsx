/* @flow */
// dependencies
import React from 'react'

// Flow Props
type Props = {
  avatarUrl: string,
  avatarSize: Object,
  userName: string
}

function Avatar(props: Props) {
  const { avatarUrl, avatarSize, userName } = props
  return (
    <img
      src={avatarUrl}
      alt={userName}
      width={avatarSize.width}
      height={avatarSize.height}
    />
  )
}

export default Avatar
