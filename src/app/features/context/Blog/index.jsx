/* @flow */
// Dependencies
import { createContext } from 'react'

export const BlogContext = createContext<Object>({
  isMobile: () => Boolean,
  users: () => Array,
  userData: () => Object,
  posts: () => Array
})
const BlogProvider = BlogContext.Provider
const BlogConsumer = BlogContext.Consumer

export { BlogProvider, BlogConsumer }
