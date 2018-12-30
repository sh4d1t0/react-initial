/* @flow */
// Dependencies
import React, { Fragment } from 'react'

// Flow Props
type Props = {
  avatarUrl: string,
  avatarSize: {
    width: number,
    height: number
  },
  userName: string
}

function Avatar(props: Props) {
  const { avatarUrl, avatarSize, userName } = props
  return (
    <Fragment>
      <img
        src={avatarUrl}
        alt={userName}
        width={avatarSize.width}
        height={avatarSize.height}
      />
    </Fragment>
  )
}

export default Avatar
