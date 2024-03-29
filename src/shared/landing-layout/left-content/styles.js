import styled, { css } from 'styled-components'

import { fadeInUp } from '../../../components/Utils'

const Content = styled.div`
  width: 50%;
  padding-right: 4rem;
  flex-direction: column;
  padding-left: 20px;
  height: calc(100vh - 170px);
  padding-top: 10rem;

  @media only screen and (max-width: 900px) {
    padding-left: 0px;
    padding-right: 0px;
    border-left: none;
    padding-top: 0rem;
    height: auto;
    width: 100%;
  }
`

const Image = styled.img`
  height: 100%;
  width: 200px;
  margin-right: 3rem;
`

const ArticleWrapper = styled.div`
  display: flex;
  margin: 20px 0px;
`

const MetaInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px !important;
  ${({ animate }) => {
    return animate
      ? css`
          animation: 0.5s ${fadeInUp} ease-in-out;
        `
      : css`
          animation: unset;
        `
  }}
`

export { MetaInfoWrapper, ArticleWrapper, Image, Content }
