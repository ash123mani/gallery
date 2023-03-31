import styled from 'styled-components'

const Conatiner = styled.section`
  background-color: var(--color-primary);
  padding: 10rem 15rem;

  & .link {
    background-color: var(--button-background);
    color: #ffffffb3;
  }

  & .link__active {
    color: #ffffff8a !important;
    background-color: var(--link-active-background) !important;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
`

const Speech = styled.p`
  color: #ffffffb3;
  width: 80%;

  & .span {
    color: white;
    padding: 4px 0px;
    font-style: italic;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const ActName = styled.p`
  padding: 8px 0px;
  color: #a09b9b94;
`

const ActLink = styled.a`
  padding: 8px 0px;
  color: #a09b9b94;
`

const NavigationContainer = styled.div`
  margin-bottom: 4rem !important;
  display: flex;
`

const ActInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export { Conatiner, Speech, ActName, NavigationContainer, ActLink, ActInfoContainer }
