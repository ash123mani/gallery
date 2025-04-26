import React from 'react'
import { object, shape, string } from 'prop-types'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import SEO from '../components/SEO'
import options from '../components/blogElements/BlogElements'
import { SectionInMiddle } from '../components/Utils'
import InfoCard from '../shared/info-card'

import { Wrapper } from '../styles/pages/contact'

const AboutDeatils = ({ data }) => {
  const {
    contentfulAboutDetails: { mainHeading, infoCards },
    seoTitle,
  } = data

  return (
    <>
      <SEO title={seoTitle} />
      <Wrapper>
        <SectionInMiddle>{documentToReactComponents(mainHeading.json, options)}</SectionInMiddle>
        {Array.isArray(infoCards) &&
          infoCards.map((exp, index) => {
            const {
              info: { json: workExpRichJson },
              imageSrc,
              id,
              knowMoreText,
              cardIdUsedForNavigation,
            } = exp

            const direction = index % 2 === 0 ? 'row' : 'reverse'
            const fImage = (imageSrc || [])[0]
            return (
              <SectionInMiddle key={id} id={cardIdUsedForNavigation}>
                <InfoCard
                  richTextJson={workExpRichJson}
                  imageSrc={fImage}
                  knowMoreText={knowMoreText}
                  direction={direction}
                  showRedirect={false}
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
          fluid(maxWidth: 400, maxHeight: 320) {
            ...GatsbyContentfulFluid_withWebp
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        cardIdUsedForNavigation
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
