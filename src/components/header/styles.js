import styled, { keyframes } from 'styled-components'

const flag = keyframes`
  0% {
    transform: rotateY(0deg);
    transform-origin: left 0px;
  }
  50% {
    transform: rotateY(-45deg);
    transform-origin: left 0px;
  }
  100% {
    transform: rotateY(45deg);
    transform-origin: left 0px;
  }
`

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0rem 15rem;
  width: 100%;
  align-items: center;
  height: 170px;

  @media only screen and (max-width: 1300px) {
    padding: 2rem;
    height: 80px;
  }
`

const LogoContainer = styled.div`
  position: relative;
  /* animation-name: ${flag};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate; */

  &:after {
    content: '';
    position: absolute;
    height: 170px;
    width: 1px;
    background: var(--border-color);
    left: 0px;
    top: -60px;
  }
`

export { Container, LogoContainer }
