import React from 'react'
import { object, bool, string } from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import { infoArr } from '../../config/contactInfo'

import Styles from '../Styles'
import Menu from '../header'
import Footer from '../footer'

import { Content } from './styles'

// if (typeof window !== 'undefined') {
//   require('smooth-scroll')('a[href*="#"]', {
//     speed: 500,
//     speedAsDuration: true,
//   })
// }

const Layout = ({ children }) => {
  const hideLinks = false

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Styles />
        <div>
          <Menu hideLinks={hideLinks} />
        </div>
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
