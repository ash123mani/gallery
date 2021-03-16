import React from 'react'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import { bool } from 'prop-types'
import { Box } from 'rebass'

import NewLogo from '../shared/NewLogo'
import Navigator from '../shared/Navigator'

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0rem 15rem;
  width: 100%;
  align-items: center;
  height: 170px;
`

const LogoContainer = styled(Box)`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    height: 170px;
    width: 1px;
    background: #d3d1d1;
    left: 0px;
    top: -60px;
  }
`

const Menu = ({ hideLinks }) => {
  return (
    <Headroom
      style={{
        zIndex: '300',
        transition: 'all .5s ease-in-out',
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
