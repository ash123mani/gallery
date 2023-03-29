import React from 'react'
import { object } from 'prop-types'
import { graphql } from 'gatsby'

import LandingLayout from '../shared/landing-layout'
import ContactInfo from '../components/contact/contact-info'
import SEO from '../components/SEO'
import { infoArr } from '../config/contactInfo'

import { Wrapper } from '../styles/pages/contact'

const Contact = ({ data }) => {
  const blogHome = data.contentfulContact

  return (
    <>
      <SEO
        image={blogHome.heroImage.fluid.src}
        title={blogHome.seoTitle}
        description={blogHome.seoDescription}
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

export const query = graphql`
  query Contact {
    contentfulContact {
      title
      subtitle {
        subtitle
      }
      heroImage {
        title
        fluid(quality: 65, maxHeight: 200) {
          ...GatsbyContentfulFluid_withWebp
        }
        ogimg: fluid(maxWidth: 900, quality: 50) {
          ...GatsbyContentfulFluid_withWebp
          src
        }
      }
    }
  }
`

Contact.propTypes = {
  data: object.isRequired,
}

export default Contact
