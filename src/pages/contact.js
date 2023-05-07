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
  const { title: exTitle, items } = experienceSummary

  return (
    <>
      <SEO title={seoTitle} />
      <Wrapper {...scrollRestoration}>
        <SectionInMiddle>{documentToReactComponents(mySummary.json, options)}</SectionInMiddle>
        <SectionInMiddle id="tools-and-technologies">
          <StyledTitle as="h2">{exTitle}</StyledTitle>
          <AllBadges>
            {items.map(({ title, tags }) => {
              return (
                <BadgeRow key={title}>
                  <TechTitle>{title}</TechTitle>
                  <BadgesContainer>
                    {tags.map(tag => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </BadgesContainer>
                </BadgeRow>
              )
            })}
          </AllBadges>
        </SectionInMiddle>
        {workExperience.map((exp, index) => {
          const {
            info: { json: workExpRichJson },
            imageSrc,
            id,
            redirectUrl,
            knowMoreText,
            cardIdUsedForNavigation,
          } = exp

          const fImage = (imageSrc || [])[0]
          const direction = index % 2 === 0 ? 'row' : 'reverse'
          return (
            <SectionInMiddle key={id} id={cardIdUsedForNavigation}>
              <InfoCard
                richTextJson={workExpRichJson}
                imageSrc={fImage}
                redirectUrl={`/about${redirectUrl}`}
                knowMoreText={knowMoreText}
                direction={direction}
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
        json
      }
      experienceSummary {
        title
        items {
          title
          tags
        }
      }
      workExperience {
        id
        info {
          json
        }
        imageSrc {
          title
          description
          fluid(maxWidth: 320, quality: 100) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_tracedSVG
          }
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
