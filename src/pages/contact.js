import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'

import LandingLayout from '../shared/LandingLayout'

const Wrapper = styled(Box)`
  /* padding: 0rem 15rem; */
  height: calc(100vh - 190px);
  width: 100%;
`

import ContactInfo from '../components/ContactInfo'
import SEO from '../components/SEO'

import shareImage from '../static/shareImage.jpeg'

import { infoArr } from '../constants/contactInfo'

const Contact = () => {
  return (
    <>
      <SEO title="CONTACT" image={shareImage} />
      <Wrapper>
        <section>
          <LandingLayout
            title="Hi You want to contact me are you mad!!!"
            body="You Want Body as well"
            rightContent={() => <ContactInfo infoArr={infoArr} />}
          />
        </section>
      </Wrapper>
    </>
  )
}

export default Contact
