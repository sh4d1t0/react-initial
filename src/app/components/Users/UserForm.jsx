/* @flow */
import React from 'react'

// Flow Props
type Props = {
  getUser: mixed
}

function UserForm(props: Props) {
  const { getUser } = props

  return (
    <form onSubmit={getUser}>
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserForm
