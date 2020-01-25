import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Wrapper, Content, Article, ContentBottom } from '../components/Utils'
import FlipppigCard from '../components/animations/FlipppigCard'
import DownArrow from '../components/DownArrow'
import ContentList from '../components/ContentList'

const IndexPage = ({ data }) => {
  const home = data.contentfulHome
  const contentfulGalleries = data.allContentfulGallery.edges
  const contentfulBlogPosts = data.allContentfulBlogPosts.edges

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
    <>
      <Wrapper>
        <Content>
          <section>
            <FlipppigCard title={home.title} flippedTitle={home.flipTitle} />
            <Article>{documentToReactComponents(home.body.json, options)}</Article>
            <DownArrow anchor="/#bottom" />
          </section>
        </Content>
        <ContentBottom className="galleries" height="100%">
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
        <>
          <ContentBottom className="blogPosts">
            <section id="home-blog">
              {contentfulBlogPosts.map(({ node }) => (
                <ContentList
                  blogPosts
                  key={node.id}
                  slug={node.slug}
                  title={node.title}
                  excerpt={node.excerpt}
                  publishDate={node.publishedDate}
                  image={node.heroImage}
                  tag={node.tags.split(' ')[0]}
                />
              ))}
            </section>
          </ContentBottom>
        </>
      </Wrapper>
    </>
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

    allContentfulBlogPosts(sort: { fields: [publishedDate], order: DESC }) {
      edges {
        node {
          id
          slug
          body {
            json
          }
          publishedDate(formatString: "d/M/YYYY")
          tags
          heroImage {
            title
            fluid(quality: 65, maxHeight: 200) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          excerpt
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
