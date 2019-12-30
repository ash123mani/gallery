import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Flex } from 'rebass'
import Img from 'gatsby-image'

const StyledLink = styled(Link)`
  &:hover:after,
  &:hover:before {
    display: none;
  }
`

const ImageBox = styled(Flex)`
  border: 1px solid var(--black-100);
  border-radius: 2px;
  cursor: pointer;
  flex-direction: column;
  box-shadow: 4px 4px 5px -1px rgba(72, 50, 50, 0.73);

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

const ContentList = props => {
  return (
    <React.Fragment>
      <StyledLink to={`${props.slug}/`}>
        <ImageBox>
          <Img fluid={props.image.fluid} />
          <h4>{props.title}</h4>
        </ImageBox>
      </StyledLink>
    </React.Fragment>
  )
}

ContentList.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
}

export default ContentList
