/* @flow */
// Dependencies
import { createContext } from 'react'

export const Context = createContext<Object>({
  userData: () => Object,
  users: () => Array
})
const PostProvider = Context.Provider
const PostConsumer = Context.Consumer

export { PostProvider, PostConsumer }
