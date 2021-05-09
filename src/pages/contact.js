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
      <SEO
        title="Say Hi/🙏!! - Say us hello here."
        description="You can say us hello or you can write to us yoour ideas."
        image={shareImage}
      />
      <Wrapper>
        <section>
          <LandingLayout
            title="Never hesitate to say a Hi/🙏 !!"
            body="On Falak we never ever left any hi unHied, we read every message."
            rightContent={() => <ContactInfo infoArr={infoArr} />}
          />
        </section>
      </Wrapper>
    </>
  )
}

export default Contact
