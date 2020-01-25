import React from 'react'
import { Box } from 'rebass'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import Styles from './Styles'
import Menu from './Menu'
import Footer from './Footer'

import theme from '../styles/theme'
import { infoArr } from '../constants/contactInfo'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
  })
}

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Styles />
      <ThemeProvider theme={theme}>
        <Box>
          <Menu />
        </Box>
        <Box>{children}</Box>
        <Footer infoArr={infoArr} />
      </ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
