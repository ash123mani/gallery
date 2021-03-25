import styled from 'styled-components'
import { Flex } from 'rebass'

const InfoBox = styled(Flex)`
  padding: 2rem;
  align-items: center;
  &:hover p {
    color: ${({ hoverColor }) => hoverColor || 'black'};
  }

  @media only screen and (max-width: 768px) {
    margin-top: 0rem !important;
    padding: 2rem 0rem;
  }
`

const StyledIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 0px;
  object-fit: cover;

  @media only screen and (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
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

  @media only screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`

const Subtitle = styled.p`
  font-size: 2.4rem;
  color: var(--color-primary);

  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export { InfoBox, StyledIcon, StyledLink, Text, Subtitle }
