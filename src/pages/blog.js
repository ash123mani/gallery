import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { isMobile } from 'react-device-detect'

import SEO from '../components/SEO'
import BlogCard from '../shared/blog-cards'
import shareImage from '../static/shareImage.jpeg'
import LandingLayout from '../shared/landing-layout'

import {
  Wrapper,
  BlogCards,
  Author,
  Title,
  RightContentContainer,
  cuCss,
} from '../styles/pages/blog'

const BlogPage = ({ data, location }) => {
  const [selectedCategory] = useState('all')
  const contentfulBlogPosts = data.allContentfulBlogPosts.edges
  const pathName = location.pathname
  const pageHeadingData = data.contentfulBlogHome

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
        image={shareImage}
        title="Perspective - We share our ideas here holding our perspectives."
        description="We beleive in sharing our perspective, ideas, music and anything, because we on Falak believe in exploring things without bias."
      />
      <Wrapper>
        <LandingLayout
          title={pageHeadingData.title}
          // rightContent={rightContent}
          showDownArrow={!isMobile}
          pathName={pathName}
          showDivider={false}
        />
        {/* {!isMobile && <ButtonWrapper>{renderButtons()}</ButtonWrapper>} */}
        <BlogCards id="bottom">{renderRightContent()}</BlogCards>
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
