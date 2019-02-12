/* @flow */
// dependencies
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
// styles
import styled from 'styled-components'

const Navbar = () => {
  const NavBar = styled.div`
    border: 1px solid red;
  `

  return (
    <Fragment>
      <NavBar>
        {'Home - '}
        <Link to="/about">About</Link>
        {' - '}
        <Link to="/blog">Blog</Link>
        {' - '}
        <Link to="/users">Users</Link>
      </NavBar>
    </Fragment>
  )
}

export default Navbar
