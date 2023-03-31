import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 16rem;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: flex-start; */
  overflow: auto;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  &::-webkit-scrollbar {
    display: none;
  }

  & .downarrow {
    align-self: flex-end;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 8rem;
  }
`

const gridCss = ({ view }) => {
  return (
    view === 'grid' &&
    css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    `
  )
}

const BlogCards = styled.section`
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin: 2rem;
  ${gridCss};

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin: 0rem !important;
    display: block;
  }
`

const cuCss = css`
  margin-bottom: 1.2rem;
`

const ViewContainer = styled.div`
  margin-left: auto;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export { Wrapper, BlogCards, cuCss, ViewContainer }
