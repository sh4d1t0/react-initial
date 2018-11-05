/* @flow */
// Dependencies
import { createContext } from 'react'

export const UsersContext = createContext<Object>({
  users: () => Array,
  userData: () => Object
})
const UsersProvider = UsersContext.Provider
const UsersConsumer = UsersContext.Consumer

export { UsersProvider, UsersConsumer }
