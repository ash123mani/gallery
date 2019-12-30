import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import styled from 'styled-components'
import { useSpring, animated as a } from 'react-spring'

const Container = styled(Box)`
  height: ${props => props.height || '70px'};
`
const CardHeading = styled(a.h1)`
  position: absolute;

  cursor: pointer;
  will-change: transform, opacity;
  background-size: cover;
  color: var(--yellow-500);
`

const FlipppigCard = ({ title, flippedTitle, placeDescription }) => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <Container onClick={() => set(state => !state)}>
      <CardHeading style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        {title} {placeDescription}
      </CardHeading>
      <CardHeading
        style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}
      >
        {flippedTitle}
      </CardHeading>
    </Container>
  )
}

FlipppigCard.propTypes = {
  title: PropTypes.string.isRequired,
  flippedTitle: PropTypes.string.isRequired,
  placeDescription: PropTypes.string,
}

FlipppigCard.defaultProps = {
  placeDescription: '',
}

export default FlipppigCard
