import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import styled from 'styled-components'

// Flow Props
type Props = {
  isMobile: boolean
}

function PageNotFound(props: Props) {
  const { isMobile } = props
  const Title = styled.h1`
    font-size: 40px;

    &.fontShadow {
      text-align: center;
      color: white;
      text-shadow: 2px 2px 2px #333333;
    }
  `
  const Content = styled.p`
    text-align: center;
    text-transform: uppercase;
    font-size: smaller;
  `
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {'404 - '}
          {isMobile ? 'mobile' : 'desktop'}
        </title>
      </Helmet>
      <Title className="fontShadow">404</Title>
      <Content>Oops, the page you are looking for can not be found</Content>
    </Fragment>
  )
}

export default connect(({ device }) => ({
  isMobile: device.isMobile
}))(PageNotFound)
