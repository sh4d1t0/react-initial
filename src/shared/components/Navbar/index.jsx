/* @flow */
// dependencies
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
// styles
import styled from 'styled-components'

function Home() {
  const Navbar = styled.div`
    border: 1px solid red;
  `

  return (
    <Fragment>
      <Navbar>
        {'Home - '}
        <Link to="/about">About</Link>
        {' - '}
        <Link to="/blog">Blog</Link>
        {' - '}
        <Link to="/users">Users</Link>
      </Navbar>
    </Fragment>
  )
}

export default Home
