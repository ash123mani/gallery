import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Flex } from 'rebass'

import { Wrapper, Content } from './Utils'

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

const Footer = props => {
  console.log('props', props)
  return (
    <Wrapper>
      <Content className="footer">
        <section id="bottom">
          <h1>
            Conquer the devils with a little thing called love.
            <br /> - Bob Marley
          </h1>
          <br />
          <br />
          <FooterContent>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/#bottom">Gallery</StyledLink>
            <StyledLink to="/#home-blog">Blogs</StyledLink>
            <StyledLink to="/contact">Contacts</StyledLink>
          </FooterContent>
        </section>
      </Content>
    </Wrapper>
  )
}

Footer.propTypes = {
  infoArr: PropTypes.array.isRequired,
}

export default Footer
