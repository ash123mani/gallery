import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Wrapper, Content, Article, ContentBottom } from '../components/Utils'
import FlipppigCard from '../components/animations/FlipppigCard'
import DownArrow from '../components/DownArrow'
import options from '../components/blogElements/BlogElements'

const PostSection = styled.section`
  padding: 0 24rem !important;
`

const Blogs = ({ data, location }) => {
  const post = data.contentfulBlogPosts

  console.log('contentfulBlogPosts', post)

  return (
    <Wrapper>
      <Content>
        <section>
          <FlipppigCard title={post.homepage} flippedTitle="Blog Post" />
          <Article>
            <p>{post.excerpt}</p>
          </Article>
          <DownArrow anchor={`${location.pathname}/#bottom`} />
        </section>
      </Content>
      <ContentBottom className="blogPost">
        <PostSection id="bottom" className="post">
          {documentToReactComponents(post.body.json, options)}
        </PostSection>
      </ContentBottom>
    </Wrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPosts(slug: { eq: $slug }) {
      id
      homepage
      slug
      publishedDate(formatString: "MMMM DD, YYYY")
      tags
      heroImage {
        title
        fluid(maxWidth: 1600, quality: 50) {
          ...GatsbyContentfulFluid_withWebp
          src
        }
        ogimg: fluid(maxWidth: 900, quality: 50) {
          ...GatsbyContentfulFluid_withWebp
          src
        }
      }
      excerpt
      body {
        json
      }
    }
  }
`

Blogs.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
}

export default Blogs
