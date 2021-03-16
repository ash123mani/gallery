import styled, { css, keyframes } from 'styled-components'
import { Flex, Box } from 'rebass'

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'Content';
  max-width: 100%;
`

export const Content = styled(Box)`
  grid-area: Content;
  height: calc(100vh - 14.6rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  section {
    width: 100%;
    margin: auto 0;
    padding: 0rem 0rem 0rem 15rem;
  }
  &.footer {
    height: 100vh;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    & {
      height: calc(100vh - 11rem);
    }
    & section {
      padding: 0rem 4rem;
    }
  }
  @media screen and (max-width: 768px) {
    & {
      height: calc(100vh - 11rem);
    }
    & section {
      padding: 0rem 2rem;
    }
    &.footer {
      text-align: center;
    }
  }
`

export const ContentBottom = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  section {
    width: 100%;
    padding: 0rem 15rem;
  }
  &.galleries {
    section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      width: 100%;
      height: 100vh;
      align-items: center;
    }
    h4 {
      margin-top: 2rem;
      margin-left: 1rem;
      color: var(--black-100);
    }
    @media screen and (min-width: 500px) and (max-width: 1024px) {
      section {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        padding: 0 4rem;
      }
    }
    @media screen and (max-width: 499px) {
      section {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        padding: 0 2rem;
      }
    }
  }
  &.blogPosts {
    section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 5rem;
      width: 100%;
    }
    & > section > a > .gatsby-image-wrapper > div:nth-of-type(1) {
      padding-bottom: 55% !important;
    }
    @media screen and (min-width: 600px) and (max-width: 1024px) {
      section {
        grid-template-columns: repeat(2, 1fr);
        padding: 0 4rem;
      }
    }
    @media screen and (max-width: 599px) {
      section {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 2rem;
      }
      .gatsby-image-wrapper {
        display: none;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    section.gallery-section {
      padding: 0 4rem;
    }
  }
  @media screen and (max-width: 768px) {
    section.gallery-section {
      padding: 0 2rem;
    }
  }
`

export const Article = styled.p`
  font-size: 0rem;
  color: #0e0000e0;
  /* margin: 16px 0px; */
  /* font-weight: 500; */
  transition: font-size 2s;
  font-size: 1.8rem;

  ${({ animate }) => {
    return animate
      ? css`
          animation: 0.5s ${fadeInUp} ease-in-out;
        `
      : css`
          animation: unset;
        `
  }}
`

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2.4rem;
  color: var(--f-dark-black);
  border-bottom: 1px solid #d3d1d1;
  padding: 2rem 0rem;
  width: 100%;

  ${({ animate }) => {
    return animate
      ? css`
          animation: 0.5s ${fadeInUp} ease-in-out;
        `
      : css`
          animation: unset;
        `
  }}
`

export const Divider = styled(Flex)`
  height: ${({ height }) => height || '0px'};
  width: ${({ width }) => width || '1px'};
  background: ${({ bgColor }) => bgColor || 'gray'};
`
