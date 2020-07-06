import React from 'react'
import PropTypes from 'prop-types'
import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
  props: PropTypes.object.isRequired,
}
