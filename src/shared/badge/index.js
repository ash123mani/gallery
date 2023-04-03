import React from 'react'
import { node, string } from 'prop-types'

import { BadgeBox } from './styles'

const Badge = ({ children, colorTheme }) => {
  return <BadgeBox colorTheme={colorTheme}>{children}</BadgeBox>
}

Badge.propTypes = {
  children: node.isRequired,
  colorTheme: string,
}

Badge.defaultProps = {
  colorTheme: 'dark',
}

export default Badge
