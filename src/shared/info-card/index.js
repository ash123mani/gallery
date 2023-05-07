import React from 'react'
import { object, string, oneOf } from 'prop-types'
import Img from 'gatsby-image'
// import Img from 'gatsby-image/withIEPolyfill'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import options from '../../components/blogElements/BlogElements'

import { Container, RichInfo, ImageContainer, KnowMoreFirst, KnowMoreSecond } from './styles'

const InfoCard = ({ richTextJson, imageSrc, knowMoreText, redirectUrl, direction }) => {
  const { fluid, title } = imageSrc
  return (
    <Container direction={direction}>
      <RichInfo>
        {documentToReactComponents(richTextJson, options)}
        {redirectUrl && <KnowMoreFirst to={redirectUrl}>{knowMoreText}</KnowMoreFirst>}
      </RichInfo>
      <ImageContainer>
        {fluid && <Img fluid={fluid} title={title} alt={title} objectFit="contain" />}
        {redirectUrl && <KnowMoreSecond to={redirectUrl}>{knowMoreText}</KnowMoreSecond>}
      </ImageContainer>
    </Container>
  )
}

InfoCard.propTypes = {
  richTextJson: object.isRequired,
  imageSrc: object,
  knowMoreText: string,
  redirectUrl: string,
  direction: oneOf[('reverse', 'row')],
}

InfoCard.defaultProps = {
  knowMoreText: 'Know More ->',
  redirectUrl: '',
  direction: 'row',
  imageSrc: {},
}

export default InfoCard
