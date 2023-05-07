import React from 'react'
import { object, string, oneOf, bool } from 'prop-types'
import Img from 'gatsby-image'
// import Img from 'gatsby-image/withIEPolyfill'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import options from '../../components/blogElements/BlogElements'

import { Container, RichInfo, ImageContainer, KnowMoreFirst, KnowMoreSecond } from './styles'

const InfoCard = ({
  richTextJson,
  imageSrc,
  knowMoreText,
  redirectUrl,
  direction,
  showRedirect,
}) => {
  const { fluid, title } = imageSrc
  return (
    <Container direction={direction}>
      <RichInfo>
        {documentToReactComponents(richTextJson, options)}
        {showRedirect && <KnowMoreFirst to={redirectUrl}>{knowMoreText}</KnowMoreFirst>}
      </RichInfo>
      {(!!fluid || !!redirectUrl) && (
        <ImageContainer>
          {fluid && <Img fluid={fluid} title={title} alt={title} objectFit="contain" />}
          {redirectUrl && <KnowMoreSecond to={redirectUrl}>{knowMoreText}</KnowMoreSecond>}
        </ImageContainer>
      )}
    </Container>
  )
}

InfoCard.propTypes = {
  richTextJson: object.isRequired,
  imageSrc: object,
  knowMoreText: string,
  redirectUrl: string,
  direction: oneOf[('reverse', 'row')],
  showRedirect: bool,
}

InfoCard.defaultProps = {
  knowMoreText: 'Know More ->',
  redirectUrl: '',
  direction: 'row',
  imageSrc: {},
  bool: true,
}

export default InfoCard
