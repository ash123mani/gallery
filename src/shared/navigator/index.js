import React from 'react'
import { object, oneOfType, node, string, array, bool } from 'prop-types'

import { defaultActiveStyles, defaultStyles, StyledLink } from './styles'

const Navigator = ({ to, styles, activeStyles, children, hollow }) => {
  return (
    <StyledLink
      to={to}
      activeStyle={activeStyles}
      css={styles}
      className="link"
      activeClassName="link__active"
      hollow={hollow}
    >
      {children}
    </StyledLink>
  )
}

Navigator.propTypes = {
  styles: array,
  activeStyles: object,
  children: oneOfType([node, string]).isRequired,
  to: string.isRequired,
  hollow: bool,
}

Navigator.defaultProps = {
  styles: defaultStyles,
  activeStyles: defaultActiveStyles,
  hollow: false,
}

export default Navigator
