import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Box } from 'rebass'
import { object } from 'prop-types'

import LandingLayout from '../../shared/landing-layout'
import BlogCard from '../../shared/blog-cards'

const Wrapper = styled(Box)`
  /* height: calc(100vh - 170px); */
  width: 100%;

  @media only screen and (max-width: 768px) {
    & {
      height: 100%;
    }
  }
`

const Gallery = ({ data }) => {
  const contentfulGalleries = data.allContentfulGallery.edges

  const renderRightContent = () => {
    return contentfulGalleries.map(({ node: gallery }) => {
      return (
        <BlogCard
          key={gallery.id}
          image={gallery.heroImage}
          title={gallery.title}
          slug={gallery.slug}
          excerpt={gallery.body}
        />
      )
    })
  }

  return (
    <Wrapper>
      <LandingLayout
        title="Welcome here, where crazy things happer"
        body="I am body"
        rightContent={renderRightContent}
      />
    </Wrapper>
  )
}

export const query = graphql`
  query Gallery {
    allContentfulGallery {
      edges {
        node {
          id
          title
          slug
          publishedDate
          heroImage {
            title
            fluid(quality: 50, maxHeight: 200) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          body {
            json
          }
        }
      }
    }
  }
`

Gallery.propTypes = {
  data: object.isRequired,
}

export default Gallery
