import styled, { css } from 'styled-components'

const headingStyle = css`
  margin: 2rem 0;
  color: var(--color-primary);
  font-weight: 400;
  width: fit-content;
  position: relative;
`

const HeadingBox = styled.h2`
  ${headingStyle}
`

export default HeadingBox
