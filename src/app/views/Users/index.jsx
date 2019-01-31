/* @flow */
// TODO: lazy is not yet available for server-side rendering
// Dependencies
import React, { Component, Fragment /* , lazy, Suspense */ } from 'react'
import { connect } from 'react-redux'
// API
import GetAllUsers, { GetUserInfo } from '@api/Users'
// Context
import { UsersProvider } from '@context/Users'
// Components
import Navbar from '@sharedComponents/Navbar'
import User from '@components/Users'
import UserForm from '@components/Users/UserForm'

// Flow Props and Types
type Props = {
  isMobile: boolean
}
type State = {
  users?: Array<mixed>,
  userData?: Object
}

class Users extends Component<Props, State> {
  state = {
    users: [],
    userData: {}
  }

  componentDidMount() {
    GetAllUsers().then(data => {
      if (data !== false) {
        this.setState({ users: data })
      } else {
        // TODO Add Message
        console.log('error') // eslint-disable-line
      }
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    const user = event.target.elements.username.value
    if (user) {
      GetUserInfo(user).then(data => {
        if (data !== false) {
          this.setState({ userData: data })
        } else {
          // TODO Add Message
          console.log('error') // eslint-disable-line
        }
      })
    }
  }

  render() {
    const { users, userData }: Object = this.state

    return (
      <Fragment>
        <Navbar />
        <div>
          <h1>Users</h1>
        </div>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <UserForm getUser={this.handleSubmit} />
        <UsersProvider value={{ userData, users }}>
          <User {...this.props} />
        </UsersProvider>
        {/* </Suspense> */}
      </Fragment>
    )
  }
}

export default connect(
  ({ device }) => ({
    isMobile: device.isMobile
  }),
  null
)(Users)
