import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Flex } from 'rebass'

import { Wrapper, Content } from './Utils'

// import psy from '../static/psy.jpg'

const StyledLink = styled(Link)`
  margin-right: 1.4rem;
  &:last-of-type {
    margin-right: 0px;
  }
  @media screen and (max-width: 768px) {
    &:first-child {
      margin-top: 3rem;
    }
  }
`

const FooterContent = styled(Flex)`
  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
      align-items: center;
      margin-top: 3rem;
    }
  }
`

// const StyledImage = styled.img`
//   height: 100px;
//   width: 100px;
//   margin-bottom: 0px;
// `

const Footer = props => {
  console.log('props', props)
  return (
    <Wrapper>
      <Content className="footer">
        {/* <Flex justifyContent="space-between" width="100%">
          <div></div>
          <StyledImage src={psy} />
        </Flex> */}
        <section id="bottom">
          <h1>Searching for Humanity</h1>
          <FooterContent>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/#bottom">Gallery</StyledLink>
            <StyledLink to="/#home-blog">Blogs</StyledLink>
            <StyledLink to="/contact">Otherside</StyledLink>
          </FooterContent>
        </section>
        {/* <Flex justifyContent="space-between" width="100%">
          <StyledImage src={psy} />
          <div></div>
        </Flex> */}
      </Content>
    </Wrapper>
  )
}

Footer.propTypes = {
  infoArr: PropTypes.array.isRequired,
}

export default Footer
