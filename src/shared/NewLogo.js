import React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'
import { Link } from 'gatsby'

const Container = styled(Flex)`
  height: 50px;
  width: 150px;
  /* background-color: var(--f-dark-black); */
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  position: relative;
  border: 1px solid #d3d1d1;
  border-left: unset;

  &:hover {
    background-color: var(--f-dark-black);

    p {
      color: #fff;
      transition: all 0.1s ease-in-out;
      font-size: 2.4rem;
    }
  }

  &::after {
    position: absolute;
    left: 0;
    width: 1px;
    height: 100%;
    background: red;
  }
`

const Falak = styled.p`
  font-size: 2.8rem;
  font-weight: 700;
  color: #000;
`

const StyledLink = styled(Link)`
`

function NewLogo() {
  return (
    <Container>
      <StyledLink>
        <Falak>Falak</Falak>
      </StyledLink>
    </Container>
  )
}

export default NewLogo
