import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import BlogCard from '../shared/blog-cards'
import SelectView from '../shared/select-view'

import { Wrapper, BlogCards, cuCss, ViewContainer } from '../styles/pages/blog'

const BlogPage = ({ data }) => {
  const [selectedCategory] = useState('all')
  const [view, setView] = useState('grid')

  const contentfulBlogPosts = data.allContentfulBlogPosts.edges

  const onViewChange = view => {
    setView(view)
  }

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
              tag={node.tags.split(' ')[0]}
              className="blog"
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

  return (
    <>
      <SEO />
      <Wrapper>
        <ViewContainer>
          <SelectView removeBorder="right" onViewChange={onViewChange} selectedView={view} />
        </ViewContainer>
        <BlogCards id="bottom" view={view}>
          {renderRightContent()}
        </BlogCards>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query Blogs {
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
  location: PropTypes.object.isRequired,
}

export default BlogPage
