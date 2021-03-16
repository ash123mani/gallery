import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  border: 1px solid var(--border);
  margin-bottom: 4rem;
  margin-top: 4rem;
`

const Image = node => {
  let alt
  let url
  if (node.data.target.fields) {
    alt = node.data.target.fields.title['en-US']
    url = node.data.target.fields.file['en-US'].url
  }
  return <StyledImage alt={alt || ''} src={url || ''} />
}

export default Image
