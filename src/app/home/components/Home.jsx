/* @flow */
// dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

// styles
import styles from './Home.scss'

type Props = {
  /** *** */
}

type State = {
  /** *** */
}

class Home extends Component<Props, State> {
  render(): any {
    return (
      <div className={styles.home}>
        <Button color="primary">Home</Button>
        {' - '}
        <Link to="/about">
          <Button>About</Button>
        </Link>
        {' - '}
        <Link to="/blog">
          <Button>Blog</Button>
        </Link>
      </div>
    )
  }
}

export default Home
