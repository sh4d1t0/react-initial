/* @flow */
// components
import Home from 'Components/Home'
import About from 'Components/About'
// views
import Blog from 'Views/Blog'
import Users from 'Views/Users'

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
  }
]

export default routes
