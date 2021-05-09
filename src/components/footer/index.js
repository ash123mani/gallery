import React from 'react'

import Navigator from '../../shared/navigator'

import {
  Conatiner,
  Speech,
  ActName,
  NavigationContainer,
  ActLink,
  ActInfoContainer,
} from './styles'

const Footer = () => {
  return (
    <Conatiner id="bottom">
      <NavigationContainer>
        <Navigator to="/">Falak</Navigator>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Navigator to="/gallery">Gallery</Navigator> */}
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        <Navigator to="/blog">Perspective</Navigator>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Navigator to="/contact">Say Hi/🙏</Navigator>
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
