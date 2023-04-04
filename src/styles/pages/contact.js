import styled from 'styled-components'
import { Title } from '../../components/Utils'

const Wrapper = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  overflow: auto;

  @media only screen and (max-width: 768px) {
    height: calc(100vh - 100px);
  }
`

const AllBadges = styled.div`
  overflow: auto;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const BadgeRow = styled.div`
  margin: 2.4rem 0;
`

const BadgesContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
`

const StyledTitle = styled(Title)`
  padding: 0;
  margin-bottom: 1.2rem;
`

const TechTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
`

export { Wrapper, AllBadges, BadgeRow, BadgesContainer, TechTitle, StyledTitle }
