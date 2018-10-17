/* @flow */
// Utils
import { apiFetch } from 'SharedUtils/api'
// Constants
import API from './constants'

class BlogApi {
  static getAllPosts(query: any = {}, fetchingFrom: string = 'client'): any {
    return apiFetch(API.BLOG.POSTS, { fetchingFrom }, query)
  }
}

export default BlogApi
