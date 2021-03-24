import styled, { css } from 'styled-components'
import { Flex } from 'rebass'
import { isMobile } from 'react-device-detect'

const InfoBox = styled(Flex)`
  padding: 2rem;
  align-items: center;
  &:hover p {
    color: ${({ hoverColor }) => hoverColor || 'black'};
  }

  ${isMobile &&
    css`
      margin-top: 0rem !important;
      padding: 2rem 0rem;
    `};
`

const StyledIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 0px;
  object-fit: cover;

  ${isMobile &&
    css`
      height: 60px;
      width: 60px;
    `};
`

const StyledLink = styled.a`
  margin-bottom: 3rem;
  &:hover:after,
  &:hover:before {
    display: none;
  }
  color: #ffffffd9;
  align-items: center;
  align-self: stretch;
`

const Text = styled.p`
  font-size: 2.8rem;
  color: var(--color-primary);
  font-weight: bold;

  ${isMobile &&
    css`
      font-size: 2.4rem;
    `};
`

const Subtitle = styled.p`
  font-size: 2.4rem;
  color: var(--color-primary);

  ${isMobile &&
    css`
      font-size: 1.8rem;
    `};
`

export { InfoBox, StyledIcon, StyledLink, Text, Subtitle }
