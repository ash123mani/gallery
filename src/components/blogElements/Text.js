/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Para = styled.p`
  word-spacing: 0.1rem;
  letter-spacing: 0.03rem;
  margin: 2rem 0rem;
  font-weight: normal;

  @media only screen and (max-width: 768px) {
    margin: 1.2rem 0rem;
  }
`

const Text = ({ children }) => <Para>{children}</Para>

export default Text
