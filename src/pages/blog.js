import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Wrapper, Content, Article, ContentBottom } from '../components/Utils'
import FlipppigCard from '../components/animations/FlipppigCard'
import DownArrow from '../components/DownArrow'
import BlogsList from '../components/ContentList'

import SEO from '../components/SEO'

import shareImage from '../static/shareImage.jpeg'

const BlogPage = ({ data, location }) => {
  const blogHome = data.contentfulBlogHome
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
      <SEO image={shareImage} />
      <Wrapper>
        <Content>
          <section>
            <FlipppigCard title={blogHome.title} flippedTitle={blogHome.flipTilte} />
            <Article>{documentToReactComponents(blogHome.body.json, options)}</Article>
            <DownArrow anchor={location.pathname + '#bottom'} />
          </section>
        </Content>
        <ContentBottom className="blogPosts">
          <section id="bottom">
            {contentfulBlogPosts.map(({ node }) => (
              <BlogsList
                blogPosts
                key={node.id}
                slug={node.slug}
                title={node.homepage}
                excerpt={node.excerpt}
                publishDate={node.publishedDate}
                image={node.heroImage}
                tag={node.tags.split(' ')[0]}
              />
            ))}
          </section>
        </ContentBottom>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query Blog {
    contentfulBlogHome {
      title
      flipTilte
      body {
        json
      }
    }

    allContentfulBlogPosts(sort: { fields: [publishedDate], order: DESC }) {
      edges {
        node {
          id
          slug
          homepage
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

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
}

export default BlogPage
