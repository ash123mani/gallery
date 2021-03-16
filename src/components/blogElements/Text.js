/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Para = styled.p`
  color: #000;
  font-size: 1.9rem;
  line-height: 1.5;
  word-spacing: 0.1rem;
  letter-spacing: 0.03rem;
  margin: 2rem 0rem;
  font-weight: normal;
`

const Text = ({ children }) => <Para>{children}</Para>

export default Text
