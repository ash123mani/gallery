import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'rebass'

import Navigator from '../shared/Navigator'

const Conatiner = styled.section`
  font-size: 1.8rem;
  background-color: black;
  padding: 10rem 15rem;

  & .link {
    background-color: #2d28288a;
    color: #ffffffb3;
  }

  & .link__active {
    color: #ffffff8a !important;
    background-color: #6f6f6f4a !important;
  }
`

const Speech = styled.p`
  color: #ffffffb3;
  width: 80%;

  & .span {
    color: white;
    padding: 4px 0px;
    font-style: italic;
  }
`

const ActName = styled.p`
  /* font-style: italic; */
  padding: 8px 0px;
  color: #a09b9b94;
`

const ActLink = styled.a`
  padding: 8px 0px;
  color: #a09b9b94;
`

const NavigationContainer = styled(Box)`
  margin-bottom: 4rem !important;
`

const ActInfoContainer = styled(Flex)`
  justify-content: space-between;
  width: 80%;
`

const Footer = () => {
  return (
    <Conatiner id="bottom">
      <NavigationContainer>
        <Navigator to="/">Falak</Navigator>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Navigator to="/#bottom">Gallery</Navigator>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Navigator to="/blog">Blog</Navigator>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Navigator to="/contact">Contact</Navigator>
      </NavigationContainer>

      <Speech>
        I’m sorry, but I don’t want to be an emperor. That’s not my business. I don’t want to rule
        or conquer anyone. I should like to help everyone - if possible - Jew, Gentile - black man -
        white. We all want to help one another. Human beings are like that. We want to live by each
        other’s happiness - not by each other’s misery. We don’t want to hate and despise one
        another. In this world there is room for everyone. And the good earth is rich and can
        provide for everyone. The way of life can be free and beautiful, but we have lost the
        way....
      </Speech>
      <ActInfoContainer>
        <ActName>Excerpt from:- The Final Speech from The Great Dictator</ActName>
        <ActLink
          href="https://www.charliechaplin.com/en/articles/29-the-final-speech-from-the-great-dictator-"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read or Watch full speech.
        </ActLink>
      </ActInfoContainer>
    </Conatiner>
  )
}

export default Footer
