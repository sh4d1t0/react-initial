/* @flow */
// components
import Home from 'Components/Home'
import About from 'Components/About'
// views
import Blog from 'Views/Blog'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: false
  },
  {
    path: '/blog',
    component: Blog,
    exact: false
  }
]

export default routes
