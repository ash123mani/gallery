import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 16rem;
  /* display: flex;
  flex-wrap: wrap; */
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
      grid-template-rows: 420px;
    `
  )
}

const BlogCards = styled.section`
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 2rem;
  ${gridCss};

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin: 0rem !important;
    display: block;
  }
`

const cuCss = css`
  margin: 4rem 0;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`

const ViewContainer = styled.div`
  margin-left: auto;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: right;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export { Wrapper, BlogCards, cuCss, ViewContainer }
