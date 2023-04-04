import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`

const RichInfo = styled.div`
  flex: 1;
`

const ImageContainer = styled.div`
  flex: 1;
`
const KnowMore = styled(Link)`
  text-decoration: none;
  border: 1px solid var(--border-color);
  padding: 0.4rem 1.8rem;
  color: var(--color-primary-medium);

  &:hover {
    color: initial;
  }
`

export { Container, RichInfo, ImageContainer, KnowMore }
