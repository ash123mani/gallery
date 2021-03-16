import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Box } from 'rebass'
import styled from 'styled-components'

import { Title } from '../components/Utils'
import SEO from '../components/SEO'
import Navigator from '../shared/Navigator'

import LandingLayout from '../shared/LandingLayout'
import bgHome from '../static/bg-home.jpg'

import shareImage from '../static/shareImage.jpeg'

const Wrapper = styled(Box)`
  /* padding: 0rem 15rem 12rem; */
  overflow-x: hidden;
  width: 100%;
  /* background-image: url(${bgHome}); */
  /* background-repeat: no-repeat; */
`

const IndexPage = ({ data }) => {
  const home = data.contentfulHome
  console.log({ home })

  const renderRightContent = () => {
    return (
      <React.Fragment>
        <Title>I write about:-</Title>
        {/* <Navigator to="/gallery">Gallery</Navigator> */}
        <Navigator to="/blog">Blog</Navigator>
        <Navigator to="/contact">Contact</Navigator>
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
