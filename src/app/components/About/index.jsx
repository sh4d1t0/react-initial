/* @flow */
// Dependencies
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
// Components
import Navbar from '@sharedComponents/Navbar'
// Styles
import styled from 'styled-components'

// Flow Props
type Props = {
  isMobile: boolean
}

function About(props: Props) {
  const { isMobile } = props

  const Paragraph = styled.p`
    font-size: 2em;
    color: red;
  `

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {'About - '}
          {isMobile ? 'mobile' : 'desktop'}
        </title>
        <meta name="description" content="About component" />
      </Helmet>
      <Navbar />
      <Paragraph>About</Paragraph>
    </Fragment>
  )
}

export default connect(({ device }) => ({
  isMobile: device.isMobile
}))(About)
