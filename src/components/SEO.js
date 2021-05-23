import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import defaultImage from '../static/falak.png'

const SEO = props => {
  const imageUrl = `https:${props.image}`
  return (
    <Helmet>
      <title>{`${props.title}`}</title>
      <meta name="description" content={props.description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Falak" />
      <meta property="og:title" content={`${props.title}`} />
      <meta property="og:description" content={props.description} />
      {typeof window !== `undefined` && <meta property="og:url" content={location.href} />}
      {props.image && props.image ? <meta property="og:image" content={imageUrl} /> : null}
      {props.image && props.image ? <meta property="og:image:width" content="400" /> : null}
      {props.image && props.image ? <meta property="og:image:height" content="300" /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@ashutos58989559" />
      <meta name="twitter:title" content={`${props.title}`} />
      <meta name="twitter:description" content={props.description} />
      {props.image ? <meta name="twitter:image" content={imageUrl} /> : null}
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
}

SEO.defaultProps = {
  title: 'Falak - Where every perspective matters.',
  image: defaultImage,
  description:
    'On Falak, every perspective matters, we believe that we all are what we percieve. So on Falak we are sharing experiences.',
}

export default SEO
