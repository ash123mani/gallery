import React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'

import ContactInfo from '../components/ContactInfo'
import SEO from '../components/SEO'

import shareImage from '../static/shareImage.jpeg'

import { infoArr } from '../constants/contactInfo'

const Wrapper = styled(Flex)`
  flex-direction: column;
  height: calc(100vh - 151px);
  padding: 0 15rem;

  @media screen and (max-width: 768px) {
    & {
      height: calc(100vh - 110px);
      padding: 0 2rem;
    }
  }
`

const Contact = () => {
  return (
    <>
      <SEO title="CONTACT" image={shareImage} />
      <Wrapper>
        <ContactInfo infoArr={infoArr} />
      </Wrapper>
    </>
  )
}

export default Contact
