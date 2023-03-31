import styled from 'styled-components'
import { Link } from 'gatsby'
import { clampText } from '../../styles/utils'

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 2rem;
  border-radius: 2px;
  background-color: white;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--border-color);
  height: auto;

  &:hover {
    box-shadow: 6px 6px 15px rgba(74, 82, 44, 0.5);
  }

  &:first-of-type:hover {
    border-top: 1px solid var(--border-color);
  }

  @media only screen and (max-width: 768px) {
    border: unset;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    padding: 1.2rem;
  }
`

const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;

  @media only screen and (max-width: 768px) {
    margin-top: 1.2rem;
  }
`

const InfoContainer = styled.article`
  opacity: 1;
`

const Info = styled.p`
  color: var(--color-primary-light);
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Title = styled.h2`
  color: var(--color-primary);
  width: 100%;
  word-wrap: break-word;
  font-weight: 500;
`
const Description = styled.h3`
  color: var(--color-primary-medium);
  margin-top: 1.6rem;
  ${clampText};
`

export { Title, InfoContainer, Info, StyledLink, MetaInfo, Description }
