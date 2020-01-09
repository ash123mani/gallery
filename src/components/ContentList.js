import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { Flex } from 'rebass'
import Img from 'gatsby-image'

const blogPost = props =>
  props.blogPost &&
  css`
    border: 1px solid var(--black-100);
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;

    & > h1 {
      padding: 16px 12px;
      font-weight: 400;
      font-size: 1.8rem;
      color: var(--black-200);
      line-height: 2.4rem;
      flex-grow: 1;
    }
  `

const StyledLink = styled(Link)`
  &:hover:after,
  &:hover:before {
    display: none;
  }
  ${blogPost}
`

const ImageBox = styled(Flex)`
  border: 1px solid var(--black-100);
  border-radius: 2px;
  cursor: pointer;
  flex-direction: column;
  box-shadow: 4px 4px 5px -1px rgba(72, 50, 50, 0.73);

  h4 {
    margin-bottom: 2rem;
  }

  &:hover {
    border-bottom: 1px solid var(--yellow-400);
    transition: all 0.5s;

    h4 {
      align-self: center
      transition: width 0.5s;
      color: var(--yellow-400);
      font-weight: 400;
    }
  }
`

const BlogExtraInfo = styled(Flex)`
  justify-content: space-between;
  bottom: 0;
  border-top: 1px solid var(--black-100);
  /* align-items: center; */

  p {
    padding: 2px;
    border-right: 1px solid var(--black-100);
    position: relative;
    flex-grow: 1;
    text-align: center;
    color: var(--black-200);

    &:last-of-type {
      border-right: none;
    }
  }
`

const ContentList = props => {
  return (
    <React.Fragment>
      <StyledLink
        to={props.blogPosts ? `/blog${props.slug}/` : `${props.slug}/`}
        blogPost={props.blogPosts}
      >
        {!props.blogPosts ? (
          <ImageBox>
            <Img fluid={props.image.fluid} />
            <h4>{props.title}</h4>
          </ImageBox>
        ) : (
          <>
            <Img fluid={props.image.fluid} />
            <h1>{props.excerpt}</h1>
            <BlogExtraInfo>
              <p>{props.tag}</p>
              <p>{props.publishDate}</p>
            </BlogExtraInfo>
          </>
        )}
      </StyledLink>
    </React.Fragment>
  )
}

ContentList.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  blogPosts: PropTypes.bool,
  excerpt: PropTypes.string,
  tag: PropTypes.string,
  publishDate: PropTypes.string,
  timeToRead: PropTypes.string,
}

ContentList.defaultProps = {
  blogPosts: false,
  excerpt: '',
  tag: '',
  publishDate: '',
  timeToRead: '',
  title: '',
}

export default ContentList
