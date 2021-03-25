import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Box } from 'rebass'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Article, Title } from '../components/Utils'
import SEO from '../components/SEO'
import options from '../components/blogElements/BlogElements'
import { Content } from '../components/layout/styles'

const Wrapper = styled(Box)`
  padding: 0 0rem 0rem 8rem;
  height: calc(100vh - 190px);
  width: 100%;
  height: 100%;
  border-left: 1px solid var(--border-color);
  padding-top: 10rem;

  ${Content} {
    padding-top: 0px;
  }

  @media only screen and (max-width: 768px) {
    border-left: none !important;
    padding: 0rem;
  }
`

const HeadingContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 86%;
  position: relative;

  @media only screen and (max-width: 768px) {
    margin: 0rem;
    max-width: 100%;
  }
`

const Divider = styled(Box)`
  width: 100%;
  height: 1px;
  background: var(--border-color);
  margin: 6rem 0rem !important;

  @media only screen and (max-width: 768px) {
    margin: 4rem 0rem !important;
  }
`

const PostSection = styled.section`
  max-width: 86%;
  margin-top: 5rem;
  margin-bottom: 18rem;

  @media only screen and (max-width: 768px) {
    padding: 0rem;
    margin: 0rem;
    max-width: 100%;
    margin-top: 2rem;
    margin-bottom: 10rem;
  }
`

const Blogs = ({ data }) => {
  const post = data.contentfulBlogPosts

  return (
    <>
      <SEO image={post.heroImage} title={post.title} description={post.excerpt} />
      <Wrapper>
        <HeadingContainer>
          <Title backgroundColor="#38332e" style={{ margin: '0rem' }}>
            {post.homepage}
          </Title>
          <Article
            style={{
              backgroundColor: 'inherit',
              marginTop: '2rem',
            }}
          >
            {post.excerpt}
          </Article>
        </HeadingContainer>
        <Divider />
        <PostSection id="bottom" className="post">
          {documentToReactComponents(post.body.json, options)}
        </PostSection>
        {/* <Divider /> */}
      </Wrapper>
    </>
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
