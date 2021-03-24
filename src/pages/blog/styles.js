import styled, { css } from 'styled-components'
import { Box, Flex } from 'rebass'
import { isMobile } from 'react-device-detect'

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

  ${isMobile &&
    css`
      height: calc(100vh - 80px);
    `};
`

const BlogCards = styled(Box)`
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 6rem !important;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;

  ${isMobile &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    `}
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

  ${isMobile &&
    css`
      padding: 2rem;
      flex-wrap: wrap;
    `}
`

const cuCss = css`
  margin-bottom: 4rem;
`

const RightContentContainer = styled(Flex)`
  flex-direction: column;
  ${isMobile &&
    css`
      margin-top: 4rem !important;
    `}
`

const Title = styled.p`
  font-size: 2.4rem;
  color: var(--color-primary) !important;
  font-weight: 300;
  padding: 1.6rem !important;
  /* background-color: #d3d1d161; */
  border-radius: 4px;
  font-weight: 500;
  /* text-shadow: -1px -1px 2px #0c0c0c69; */
  /* opacity: 0.5; */

  ${isMobile &&
    css`
      padding: 1.6rem 0rem !important;
    `}
`

const Author = styled.p`
  padding: 1.8rem !important;
  color: var(--color-primary) !important;
  font-size: 1.8rem;
  margin-top: 1rem;
  font-weight: 500;
  border-radius: 4px;
  align-self: flex-end;
  /* text-shadow: -1px -1px 2px #0c0c0c69; */
  /* opacity: 0.5; */
`

export { Wrapper, BlogCards, Author, Title, RightContentContainer, cuCss, ButtonWrapper }
