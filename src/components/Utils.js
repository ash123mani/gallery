import styled, { css, keyframes } from 'styled-components'

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

export const Article = styled.p`
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

export const Title = styled.p`
  width: 100%;
  font-weight: bold;
  padding: 2rem 0rem;
  width: 100%;
`

export const Divider = styled.div`
  display: flex;
  height: ${({ height }) => height || '1px'};
  width: ${({ width }) => width || '100%'};
  background: ${({ bgColor }) => bgColor || 'var(--border-color)'};
`

export const SectionInMiddle = styled.section`
  padding: 4rem 10rem;
  border-bottom: 1px solid var(--border-color);

  @media only screen and (max-width: 768px) {
    padding: 2rem;
  }
`
