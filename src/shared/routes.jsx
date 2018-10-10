/* @flow */
import Loadable from 'react-loadable'
// components
import Home from '../app/home/components/Home'
/* import About from '../app/about/components/About' */

// containers
import Blog from '../app/blog'

function Loading() {
  return '<div>Cargando...</div>'
}

const AboutComponentPromise = () =>
  import(/* webpackChunkName: "About" */
  /* webpackMode: "lazy" */
  '../app/about/components/About')

const AsyncAboutComponent = Loadable({
  loader: AboutComponentPromise,
  loading: Loading
})

/* const BlogContainerPromise = () =>
  import(
  '../app/blog')

const AsyncBlogComponent = Loadable({
  loader: BlogContainerPromise,
  loading: Loading
}) */

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: AsyncAboutComponent
  },
  {
    path: '/blog',
    component: Blog
  }
]

export default routes
