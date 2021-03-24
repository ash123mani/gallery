import React from 'react'
import Headroom from 'react-headroom'
import { bool } from 'prop-types'

import NewLogo from '../../shared/logo'
import Navigator from '../../shared/navigator'

import { Container, LogoContainer } from './styles'

const Menu = ({ hideLinks }) => {
  return (
    <Headroom
      style={{
        zIndex: '300',
        transition: 'all .5s ease-in-out',
        // position: 'fixed',
      }}
    >
      <Container>
        <LogoContainer>
          <NewLogo />
        </LogoContainer>
        {!hideLinks && (
          <p>
            {/* <Navigator to="/gallery">Gallery</Navigator> */}
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <Navigator to="/blog">Blog</Navigator>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Navigator to="/contact">Contact</Navigator>
          </p>
        )}
      </Container>
    </Headroom>
  )
}

Menu.propTypes = {
  hideLinks: bool,
}

Menu.defaultProps = {
  hideLinks: false,
}

export default Menu
