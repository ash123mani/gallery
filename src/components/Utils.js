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
    padding: 0rem 15rem;
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
  }
`

export const Article = styled(Box)`
  max-width: 70%;
  p {
    color: var(--black-200);
  }
`
