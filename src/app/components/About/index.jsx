/* @flow */
// Dependencies
import React, { Fragment } from 'react'
import Navbar from 'SharedComponents/Navbar'
// Styles
import styles from './About.css'

function About() {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.about}>About</div>
    </Fragment>
  )
}

export default About
