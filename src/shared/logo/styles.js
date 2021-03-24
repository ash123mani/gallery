import styled, { css } from 'styled-components'
import { Flex } from 'rebass'
import { Link } from 'gatsby'
import { isMobile } from 'react-device-detect'

const Container = styled(Flex)`
  height: 50px;
  width: 150px;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  position: relative;
  border: 1px solid var(--border-color);
  border-left: unset;
  background-color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary);

    p {
      color: #fff;
      transition: all 0.1s ease-in-out;
      font-size: 2.4rem;
    }
  }

  &::after {
    position: absolute;
    left: 0;
    width: 1px;
    height: 100%;
    background: red;
  }

  ${isMobile &&
    css`
      height: 40px;
      width: 100px;
    `};
`

const Falak = styled.p`
  font-size: 2.8rem;
  font-weight: 700;
  color: #fff;

  ${isMobile &&
    css`
      font-size: 1.8rem;
    `};
`

const StyledLink = styled(Link)``

export { StyledLink, Falak, Container }