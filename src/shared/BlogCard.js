import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { object, bool, string } from 'prop-types'

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 2rem;
  border-radius: 2px;
  background-color: white;
  transition: 0.35s ease-in-out;
  overflow: hidden;
  border: solid 1px rgb(211 209 209 / 40%);
  width: 100%;

  &:hover {
    box-shadow: 6px 6px 15px rgba(74, 82, 44, 0.5);
  }
`

const ImageContainer = styled(Box)`
  width: 100%;
  filter: grayscale(0);
  height: 280px;

  &:hover {
    filter: grayscale(1);
    transition: all 0.2s ease-in-out;
  }

  & .gatsby-image-wrapper {
    border-radius: 2px;
    height: inherit;
  }
`

const MetaInfo = styled(Flex)`
  justify-content: space-between;
  padding: 1.8rem;
`

const InfoContainer = styled(Box)`
  opacity: 0.8;
`

const Info = styled.p`
  color: #000;
  font-size: 1.8rem;
`

const Title = styled.h1`
  color: var(--f-dark-black);
  font-size: 2rem;
  width: 100%;
  word-wrap: break-word;
  word-spacing: 0.3rem;
  line-height: 1.3;
  padding: 0rem 1.8rem;
`
const BlogCard = React.forwardRef((props, ref) => {
  const { image, blogPosts, slug, tag, publishDate, title, widthType, ...restProps } = props

  return (
    <StyledLink
      to={blogPosts ? `/blog${slug}/` : `${slug}/`}
      ref={ref}
      widthType={widthType}
      {...restProps}
    >
      <ImageContainer>
        <Img fluid={image.fluid} />
      </ImageContainer>
      <MetaInfo>
        <Info>{publishDate}</Info>
        <Info>{tag}</Info>
      </MetaInfo>
      <InfoContainer>
        <Title>{title}</Title>
      </InfoContainer>
    </StyledLink>
  )
})

BlogCard.displayName = 'BlogCard'

BlogCard.propTypes = {
  image: object.isRequired,
  blogPosts: bool.isRequired,
  slug: string.isRequired,
  tag: string.isRequired,
  publishDate: string.isRequired,
  title: string.isRequired,
  widthType: string,
}

BlogCard.defaultProps = {
  widthType: '',
}

export default BlogCard
