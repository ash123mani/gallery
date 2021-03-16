import React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'
import { string, object, func, bool } from 'prop-types'

import LeftContent from './LeftContent'

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: calc(100vh - 190px);
  overflow-x: hidden;
`

const RightContent = styled(Flex)`
  padding-left: 40px;
  width: 50%;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  & .link {
    width: 200px;
    margin-bottom: 20px;
    text-align: left;

    &:hover {
      text-align: left;
      transition: all 0.3s ease-in;
    }
  }
`

const LandingLayout = React.forwardRef(props => {
  const { title, body, rightContent, slug, showBelowSection } = props
  return (
    <Container>
      {title && body && (
        <LeftContent title={title} body={body} slug={slug} showBelowSection={showBelowSection} />
      )}

      <RightContent>{rightContent()}</RightContent>
    </Container>
  )
})

LandingLayout.displayName = 'LandingLayout'

LandingLayout.propTypes = {
  title: string.isRequired,
  body: object.isRequired,
  rightContent: func,
  slug: string,
  showBelowSection: bool,
}

LandingLayout.defaultProps = {
  rightContent: () => {},
  slug: null,
  showBelowSection: false,
}

export default LandingLayout
