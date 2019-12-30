import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Wrapper, Content, ContentBottom } from '../components/Utils'
import FlipppigCard from '../components/animations/FlipppigCard'
import DownArrow from '../components/DownArrow'
import ContentList from '../components/ContentList'

const Article = styled(Box)`
  max-width: 70%;
  p {
    color: var(--black-200);
  }
`

const IndexPage = ({ data }) => {
  const home = data.contentfulHome
  const contentfulGalleries = data.allContentfulGallery.edges

  const Image = node => {
    let alt
    let url
    if (node.data.target.fields) {
      alt = node.data.target.fields.title['en-US']
      url = node.data.target.fields.file['en-US'].url
    }
    return <img alt={alt || ''} src={url || ''} />
  }

  const options = {
    renderNode: {
      'embedded-asset-block': Image,
    },
  }

  return (
    <Wrapper>
      <Content>
        <section>
          <FlipppigCard title={home.title} flippedTitle={home.flipTitle} />
          <Article>{documentToReactComponents(home.body.json, options)}</Article>
          <DownArrow anchor="/#bottom" />
        </section>
      </Content>
      <ContentBottom className="galleries">
        <section id="bottom">
          {contentfulGalleries.map(({ node: gallery }) => {
            return (
              <ContentList
                key={gallery.id}
                image={gallery.heroImage}
                title={gallery.title}
                slug={gallery.slug}
                excerpt={gallery.body}
              />
            )
          })}
        </section>
      </ContentBottom>
    </Wrapper>
  )
}

export const query = graphql`
  query Index {
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
    contentfulHome {
      title
      flipTitle
      body {
        json
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
