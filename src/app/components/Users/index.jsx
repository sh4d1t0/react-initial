/* @flow */
// Ddependencies
import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
// Ccomponents
import UserInfo from '@components/Users/Info'
// Contexts
import { UsersConsumer } from '@context/Users'

// Flow Props
type Props = {
  isMobile: boolean
}

class User extends Component<Props> {
  static contextType = UsersConsumer

  componentDidUpdate() {
    const usersContext: Array<mixed> = this.context
    console.log('usersContext_update_', usersContext) // eslint-disable-line
  }

  render() {
    const { isMobile } = this.props
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {'Users -'}
            {isMobile ? 'mobile' : 'desktop'}
          </title>
        </Helmet>
        <UserInfo userInfo={usersData} />
      </Fragment>
    )
  }
}

export default User
