/* @flow */
// components
import Home from '../app/components/Home'
import About from '../app/components/About'

// views
import Blog from '../app/views/Blog'

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
  }
]

export default routes
