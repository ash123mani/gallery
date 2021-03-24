import React from 'react'
import { Box } from 'rebass'
import { string, object, func, bool } from 'prop-types'

import LeftContent from './left-content'
import DownArrow from '../down-arrow'

import { Container, RightContent } from './styles'

const LandingLayout = React.forwardRef(props => {
  const { title, body, rightContent, slug, showBelowSection, showDownArrow, pathName } = props
  return (
    <Container>
      {title && body && (
        <LeftContent title={title} body={body} slug={slug} showBelowSection={showBelowSection} />
      )}
      <RightContent>
        <Box flex="1">{rightContent()}</Box>
        {showDownArrow && <DownArrow pathName={pathName} />}
      </RightContent>
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
  showDownArrow: bool,
  pathName: bool,
}

LandingLayout.defaultProps = {
  rightContent: () => {},
  slug: null,
  showBelowSection: false,
  showDownArrow: false,
  pathName: '',
}

export default LandingLayout
