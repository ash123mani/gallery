/* eslint react/prop-types: 0 */
import React from 'react'
import Layout from './src/components/layout'

const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)
}

// eslint-disable-next-line react/display-name
const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export { onRouteUpdate, wrapPageElement }
