/* eslint react/prop-types: 0 */
import React from 'react'
import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
