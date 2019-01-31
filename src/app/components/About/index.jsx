/* @flow */
// Dependencies
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
// Components
import Navbar from '@sharedComponents/Navbar'
// Styles
import styles from './About.css'

// Flow Props
type Props = {
  isMobile: boolean
}

function About(props: Props) {
  const { isMobile } = props
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {'About - '}
          {isMobile ? 'mobile' : 'desktop'}
        </title>
      </Helmet>
      <Navbar />
      <div className={styles.about}>About</div>
    </Fragment>
  )
}

export default connect(({ device }) => ({
  isMobile: device.isMobile
}))(About)
