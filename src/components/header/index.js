import React from 'react'
import { bool } from 'prop-types'

import NewLogo from '../../shared/logo'
import Navigator from '../../shared/navigator'
// import SelectView from '../../shared/select-view'

import { Container, LogoContainer, RightContent } from './styles'

const Menu = () => {
  return (
    <Container>
      <LogoContainer>
        <NewLogo />
      </LogoContainer>
      {/* {!hideLinks && <Navigator to="/contact">Say Hi/🙏</Navigator>} */}
      <RightContent>
        {/* <SelectView /> */}
        <Navigator to="/contact">About Me</Navigator>
      </RightContent>
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
