/* @flow */
// Dependencies
import { createContext } from 'react'

export const PostsContext = createContext<Object>({
  posts: () => Array
})
const PostsProvider = PostsContext.Provider
const PostsConsumer = PostsContext.Consumer

export { PostsProvider, PostsConsumer }
