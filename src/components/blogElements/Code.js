import styled, { css } from 'styled-components'

const codeStyles = css`
  font-size: 16px;
  background: var(--code-block);
  color: var(--color-primary);
  overflow: auto;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  line-height: 1.5;
  font-weight: 500;
`

const Code = styled.code`
  ${codeStyles};
  padding: 8px 16px;
  width: 100%;
`

const InLineCode = styled.code`
  padding: 4px 8px;
  margin: 2px 4px !important;
  ${codeStyles};
`

export { Code, InLineCode }
