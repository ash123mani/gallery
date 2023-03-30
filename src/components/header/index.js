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
      {!hideLinks && <Navigator to="/contact">Say Hi/🙏</Navigator>}
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
