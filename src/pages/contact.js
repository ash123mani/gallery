import React from 'react'

import LandingLayout from '../shared/landing-layout'
import ContactInfo from '../components/contact/contact-info'
import SEO from '../components/SEO'
import shareImage from '../static/shareImage.jpeg'
import { infoArr } from '../config/contactInfo'

import { Wrapper } from '../styles/pages/contact'

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
