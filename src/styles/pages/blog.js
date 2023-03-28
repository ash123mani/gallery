import styled, { css } from 'styled-components'
import { Box, Flex } from 'rebass'

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: auto;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  &::-webkit-scrollbar {
    display: none;
  }

  & .downarrow {
    align-self: flex-end;
  }

  @media only screen and (max-width: 768px) {
    height: calc(100vh - 80px);
  }
`

const BlogCards = styled(Box)`
  flex-wrap: wrap;
  justify-content: flex-start;
  /* margin-top: 6rem !important; */
  width: 100%;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    max-width: 100%;
    margin-top: 0rem !important;
  }
`

const ButtonWrapper = styled(Flex)`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  position: sticky;
  z-index: 1000;
  padding: 2rem 6rem;
  border: 1px solid var(--border-color);
  background: white;
  overflow: auto;

  @media only screen and (max-width: 768px) {
    padding: 2rem;
    flex-wrap: wrap;
  }
`

const cuCss = css`
  margin-bottom: 2.4rem;
  border: 1px solid transparent;
`

const RightContentContainer = styled(Flex)`
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    margin-top: 4rem !important;
  }
`

const Title = styled.p`
  font-size: 2rem;
  color: var(--color-primary) !important;
  padding: 1.6rem !important;
  border-radius: 4px;
  font-weight: 400;
  /* box-shadow: -3px -2px 5px #6e6e791f; */

  @media only screen and (max-width: 768px) {
    padding: 1.6rem 0rem !important;
  }
`

const Author = styled.p`
  padding: 1.8rem !important;
  color: var(--color-primary) !important;
  font-size: 1.6rem;
  margin-top: 1rem;
  border-radius: 4px;
  align-self: flex-end;
`

export { Wrapper, BlogCards, Author, Title, RightContentContainer, cuCss, ButtonWrapper }
