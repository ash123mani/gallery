import styled, { css } from 'styled-components'
import { Box, Flex } from 'rebass'
import { isMobile } from 'react-device-detect'

const Conatiner = styled.section`
  font-size: 1.8rem;
  background-color: var(--color-primary);
  padding: 10rem 15rem;

  & .link {
    background-color: var(--button-background);
    color: #ffffffb3;
  }

  & .link__active {
    color: #ffffff8a !important;
    background-color: var(--link-active-background) !important;
  }

  ${isMobile &&
    css`
      padding: 4rem;
    `};
`

const Speech = styled.p`
  color: #ffffffb3;
  width: 80%;

  & .span {
    color: white;
    padding: 4px 0px;
    font-style: italic;
  }

  ${isMobile &&
    css`
      width: 100%;
    `};
`

const ActName = styled.p`
  padding: 8px 0px;
  color: #a09b9b94;
`

const ActLink = styled.a`
  padding: 8px 0px;
  color: #a09b9b94;
`

const NavigationContainer = styled(Box)`
  margin-bottom: 4rem !important;
`

const ActInfoContainer = styled(Flex)`
  justify-content: space-between;
  width: 80%;

  ${isMobile &&
    css`
      width: 100%;
    `};
`

export { Conatiner, Speech, ActName, NavigationContainer, ActLink, ActInfoContainer }