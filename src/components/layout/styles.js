import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0rem 15rem;
  overflow: auto;
  border-left: 1px solid var(--border-color);

  @media only screen and (max-width: 1300px) {
    margin: 0rem 2rem;
    /* border-left: 1px solid var(--border-color); */
  }
`

export { Content }
