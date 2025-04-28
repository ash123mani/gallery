import React from 'react'
import { object } from 'prop-types'
import { graphql, useScrollRestoration } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import SEO from '../components/SEO'
import options from '../components/blogElements/BlogElements'
import { SectionInMiddle } from '../components/Utils'
import Badge from '../shared/badge'
import InfoCard from '../shared/info-card'

import {
  Wrapper,
  AllBadges,
  BadgeRow,
  BadgesContainer,
  StyledTitle,
  TechTitle,
} from '../styles/pages/contact'

const Contact = ({ data }) => {
  const scrollRestoration = useScrollRestoration(`page-contact`)

  const {
    contentfulAbout: { mySummary, workExperience, experienceSummary },
    seoTitle,
  } = data

  const mySummaryJson = JSON.parse(mySummary.raw)

  return (
    <>
      <SEO title={seoTitle} />
      <Wrapper {...scrollRestoration}>
        <SectionInMiddle>{documentToReactComponents(mySummaryJson, options)}</SectionInMiddle>
        <SectionInMiddle id="tools-and-technologies">
          {experienceSummary && (
            <>
              <StyledTitle as="h2">{experienceSummary.title}</StyledTitle>
              <AllBadges>
                {experienceSummary.items.map(({ title }) => (
                  <BadgeRow key={title}>
                    <TechTitle>{title}</TechTitle>
                    <BadgesContainer />
                  </BadgeRow>
                ))}
              </AllBadges>
            </>
          )}
        </SectionInMiddle>
        {workExperience.map((exp, index) => {
          const {
            info,
            imageSrc,
            id,
            redirectUrl,
            knowMoreText,
            cardIdUsedForNavigation,
          } = exp

          const workExpRichJson = JSON.parse(info.raw)
          const direction = index % 2 === 0 ? 'row' : 'reverse'
          return (
            <SectionInMiddle key={id} id={cardIdUsedForNavigation}>
              <InfoCard
                richTextJson={workExpRichJson}
                imageSrc={imageSrc}
                redirectUrl={`/about${redirectUrl}`}
                knowMoreText={knowMoreText}
                direction={direction}
                showRedirect={!!redirectUrl}
              />
            </SectionInMiddle>
          )
        })}
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query About {
    contentfulAbout {
      seoTitle
      mySummary {
        raw
      }
      experienceSummary {
        title
        items {
          title
        }
      }
      workExperience {
        id
        info {
          raw
        }
        imageSrc {
          title
          description
          gatsbyImageData(quality: 65, layout: CONSTRAINED)
        }
        redirectUrl
        knowMoreText
        cardIdUsedForNavigation
      }
    }
  }
`

Contact.propTypes = {
  data: object.isRequired,
}

export default Contact
