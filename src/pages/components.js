import React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'

import NewLogo from '../shared/logo'
import Navigator from '../shared/navigator'
import BlogCard from '../shared/blog-cards'

const Wrapper = styled(Flex)`
  display: flex;
  justify-content: space-around;
  margin: 100px;
  flex-wrap: wrap;
`

const Container = styled(Flex)`
  width: 50%;
`

const Components = () => {
  return (
    <Wrapper>
      <NewLogo />
      <Navigator>I am a Link</Navigator>
      <Container>
        <BlogCard />
      </Container>
    </Wrapper>
  )
}

export default Components
