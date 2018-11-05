/* @flow */
// dependencies
import React from 'react'
import Link from 'react-router-dom/Link'
// styles
import styles from './Home.scss'

function Home() {
  return (
    <div className={styles.home}>
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
