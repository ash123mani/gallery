import React from 'react'
import { object, string } from 'prop-types'
import Img from 'gatsby-image'
// import Img from 'gatsby-image/withIEPolyfill'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import options from '../../components/blogElements/BlogElements'

import { Container, RichInfo, ImageContainer, KnowMore } from './styles'

const InfoCard = ({ richTextJson, imageSrc, knowMoreText, redirectUrl }) => {
  const { fluid, title } = imageSrc
  return (
    <Container>
      <RichInfo>
        {documentToReactComponents(richTextJson, options)}
        {redirectUrl && <KnowMore to={redirectUrl}>{knowMoreText}</KnowMore>}
      </RichInfo>
      <ImageContainer>
        <Img fluid={fluid} title={title} alt={title} objectFit />
      </ImageContainer>
    </Container>
  )
}

InfoCard.propTypes = {
  richTextJson: object.isRequired,
  imageSrc: object.isRequired,
  knowMoreText: string,
  redirectUrl: string,
}

InfoCard.defaultProps = {
  knowMoreText: 'Know More ->',
  redirectUrl: '',
}

export default InfoCard
