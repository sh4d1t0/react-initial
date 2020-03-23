/* @flow */
// Dependencies
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
// Components
import Navbar from '@components/Navbar'

// Flow Props
type Props = {
  isMobile: boolean
}

const Home = (props: Props) => {
  const { isMobile } = props
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {'Home - '}
          {isMobile ? 'mobile' : 'desktop'}
        </title>
        <meta name="description" content="Home component" />
      </Helmet>
      <Navbar />
    </Fragment>
  )
}

export default connect(({ device }) => ({
  isMobile: device.isMobile
}))(Home)
