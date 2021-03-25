import styled, { css } from 'styled-components'
import { Box, Flex } from 'rebass'

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: calc(100vh - 170px);
  overflow: auto;

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
  margin-top: 6rem !important;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
  margin-bottom: 4rem;
`

const RightContentContainer = styled(Flex)`
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    margin-top: 4rem !important;
  }
`

const Title = styled.p`
  font-size: 2.4rem;
  color: var(--color-primary) !important;
  font-weight: 300;
  padding: 1.6rem !important;
  border-radius: 4px;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    padding: 1.6rem 0rem !important;
  }
`

const Author = styled.p`
  padding: 1.8rem !important;
  color: var(--color-primary) !important;
  font-size: 1.8rem;
  margin-top: 1rem;
  font-weight: 500;
  border-radius: 4px;
  align-self: flex-end;
`

export { Wrapper, BlogCards, Author, Title, RightContentContainer, cuCss, ButtonWrapper }
