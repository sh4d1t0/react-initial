/* @flow */
// Dependencies
import { createContext } from 'react'

const Context = createContext({ userData: () => {}, users: () => {} })
const PostProvider = Context.Provider
const PostConsumer = Context.Consumer

export { PostProvider, PostConsumer }
