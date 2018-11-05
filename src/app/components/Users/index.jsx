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

  render() {
    const usersContext = this.context
    const usersData = usersContext.userData

    return (
      <div>
        <div>
          <h1>Blog</h1>
        </div>

        <UserInfo userInfo={usersData} />
      </div>
    )
  }
}

export default User
