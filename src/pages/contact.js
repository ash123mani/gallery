import React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'

import ContactInfo from '../components/ContactInfo'

import { infoArr } from '../constants/contactInfo'

const Wrapper = styled(Flex)`
  flex-direction: column;
  height: calc(100vh - 151px);
  padding: 0 15rem;
`

const Contact = () => {
  return (
    <Wrapper>
      <ContactInfo infoArr={infoArr} />
    </Wrapper>
  )
}

export default Contact
