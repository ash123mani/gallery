import React from 'react'
import styled, { css } from 'styled-components'
import { string, node, bool } from 'prop-types'

const sharedStyles = css`
  background: #9898983d;
  color: #10101096;
`

const StyledButton = styled.button`
  padding: 1.2rem 2.4rem;
  font-size: 1.6rem;
  background: white;
  border: 1px solid #e0e0e0;
  font-weight: 500;
  color: #676767;
  border-radius: 2px;
  outline: none;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      ${sharedStyles};
    `}

  &:hover {
    ${sharedStyles};
  }
`

const Button = props => {
  const { varaint, selected, children, ...restProps } = props

  return (
    <StyledButton varaint={varaint} selected={selected} {...restProps}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  varaint: string,
  children: node.isRequired,
  selected: bool,
}

Button.defaultProps = {
  varaint: 'hollow',
  selected: false,
}

export default Button
