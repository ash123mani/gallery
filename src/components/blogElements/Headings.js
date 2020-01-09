import styled, { css } from 'styled-components'

const headingStyle = css`
  margin: 2rem 0;
  color: var(--yellow-600);
  font-weight: 400;
  width: fit-content;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--yellow-600);
    bottom: 0px;
    left: 0;
  }
`

const HeadingBox = styled.h2`
  ${headingStyle}
`

export default HeadingBox
