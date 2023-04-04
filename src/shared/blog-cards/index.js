import React from 'react'
import { object, bool, string } from 'prop-types'

import { Title, InfoContainer, Info, StyledLink, MetaInfo, Description } from './styles'

const BlogCard = React.forwardRef((props, ref) => {
  const { blogPosts, slug, tag, publishDate, title, excerpt, ...restProps } = props

  return (
    <StyledLink to={blogPosts ? `/blog${slug}` : `${slug}`} ref={ref} {...restProps}>
      <InfoContainer>
        <Title>{title}</Title>
        <Description>{excerpt}</Description>
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
  excerpt: string.isRequired,
}

export default BlogCard
