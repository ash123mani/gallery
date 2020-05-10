import styled from 'styled-components'
import { Box } from 'rebass'

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

export const Article = styled(Box)`
  max-width: 75%;
  border: 1px solid #3b67c7;
  padding: 8px;
  p {
    color: var(--black-200);
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    & {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      max-width: 100%;
    }
  }
`
