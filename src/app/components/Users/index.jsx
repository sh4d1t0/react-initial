/* @flow */
// Ddependencies
import React, { Component, Fragment } from 'react'
// Ccomponents
import UserInfo from 'Components/Users/Info'
// Contexts
import { UsersConsumer } from 'Context/Users'

// Flow Props
type Props = {
  /** */
}

class User extends Component<Props> {
  static contextType = UsersConsumer

  componentDidUpdate() {
    const usersContext: Array<mixed> = this.context
    console.log('usersContext_update_', usersContext) // eslint-disable-line
  }

  render() {
    const usersContext: {
      userData: {
        name: string,
        avatar_url: string,
        public_repos: string,
        created_at: string
      }
    } = this.context
    const usersData: {
      name: string,
      avatar_url: string,
      public_repos: string,
      created_at: string
    } = usersContext.userData

    return (
      <Fragment>
        <UserInfo userInfo={usersData} />
      </Fragment>
    )
  }
}

export default User
