/* @flow */
// dependencies
import React, { Component } from 'react'
import UserInfo from 'Components/Users/Info'
import { UsersConsumer } from 'Context/Users'

// Flow Props
type Props = {
  /** */
}

class User extends Component<Props> {
  static contextType = UsersConsumer

  componentDidUpdate() {
    const usersContext = this.context
    console.log('usersContext_update_', usersContext) // eslint-disable-line
  }

  render() {
    const usersContext = this.context
    const usersData = usersContext.userData

    return (
      <div>
        <UserInfo userInfo={usersData} />
      </div>
    )
  }
}

export default User
