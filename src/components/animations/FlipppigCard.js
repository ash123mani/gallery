import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import styled from 'styled-components'
import { useSpring, animated as a } from 'react-spring'

const Container = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 75%;
  & > h1:first-of-type {
    position: absolute;
    bottom: 10px;
  }
`
const CardHeading = styled(a.h1)`
  cursor: pointer;
  will-change: transform, opacity;
  background-size: cover;
  color: var(--yellow-500);
  margin-bottom: 10px;
  margin-right: 300px;
  border: 1px solid var(--border);
  padding: 8px;
  width: 100%;
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
