import styled, { css } from 'styled-components'

const Title = styled.h3`
  padding: 3rem 1rem;
  color: var(--yellow-400);
`

const imageBoxStyles = css`
  display: inline-block;
  vertical-align: middle;
  width: auto;
  padding-bottom: 2rem;
  padding-left: 2rem;
  cursor: pointer;

  & .gatsby-image-wrapper {
    border-radius: 2px;
  }
`

export { Title, imageBoxStyles }
