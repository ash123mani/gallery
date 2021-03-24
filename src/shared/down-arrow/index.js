import React from 'react'
import { string } from 'prop-types'

import arrow from '../../static/arrow.png'

import { Container, DownArrowIcon } from './styles'

const DownArrow = props => {
  const { pathName, subLink } = props

  return (
    <Container {...props} className="downarrow" href={`${pathName}#${subLink}`}>
      <DownArrowIcon src={arrow} />
    </Container>
  )
}

DownArrow.propTypes = {
  pathName: string,
  subLink: string,
}

DownArrow.defaultProps = {
  pathName: '',
  subLink: 'bottom',
}

export default DownArrow
