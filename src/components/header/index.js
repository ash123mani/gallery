import React from 'react'
import { bool } from 'prop-types'

import NewLogo from '../../shared/logo'
import Navigator from '../../shared/navigator'

import { Container, LogoContainer } from './styles'

const Menu = ({ hideLinks }) => {
  return (
    <Container>
      <LogoContainer>
        <NewLogo />
      </LogoContainer>
      {!hideLinks && (
        <p>
          {/* <Navigator to="/gallery">Gallery</Navigator> */}
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          {/* <Navigator to="/blog">Perspective</Navigator> */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Navigator to="/contact">Say Hi/🙏</Navigator>
        </p>
      )}
    </Container>
  )
}

Menu.propTypes = {
  hideLinks: bool,
}

Menu.defaultProps = {
  hideLinks: false,
}

export default Menu
