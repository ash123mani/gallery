import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import BlogCard from '../shared/blog-cards'

import {
  Wrapper,
  BlogCards,
  Author,
  Title,
  RightContentContainer,
  cuCss,
} from '../styles/pages/blog'

const BlogPage = ({ data }) => {
  const [selectedCategory] = useState('all')
  const contentfulBlogPosts = data.allContentfulBlogPosts.edges
  const pageHeadingData = data.contentfulBlogHome

  console.log('blogPostHome', pageHeadingData)

  const renderRightContent = () => {
    return (
      <>
        {contentfulBlogPosts.map(({ node }) => {
          const blogCard = (
            <BlogCard
              blogPosts
              key={node.id}
              id={node.id}
              slug={node.slug}
              title={node.homepage}
              excerpt={node.excerpt}
              publishDate={node.publishedDate}
              image={node.heroImage}
              tag={node.tags.split(' ')[0]}
              className="blog"
              widthType={node.blogWidthClass}
              css={cuCss}
            />
          )

          if (node.content === selectedCategory || selectedCategory === 'all') {
            return blogCard
          }

          return null
        })}
      </>
    )
  }

  // eslint-disable-next-line no-unused-vars
  const rightContent = () => {
    return (
      <RightContentContainer>
        <Title>{pageHeadingData.flipTilte}</Title>
        <Author> -Steve Jobs</Author>
      </RightContentContainer>
    )
  }

  return (
    <>
      <SEO
        image={pageHeadingData.heroImage.fluid.src}
        title={pageHeadingData.seoTitle}
        description={pageHeadingData.seoDescription}
      />
      <Wrapper>
        {/* <Title>Explore falak...</Title> */}
        <BlogCards id="bottom">{renderRightContent()}</BlogCards>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query Blog {
    contentfulBlogHome {
      title
      body {
        json
      }
      heroImage {
        title
        fluid(quality: 65, maxHeight: 200) {
          ...GatsbyContentfulFluid_withWebp
        }
        ogimg: fluid(maxWidth: 900, quality: 50) {
          ...GatsbyContentfulFluid_withWebp
          src
        }
      }
      seoTitle
      seoDescription
    }

    allContentfulBlogPosts(sort: { fields: [publishedDate], order: DESC }) {
      edges {
        node {
          id
          slug
          homepage
          blogWidthClass
          content
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
  location: PropTypes.object.isRequired,
}

export default BlogPage
