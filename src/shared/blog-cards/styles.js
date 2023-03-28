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
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 6px 6px 15px rgba(74, 82, 44, 0.5);
    border: 1px solid var(--border-color);
    border-left: unset;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 1.2rem !important;
    border: none !important;
  }
`

const MetaInfo = styled(Flex)`
  justify-content: space-between;
  margin-top: 2.4rem;

  @media only screen and (max-width: 768px) {
    margin-top: 1.6rem;
  }
`

const InfoContainer = styled(Box)`
  opacity: 1;
`

const Info = styled.p`
  color: var(--color-primary-light);
  font-size: 1.6rem;
  font-weight: 500;
`

const Title = styled.h1`
  color: var(--color-primary);
  font-size: 3.2rem;
  width: 100%;
  word-wrap: break-word;
  line-height: 1.3;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`
const Description = styled.h3`
  color: var(--color-primary-medium);
  font-size: 2rem;
  margin-top: 1.6rem;
`

export { Title, InfoContainer, Info, StyledLink, MetaInfo, Description }
