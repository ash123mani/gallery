import React from 'react'
import { object, shape, string } from 'prop-types'
import { graphql, useScrollRestoration } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import SEO from '../components/SEO'
import options from '../components/blogElements/BlogElements'
import { SectionInMiddle } from '../components/Utils'
import InfoCard from '../shared/info-card'

import { Wrapper } from '../styles/pages/contact'

const AboutDeatils = ({ data, pathContext }) => {
  const scrollRestoration = useScrollRestoration(`page-about-details-${pathContext.slug}`)

  const {
    contentfulAboutDetails: { mainHeading, infoCards },
    seoTitle,
  } = data

  return (
    <>
      <SEO title={seoTitle} />
      <Wrapper {...scrollRestoration}>
        <SectionInMiddle>{documentToReactComponents(mainHeading.json, options)}</SectionInMiddle>
        {infoCards.map(exp => {
          const {
            info: { json: workExpRichJson },
            imageSrc,
            id,
            redirectUrl,
            knowMoreText,
          } = exp

          const fImage = imageSrc[0]
          return (
            <SectionInMiddle key={id}>
              <InfoCard
                richTextJson={workExpRichJson}
                imageSrc={fImage}
                redirectUrl={redirectUrl}
                knowMoreText={knowMoreText}
              />
            </SectionInMiddle>
          )
        })}
      </Wrapper>
    </>
  )
}

export const aboutDetails = graphql`
  query($slug: String!) {
    contentfulAboutDetails(slug: { eq: $slug }) {
      mainHeading {
        json
      }
      infoCards {
        id
        info {
          json
        }
        imageSrc {
          title
          description
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyContentfulFluid_withWebp
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

AboutDeatils.propTypes = {
  data: object.isRequired,
  pathContext: shape({
    slug: string.isRequired,
  }).isRequired,
}

export default AboutDeatils
