import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const defaultTitle = 'I AM ASHUTOSH'

const SEO = props => (
  <Helmet>
    <title>{`${props.title} - ${defaultTitle}`}</title>
    <meta name="description" content={props.description} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={defaultTitle} />
    <meta property="og:title" content={`${props.title} - ${defaultTitle}`} />
    <meta property="og:description" content={props.description} />
    {typeof window !== `undefined` && <meta property="og:url" content={location.href} />}
    {props.image ? <meta property="og:image" content={props.image} /> : null}
    {/* {props.image ? <meta property="og:image:width" content={props.image.ogimg.width} /> : null}
    {props.image ? <meta property="og:image:height" content={props.image.ogimg.height} /> : null} */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@iammatthias" />
    <meta name="twitter:title" content={`${props.title} - ${defaultTitle}`} />
    <meta name="twitter:description" content={props.description} />
    {props.image ? <meta name="twitter:image" content={props.image} /> : null}
  </Helmet>
)

SEO.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
}

SEO.defaultProps = {
  title: 'I AM ASHUTOSH',
  image: '',
  description: 'Web Developer and Poet based in Bangalore.',
}

export default SEO
