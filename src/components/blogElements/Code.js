import styled, { css } from 'styled-components'

const codeStyles = css`
  font-size: 16px;
  line-height: 1.75;
  background: var(--code-block);
  color: var(--color-primary);
  overflow: auto;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  font-weight: 500;
`

const Code = styled.code`
  ${codeStyles};
  padding: 8px 16px;
  width: 100%;
`

const InLineCode = styled.code`
  padding: 2px 8px;
  margin: 2px 0px !important;
  ${codeStyles};
`

export { Code, InLineCode }
