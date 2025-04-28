import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'row' ? 'row' : 'row-reverse')};
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`

const RichInfo = styled.div`
  flex: 1.5;
`

const ImageContainer = styled.div`
  flex: 1;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  & .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-height: 320px;
    display: block !important;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover !important;
      transition: transform 0.3s ease-in-out;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  @media only screen and (max-width: 768px) {
    min-height: 200px;
    margin-bottom: 2rem;

    & .gatsby-image-wrapper {
      max-height: 200px;
    }
  }
`

const knowMoreCss = css`
  /* text-decoration: none; */
  /* border: 1px solid var(--border-color); */
  /* padding: 0.4rem 1.8rem; */
  /* color: var(--color-primary-medium); */

  &:hover {
    color: initial;
  }
`

const KnowMoreFirst = styled(Link)`
  ${knowMoreCss};

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const KnowMoreSecond = styled(Link)`
  ${knowMoreCss};

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export { Container, RichInfo, ImageContainer, KnowMoreFirst, KnowMoreSecond }
