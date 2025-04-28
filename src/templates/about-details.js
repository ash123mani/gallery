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

  const mainHeadingJson = JSON.parse(mainHeading.raw)

  return (
    <>
      <SEO title={seoTitle} />
      <Wrapper>
        <SectionInMiddle>{documentToReactComponents(mainHeadingJson, options)}</SectionInMiddle>
        {Array.isArray(infoCards) &&
          infoCards.map((exp, index) => {
            const {
              info,
              imageSrc,
              id,
              knowMoreText,
              cardIdUsedForNavigation,
            } = exp

            const richTextJson = JSON.parse(info.raw)
            const direction = index % 2 === 0 ? 'row' : 'reverse'
            
            return (
              <SectionInMiddle key={id} id={cardIdUsedForNavigation}>
                <InfoCard
                  richTextJson={richTextJson}
                  imageSrc={imageSrc}
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
        raw
      }
      infoCards {
        id
        info {
          raw
        }
        imageSrc {
          title
          description
          gatsbyImageData(
            quality: 90
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 800
            formats: [AUTO, WEBP, AVIF]
          )
        }
        knowMoreText
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
