import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
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
  text-align: center;
`

const StyledLink = styled(Link)`
  border: 1px solid black;
  padding: 12px 16px;
  color: var(--primary-color);
`

export { Wrapper, Title, StyledLink }
