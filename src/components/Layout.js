import React from 'react'
import { Box, Flex } from 'rebass'
import { object, bool, string } from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import Styles from './Styles'
import Menu from './Menu'
import Footer from './Footer'

import theme from '../styles/theme'
import { infoArr } from '../constants/contactInfo'
// import AnimatedBird from '../shared/AnimatedBirds'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
  })
}

export const Content = styled(Flex)`
  /* padding: 10rem 0; */
  align-items: center;
  padding: 0rem 15rem;
`

const Layout = ({ children, ...props }) => {
  const { path } = props
  const hideLinks = path === '/'

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
