/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Para = styled.p`
  color: #ffffffd9;
  font-size: 1.9rem;
  line-height: 1.7;
  word-spacing: 0.1rem;
  letter-spacing: 0.03rem;
`

const Text = ({ children }) => <Para>{children}</Para>

export default Text
