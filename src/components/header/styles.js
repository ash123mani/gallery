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
  margin: 0rem 15rem;
  align-items: center;
  height: 170px;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);

  @media only screen and (max-width: 1300px) {
    margin: 0 2rem;
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
`

export { Container, LogoContainer }
