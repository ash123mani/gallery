import React from 'react'
import Img from 'gatsby-image'
import { object, bool, string } from 'prop-types'

import { Title, InfoContainer, Info, ImageContainer, StyledLink, MetaInfo } from './styles'

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
      <InfoContainer>
        <Title>{title}</Title>
      </InfoContainer>
      <MetaInfo>
        <Info>{publishDate}</Info>
        <Info>{tag}</Info>
      </MetaInfo>
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
