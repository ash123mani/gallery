import styled from 'styled-components'
import { Flex } from 'rebass'

const Content = styled(Flex)`
  align-items: center;
  padding: 0rem 15rem;

  @media only screen and (max-width: 1300px) {
    padding: 10rem 2rem 0rem;
  }
`

export { Content }
