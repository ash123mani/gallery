import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  background: var(--button-background);
  color: var(--f-dark-white) !important;

  &:hover {
    transition: all 0.5s ease-in-out;
    color: var(--color-primary);
  }

  ${({ hollow }) =>
    hollow &&
    css`
      color: #0e000091 !important;
      border: 1px solid #0e000091;
      padding: 4px 12px;
    `};

  @media only screen and (max-width: 768px) {
    padding: 8px 12px;
  }
`

const defaultStyles = css`
  color: var(--color-primary);
  font-size: 1.8rem;
  max-height: 80px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`

const defaultActiveStyles = {
  color: 'var(--color-primary)',
  backgroundColor: 'var(--link-active-background)',
  border: 'none',
}

export { defaultActiveStyles, defaultStyles, StyledLink }
