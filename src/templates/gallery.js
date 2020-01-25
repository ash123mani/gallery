import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Wrapper, Content, Article, ContentBottom } from '../components/Utils'
import FlipppigCard from '../components/animations/FlipppigCard'
import DownArrow from '../components/DownArrow'
import GalleryGrid from '../components/GalleryGrid'

export const query = graphql`
  query($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      id
      title
      slug
      flipTitle
      placeDescription
      publishedDate
      body {
        json
      }
      subGalleries {
        __typename
        ... on ContentfulSubGallery {
          slug
          title
          id
          images {
            id
            title
            fluid(maxWidth: 1600, quality: 50) {
              ...GatsbyContentfulFluid_withWebp
              src
              srcSet
              aspectRatio
            }
            thumbnail: fluid(maxWidth: 500, quality: 20) {
              ...GatsbyContentfulFluid_withWebp
              src
              aspectRatio
            }
          }
        }
      }
    }
  }
`

const Gallery = ({ data, location }) => {
  const gallery = data.contentfulGallery
  const subGalleries = data.contentfulGallery.subGalleries

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
          <FlipppigCard
            title={gallery.title}
            flippedTitle={gallery.flipTitle}
            placeDescription={gallery.placeDescription}
          />
          <Article>{documentToReactComponents(gallery.body.json, options)}</Article>
          <DownArrow anchor={`${location.pathname}/#bottom`} />
        </section>
      </Content>
      <ContentBottom>
        <section id="bottom" className="gallery-section">
          {subGalleries.map((subGallery, index) => (
            <div key={index}>
              {subGallery.__typename === 'ContentfulSubGallery' && (
                <GalleryGrid
                  key={subGallery.id}
                  slug={subGallery.slug}
                  images={subGallery.images}
                  title={subGallery.title}
                  itemsPerRow={[2, 2, 3, 5]}
                  parent={gallery.title}
                />
              )}
            </div>
          ))}
        </section>
      </ContentBottom>
    </Wrapper>
  )
}

Gallery.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
}

export default Gallery
