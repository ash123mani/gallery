import React from 'react'
import { object, oneOfType, node, string, array, bool } from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const StledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;

  &:hover {
    color: var(--f-dark-white) !important;
    background: var(--f-dark-black);
    transition: all 0.5s ease-in-out;
  }

  ${({ hollow }) =>
    hollow &&
    css`
      color: #0e000091 !important;
      border: 1px solid #0e000091;
      padding: 4px 12px;
    `};
`

const defaultStyles = css`
  color: var(--f-dark-black);
  font-size: 1.8rem;
  max-height: 80px;
  min-height: 40px;
  line-height: 40px;
  text-align: center;
`

const defaultActiveStyles = {
  color: '#1b3b69d1',
  backgroundColor: '#8e6d6d47',
  border: 'none',
}

const Navigator = ({ to, styles, activeStyles, children, hollow }) => {
  return (
    <StledLink
      to={to}
      activeStyle={activeStyles}
      css={styles}
      className="link"
      activeClassName="link__active"
      hollow={hollow}
    >
      {children}
    </StledLink>
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
