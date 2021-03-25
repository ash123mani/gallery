import styled from 'styled-components'
import { Box } from 'rebass'

const Wrapper = styled(Box)`
  height: calc(100vh - 170px);
  width: 100%;

  @media only screen and (max-width: 768px) {
    & {
      height: calc(100vh - 80px);
    }
  }
`

export { Wrapper }
