/* @flow */
// dependencies
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
// styles
import styles from './About.css'

function About() {
  return (
    <Row>
      <Col xs={12} md={12}>
        <p className={styles.about}>About</p>
      </Col>
      <Col xs={12} md={12}>
        <Button bsStyle="primary">Cerrar</Button>
      </Col>
    </Row>
  )
}

export default About
