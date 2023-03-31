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
  font-size: 0rem;
  color: #0e0000e0;
  transition: font-size 2s;
  font-size: 1.8rem;
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

export const Title = styled.h1`
  width: 100%;
  font-weight: bold;
  color: var(--color-primary);
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
  }};

  @media only screen and (max-width: 768px) {
    font-size: 3.2rem;
  }
`

export const Divider = styled.div`
  display: flex;
  height: ${({ height }) => height || '1px'};
  width: ${({ width }) => width || '100%'};
  background: ${({ bgColor }) => bgColor || 'var(--border-color)'};
`
