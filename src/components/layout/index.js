import React from 'react'
import { Box } from 'rebass'
import { object, bool, string } from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { isMobile } from 'react-device-detect'

import theme from '../../styles/theme'
import { infoArr } from '../../config/contactInfo'

import Styles from '../Styles'
import Menu from '../header'
import Footer from '../footer'

import { Content } from './styles'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
  })
}

const Layout = ({ children, ...props }) => {
  const { path } = props
  const hideLinks = path === '/' && !isMobile

  return (
    <React.Fragment>
      <Styles />
      <ThemeProvider theme={theme}>
        <Box>
          <Menu hideLinks={hideLinks} />
        </Box>
        <Content>{children}</Content>
        <Footer infoArr={infoArr} />
      </ThemeProvider>
      {/* <AnimatedBird /> */}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: object,
  addLayout: bool,
  path: string.isRequired,
}

Layout.defaultProps = {
  children: null,
  addLayout: true,
}

export default Layout
