import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0rem 15rem;
  align-items: center;
  height: 120px;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);

  @media only screen and (max-width: 1300px) {
    margin: 0 2rem;
    height: 80px;
  }
`

const LogoContainer = styled.div`
  position: relative;
`

const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export { Container, LogoContainer, RightContent }
