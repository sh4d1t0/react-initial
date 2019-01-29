/* @flow */
// Dependencies
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
// Components
import Navbar from 'SharedComponents/Navbar'
// Styles
// import styles from './Home.scss'

// Flow Props
type Props = {
  isMobile: boolean
}
function Home(props: Props) {
  const { isMobile } = props
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {'Home - '}
          {isMobile ? 'mobile' : 'desktop'}
        </title>
      </Helmet>
      <Navbar />
    </Fragment>
  )
}

export default connect(({ device }) => ({
  isMobile: device.isMobile
}))(Home)
