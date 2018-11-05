/* @flow */
// TODO: lazy is not yet available for server-side rendering
// Dependencies
import React, { Component, Fragment /* , lazy, Suspense */ } from 'react'
import GetAllUsers, { GetUserInfo } from 'Api/Users'
import { UsersProvider } from 'Context/Users'
// Components
import User from 'Components/Users'

// Flow Props and Types
type Props = {
  /** */
}
type State = {
  posts?: Array<mixed>,
  users?: Array<mixed>,
  userData?: Object
}

class Users extends Component<Props, State> {
  state = {
    users: [],
    userData: {}
  }

  componentDidMount() {
    GetUserInfo().then(data => {
      if (data !== false) {
        this.setState({ userData: data })
      } else {
        // TODO Add Message
        console.log('error') // eslint-disable-line
      }
    })
    GetAllUsers().then(data => {
      if (data !== false) {
        this.setState({ users: data })
      } else {
        // TODO Add Message
        console.log('error') // eslint-disable-line
      }
    })
  }

  /* shouldComponentUpdate(prevState, nextState) {
    console.log('prevS', prevState)
    console.log('nextS', nextState)
  } */

  render() {
    const { users, userData }: Object = this.state

    return (
      <Fragment>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <UsersProvider value={{ userData, users }}>
          <User {...this.props} />
        </UsersProvider>
        {/* </Suspense> */}
      </Fragment>
    )
  }
}

export default Users
