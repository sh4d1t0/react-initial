// dependencies
import React from 'react'
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import routes from '@routes'
/* import ContextStore from 'Features/blog' */
// routes

const App = ({ server, location, context }) => {
  const routesMap = routes.map(route => (
    <Route
      key={route.path.toString()}
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} />}
    />
  ))

  // client router
  let router = (
    <BrowserRouter>
      <Switch>{routesMap}</Switch>
    </BrowserRouter>
  )

  // server router
  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        <Switch>{routesMap}</Switch>
      </StaticRouter>
    )
  }

  return <div>{router}</div>
}

export default hot(App)
