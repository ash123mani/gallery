import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { Box, Flex } from 'rebass'

import SEO from '../components/SEO'
import BlogCard from '../shared/BlogCard'
import Button from '../shared/Button'

import shareImage from '../static/shareImage.jpeg'
import categories from '../constants/categories'

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-left: 1px solid #d3d1d1;
  /* grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 20px; */
`

const BlogCards = styled(Box)`
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 6rem !important;
  padding-left: 6rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 20px;
`

const ButtonWrapper = styled(Flex)`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  position: sticky;
  z-index: 1000;
  padding: 2rem 6rem;
  background: #7d757524;
`

const cuCss = css`
  margin-bottom: 4rem;
  /* margin-right: 1rem; */
`

const BlogPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const contentfulBlogPosts = data.allContentfulBlogPosts.edges

  const setCategory = category => setSelectedCategory(category)

  const renderRightContent = () => {
    return (
      <>
        {contentfulBlogPosts.map(({ node }) => {
          console.log('node', node)
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

  const renderButtons = () => {
    return Object.values(categories).map(category => (
      <Button
        key={category}
        style={{ marginRight: '20px', zIndex: '20' }}
        onClick={() => setCategory(category.name)}
        selected={category.name === category}
      >
        {category.label}
      </Button>
    ))
  }

  return (
    <>
      <SEO image={shareImage} />
      <Wrapper>
        <ButtonWrapper>{renderButtons()}</ButtonWrapper>
        <BlogCards>{renderRightContent()}</BlogCards>
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
