import styled, { keyframes } from 'styled-components'

const inOut = keyframes`
  100% {
    transform: scale(0.8, 0.8);
    opacity: 0.6;
  }
  60% {
    transform: scale(1, 1);
    opacity: 0.4;
  }
  30% {
    transform: scale(0.8, 0.8);
    opacity: 0.6;
  }
  0% {
    transform: scale(1, 1);
    opacity: 0.4;
  }
`

export const Container = styled.a`
  width: 50px;
  width: 50px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 50%;
  margin: 2rem !important;
  animation-name: ${inOut};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
`

export const DownArrowIcon = styled.img`
  height: inherit;
  width: inherit;
  transform: rotate(90deg);
`
