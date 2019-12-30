import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Idea from '../static/idea.svg'

const A = styled(Link)`
  img {
    width: 4.5rem;
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
