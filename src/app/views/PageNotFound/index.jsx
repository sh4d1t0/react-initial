import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

// Flow Props
type Props = {
  isMobile: boolean
}

function PageNotFound(props: Props) {
  const { isMobile } = props
  const Title: any = {
    fontSize: '40px'
  }
  const Content: any = {
    textTransform: 'uppercase',
    fontSize: 'smaller'
  }
  const FontShadow: any = {
    textAlign: 'center',
    color: 'white',
    textShadow: '2px 2px 2px #333333'
  }
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {'404 - '}
          {isMobile ? 'mobile' : 'desktop'}
        </title>
      </Helmet>
      <h1 style={Object.assign(Title, FontShadow)}>404</h1>
      <p style={Object.assign(Content, FontShadow)}>
        Oops, the page you are looking for can not be found
      </p>
    </Fragment>
  )
}

export default connect(({ device }) => ({
  isMobile: device.isMobile
}))(PageNotFound)
