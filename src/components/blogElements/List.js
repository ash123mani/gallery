import styled, { css } from 'styled-components'

const listStyle = css``

const List = styled.ul`
  margin: 50px 0px;
  ${listStyle}
  margin: 0px;

  > li {
    padding-left: 0em;
    text-indent: -1em;
    list-style: none;

    p {
      padding-left: 30px;
    }
  }

  > li > p:before {
    content: '☀️';
  }
`

export default List
