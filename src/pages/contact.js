import React from 'react'
import { object } from 'prop-types'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import SEO from '../components/SEO'
import options from '../components/blogElements/BlogElements'
import { SectionInMiddle } from '../components/Utils'
import Badge from '../shared/badge'

import {
  Wrapper,
  AllBadges,
  BadgeRow,
  BadgesContainer,
  StyledTitle,
  TechTitle,
} from '../styles/pages/contact'

const Contact = ({ data }) => {
  console.log('data', data)

  const {
    contentfulAbout: { mySummary, experienceSummary },
    seoTitle,
  } = data
  const { title: exTitle, items } = experienceSummary

  return (
    <>
      <SEO title={seoTitle} />
      <Wrapper>
        <SectionInMiddle>{documentToReactComponents(mySummary.json, options)}</SectionInMiddle>
        <SectionInMiddle>
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
    }
  }
`

Contact.propTypes = {
  data: object.isRequired,
}

export default Contact
