/* @flow */
// Dependencies
import React, { Component, createContext } from 'react'
import GetUserInfo, { GetUsers } from 'Features/blog/api'

const Context: Object = createContext()
const ContextConsumer = Context.Consumer
const ContextProvider = Context.Provider

// Flow Props and Types
type Props = {
  comp: Object
}
type State = {
  userData: {
    id: number,
    public_repos: number,
    avatar_url: string,
    name: string,
    created_at: string
  }
}

class ContextStore extends Component<Props, State> {
  state = {
    userData: {
      id: 0,
      public_repos: 0,
      avatar_url: '',
      name: '',
      created_at: ''
    }
  }

  componentDidMount() {
    GetUserInfo().then(data => {
      this.setState({ userData: data })
    })
    GetUsers().then(data => {
      console.log('AllUsers_', data) // eslint-disable-line
    })
  }

  render() {
    const { comp }: Object = this.props
    const { userData }: Object = this.state

    return <ContextProvider value={{ userData }}>{comp}</ContextProvider>
  }
}
// eslint-disable-next-line
const WrapperConsumer = Component => props => (
  <ContextConsumer>
    {context => <Component {...props} context={context} />}
  </ContextConsumer>
)

export default ContextStore
export { WrapperConsumer }
