/* @flow */
// Dependencies
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
// Components
import Navbar from 'SharedComponents/Navbar'
// Styles
// import styles from './Home.scss'

function Home() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
    </Fragment>
  )
}

export default Home
