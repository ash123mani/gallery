import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { isMobile } from 'react-device-detect'

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;

  &:hover {
    color: var(--f-dark-white) !important;
    background: var(--button-background);
    transition: all 0.5s ease-in-out;
  }

  ${({ hollow }) =>
    hollow &&
    css`
      color: #0e000091 !important;
      border: 1px solid #0e000091;
      padding: 4px 12px;
    `};

  ${isMobile &&
    css`
      padding: 8px 12px;
    `};
`

const defaultStyles = css`
  color: var(--color-primary);
  font-size: 1.8rem;
  max-height: 80px;
  min-height: 40px;
  line-height: 40px;
  text-align: center;

  ${isMobile &&
    css`
      font-size: 1.4rem;
    `};
`

const defaultActiveStyles = {
  color: 'var(--color-primary)',
  backgroundColor: 'var(--link-active-background)',
  border: 'none',
}

export { defaultActiveStyles, defaultStyles, StyledLink }
