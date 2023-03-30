import React from 'react'

import SEO from '../components/SEO'
import { Wrapper, Title, StyledLink } from '../styles/pages/404'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Wrapper>
      <Title>You landed on a non-existential page (404)</Title>
      <StyledLink to="/">Go Back Home</StyledLink>
    </Wrapper>
  </>
)

export default NotFoundPage
