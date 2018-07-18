/* @flow */
// dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// styles
import styles from './Home.scss'

type Props = {
  /******/
}

class Home extends Component<Props> {
  render(): any {
    return (
      <div className={styles.home}>
        Home - <Link to="/about">About</Link> - <Link to="/blog">Blog</Link>
      </div>
    )
  }
}

export default Home
