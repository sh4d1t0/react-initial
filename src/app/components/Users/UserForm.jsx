/* @flow */
import React, { Fragment } from 'react'
// Dependendicies
import styled from 'styled-components'

// Flow Props
type Props = {
  getUser: mixed
}

function UserForm(props: Props) {
  const { getUser } = props

  const Input = styled.input`
    display: block;
  `

  const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    &.primary {
      background: palevioletred;
      color: white;
    }
  `

  return (
    <Fragment>
      <form onSubmit={getUser}>
        <Input type="text" name="username" />
        <Button className="primary">Submit</Button>
      </form>
    </Fragment>
  )
}

export default UserForm
