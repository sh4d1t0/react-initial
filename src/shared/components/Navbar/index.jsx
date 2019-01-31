/* @flow */
// dependencies
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
// styles
import styles from './Navbar.scss'

function Home() {
  return (
    <Fragment>
      <div className={styles.navbar}>
        {'Home - '}
        <Link to="/about">About</Link>
        {' - '}
        <Link to="/blog">Blog</Link>
        {' - '}
        <Link to="/users">Users</Link>
      </div>
    </Fragment>
  )
}

export default Home
