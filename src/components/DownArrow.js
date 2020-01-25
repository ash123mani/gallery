import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import downArrow1 from '../static/down-arrow-1.svg'

const bounce = keyframes`
  0% {
    opacity: 0.2;
    bottom: 20px;
  }

  50% {
    opacity: 0.3;
    bottom: 10px;
  }

  100% {
    opacity: 0.4;
    bottom: 20px;
  }
`

const StyledLink = styled(Link)`
  position: absolute;
  left: calc(50% - 2rem);
  text-decoration: none !important;
  background: var(--black-200);
  border-radius: 50%;
  padding: 5px;
  animation: ${bounce} 2s linear infinite alternate;

  &:hover:after,
  &:hover:before {
    display: none;
  }

  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`

const ArrowBox = styled(Box)`
  width: 40px;
  height: 40px;

  img {
    width: inherit;
    height: inherit;
  }
`

const DownArrow = props => {
  return (
    <StyledLink to={props.anchor}>
      <ArrowBox>
        <img src={downArrow1} alt="arrow" />
      </ArrowBox>
    </StyledLink>
  )
}

DownArrow.propTypes = {
  anchor: PropTypes.string.is,
}

export default DownArrow
