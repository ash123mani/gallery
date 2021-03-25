import styled, { css, keyframes } from 'styled-components'
import { Flex } from 'rebass'

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
  color: var(--color-primary);
  border-bottom: 1px solid var(--border-color);
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
    font-size: 3.6rem;
  }
`

export const Divider = styled(Flex)`
  height: ${({ height }) => height || '0px'};
  width: ${({ width }) => width || '1px'};
  background: ${({ bgColor }) => bgColor || 'gray'};
`
