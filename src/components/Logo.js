import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Idea from '../static/hard-sun.svg'

const A = styled(Link)`
  img {
    width: 6rem;
    height: 6rem;
    margin-bottom: 0px;
  }
`

const Logo = () => {
  return (
    <A to={'/'}>
      <img src={Idea} alt="Idea" />
    </A>
  )
}

export default Logo
