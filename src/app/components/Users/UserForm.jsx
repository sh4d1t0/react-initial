/* @flow */
import React, { Fragment } from 'react'
// Dependendicies
import styles from './Users.scss'

// Flow Props
type Props = {
  getUser: mixed
}

function UserForm(props: Props) {
  const { getUser } = props

  return (
    <Fragment>
      <form onSubmit={getUser}>
        <input type="text" name="username" className={styles.input} />
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  )
}

export default UserForm
