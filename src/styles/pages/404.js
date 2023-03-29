import styled from 'styled-components'
import { Box } from 'rebass'
import { Link } from 'gatsby'

const Wrapper = styled(Box)`
  height: calc(100vh - 170px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    & {
      height: calc(100vh - 80px);
    }
  }
`

const Title = styled.h1`
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 20px;
`

const StyledLink = styled(Link)`
  font-size: 24px;
  border: 1px solid black;
  padding: 12px 16px;
  color: var(--primary-color);
`

export { Wrapper, Title, StyledLink }
