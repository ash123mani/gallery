import React from 'react'

import SEO from '../components/SEO'
import { Wrapper } from '../styles/pages/404'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Wrapper>
  </>
)

export default NotFoundPage
