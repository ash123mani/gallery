import styled, { css } from 'styled-components'
import { Flex } from 'rebass'
import { isMobile } from 'react-device-detect'

const Content = styled(Flex)`
  align-items: center;
  padding: 0rem 15rem;

  ${isMobile &&
    css`
      padding: 10rem 2rem 0rem;
    `};
`

export { Content }
