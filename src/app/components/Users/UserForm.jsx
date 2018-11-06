/* @flow */
import React from 'react'
// Dependendicies
import styles from './Users.scss'

// Flow Props
type Props = {
  getUser: mixed
}

function UserForm(props: Props) {
  const { getUser } = props

  return (
    <form onSubmit={getUser}>
      <input type="text" name="username" className={styles.input} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserForm
