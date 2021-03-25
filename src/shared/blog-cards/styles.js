import styled from 'styled-components'
import { Link } from 'gatsby'
import { Box, Flex } from 'rebass'

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 2rem;
  border-radius: 2px;
  background-color: white;
  transition: 0.35s ease-in-out;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 6px 6px 15px rgba(74, 82, 44, 0.5);
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 1.2rem !important;
    border: none !important;
    padding: 0px;
  }
`

const ImageContainer = styled(Box)`
  width: 100%;
  filter: grayscale(0);
  height: 280px;

  &:hover {
    filter: grayscale(1);
    transition: all 0.2s ease-in-out;
  }

  & .gatsby-image-wrapper {
    border-radius: 2px;
    height: inherit;
  }

  @media only screen and (max-width: 768px) {
    height: 180px;
  }
`

const MetaInfo = styled(Flex)`
  justify-content: space-between;
  padding: 2.4rem 0rem;

  @media only screen and (max-width: 768px) {
    padding: 1.6rem 0rem;
  }
`

const InfoContainer = styled(Box)`
  opacity: 0.8;
  padding-top: 2.4rem;

  @media only screen and (max-width: 768px) {
    padding-top: 2rem;
  }
`

const Info = styled.p`
  color: #000;
  font-size: 1.8rem;
  font-weight: 500;
`

const Title = styled.h1`
  color: var(--color-primary);
  font-size: 2.2rem;
  width: 100%;
  word-wrap: break-word;
  /* word-spacing: 0.3rem; */
  line-height: 1.3;
  /* padding: 0rem 1.8rem; */
  font-weight: 500;
`

export { Title, InfoContainer, Info, ImageContainer, StyledLink, MetaInfo }
