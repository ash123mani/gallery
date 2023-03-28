import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Box } from 'rebass'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Article, Title, Divider as CommomDivider } from '../components/Utils'
import SEO from '../components/SEO'
import options from '../components/blogElements/BlogElements'
import { Content } from '../components/layout/styles'

const Wrapper = styled(Box)`
  width: 80%;
  height: 100%;
  margin: 0 auto;

  ${Content} {
    padding-top: 0px;
  }

  @media only screen and (max-width: 1300px) {
    border-left: none !important;
    padding: 0rem;
  }

  @media only screen and (max-width: 768px) {
    width: 96%;
  }
`

const HeadingContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1300px) {
    margin: 0rem;
    max-width: 100%;
    padding: 0px;
  }
`

const PostSection = styled.section`
  /* max-width: 80%;
  margin: 5rem 30rem; */

  @media only screen and (max-width: 1300px) {
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
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        image={post.heroImage.fluid.src}
      />
      <Wrapper>
        <HeadingContainer>
          <Title backgroundColor="#38332e" style={{ margin: '0rem' }}>
            {post.homepage}
          </Title>
          <CommomDivider />
          <Article
            style={{
              backgroundColor: 'inherit',
              marginTop: '2rem',
            }}
          >
            {post.excerpt}
          </Article>
        </HeadingContainer>
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
