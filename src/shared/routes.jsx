/* @flow */
// components
import Home from '@components/Home'
import About from '@components/About'
// views
import Blog from '@views/Blog'
import Users from '@views/Users'
import noMatch from '@views/PageNotFound'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '*',
    component: noMatch
  }
]

export default routes
