import React from 'react'
import { object, string, oneOf, bool } from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
  const image = imageSrc ? getImage(imageSrc) : null

  return (
    <Container direction={direction}>
      <RichInfo>
        {documentToReactComponents(richTextJson, options)}
        {showRedirect && <KnowMoreFirst to={redirectUrl}>{knowMoreText}</KnowMoreFirst>}
      </RichInfo>
      {(!!image || !!redirectUrl) && (
        <ImageContainer>
          {image && (
            <GatsbyImage
              image={image}
              alt={imageSrc?.title || 'Content image'}
              loading="eager"
              formats={['auto', 'webp', 'avif']}
            />
          )}
          {showRedirect && <KnowMoreSecond to={redirectUrl}>{knowMoreText}</KnowMoreSecond>}
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
  direction: oneOf(['reverse', 'row']),
  showRedirect: bool,
}

InfoCard.defaultProps = {
  knowMoreText: 'Know More ->',
  redirectUrl: '',
  direction: 'row',
  imageSrc: null,
  showRedirect: true,
}

export default InfoCard
