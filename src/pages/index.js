import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

import { Title } from '../components/Utils'
import SEO from '../components/SEO'
import Navigator from '../shared/navigator'

import LandingLayout from '../shared/landing-layout'
import bgHome from '../static/bg-home.jpg'

import shareImage from '../static/shareImage.jpeg'

const Wrapper = styled(Box)`
  overflow-x: hidden;
  width: 100%;
  height: calc(100vh - 170px);

  @media only screen and (max-width: 768px) {
    & {
      height: calc(100vh - 80px);
    }
  }
`

const IndexPage = ({ data }) => {
  const home = data.contentfulHome
  console.log({ home })

  const renderRightContent = () => {
    if (isMobile) {
      return null
    }

    return (
      <React.Fragment>
        <Title>I write about:-</Title>
        <Flex flexDirection="column">
          <Navigator to="/blog">Blog</Navigator>
          <Navigator to="/contact">Contact</Navigator>
        </Flex>
      </React.Fragment>
    )
  }

  return (
    <>
      <SEO image={shareImage} />
      <Wrapper>
        <LandingLayout
          title={home.title}
          body={home.subtitle.subtitle}
          rightContent={renderRightContent}
          bgImage={bgHome}
        />
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query Index {
    contentfulHome {
      title
      flipTitle
      subtitle {
        subtitle
      }
      body {
        json
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
