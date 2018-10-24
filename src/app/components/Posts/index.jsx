/* @flow */
// dependencies
import React, { Component } from 'react'
import timeAgo from 'node-time-ago'
import { WrapperConsumer } from 'Features/blog'
// styles
import styles from './Posts.less'

// Flow Props
type Props = {
  context: Object,
  userData: {}
}

class Posts extends Component<Props> {
  componentDidMount() {
    // console.log(this.props)
  }

  render() {
    const {
      context: { userData }
    } = this.props

    return (
      <div className={styles.posts}>
        <div className={styles.header}>
          <h1>Blog</h1>
        </div>

        <div key={userData.id} className={styles.posts}>
          <p>
            <img src={userData.avatar_url} alt="" width="100" height="100" />
            <br />
            {userData.name}
            <br />
            {'Repositorios Publicos: '}
            {userData.public_repos}
          </p>
          <p>{timeAgo(userData.created_at)}</p>
        </div>
      </div>
    )
  }
}

export default WrapperConsumer(Posts)
