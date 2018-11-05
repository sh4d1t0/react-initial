/* @flow */
// Dependencies
import { createContext } from 'react'

export const PostContext = createContext<Object>({
  users: () => Array,
  userData: () => Object
})
const PostProvider = PostContext.Provider
const PostConsumer = PostContext.Consumer

export { PostProvider, PostConsumer }
