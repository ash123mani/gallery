import styled, { css } from 'styled-components'

const listStyle = css``

const List = styled.ol`
  ${listStyle}
  margin: 0px;

  > li {
    padding-left: 1em;
    text-indent: -1em;
    list-style: none;
  }

  > li > p:before {
    content: '🙅🏿';
  }
`

export default List
