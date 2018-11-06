/* @flow */
// dependencies
import React from 'react'
import Link from 'react-router-dom/Link'
// styles
import styles from './Navbar.scss'

function Home() {
  return (
    <div className={styles.navbar}>
      {'Home - '}
      <Link to="/about">About</Link>
      {' - '}
      <Link to="/blog">Blog</Link>
      {' - '}
      <Link to="/users">Users</Link>
    </div>
  )
}

export default Home
