/* @flow */
// dependencies
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

function About() {
  return (
    <Row>
      <Col xs={12}>
        <div className="About">About</div>
      </Col>
      <Col xs={12}>
        <Button bsStyle="primary">Cerrar</Button>
      </Col>
    </Row>
  )
}

export default About
