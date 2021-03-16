import React, { useState } from 'react'
import { css } from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import FsLightbox from 'fslightbox-react'
import styled from 'styled-components'
import { chunk, sum } from 'lodash'
import { Box } from 'rebass'

const Title = styled.h3`
  padding: 3rem 1rem;
  color: var(--yellow-400);
`

const imageBoxStyles = css`
  display: inline-block;
  vertical-align: middle;
  width: auto;
  padding-bottom: 2rem;
  padding-left: 2rem;
  cursor: pointer;

  & .gatsby-image-wrapper {
    border-radius: 2px;
  }
`

const GalleryGrid = ({ title, images, itemsPerRow: itemsPerRowByBreakpoints }) => {
  const aspectRatios = images.map(image => image.fluid.aspectRatio)
  const lightboxImages = images.map(image => image.fluid.src)
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(itemsPerRow =>
    chunk(aspectRatios, itemsPerRow).map(rowAspectRatios => sum(rowAspectRatios))
  )

  const [toggler, setToggler] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const openLightbox = imageIndex => {
    setImageIndex(imageIndex + 1)
    setToggler(!toggler)
  }

  return (
    <Box>
      <Title key={title}>{title}</Title>
      {images.map((image, i) => {
        const widthArr = rowAspectRatioSumsByBreakpoints.map((rowAspectRatioSums, j) => {
          const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j])
          const rowAspectRatioSum = rowAspectRatioSums[rowIndex]
          return `${(image.fluid.aspectRatio / rowAspectRatioSum) * 100}%`
        })

        return (
          <Box onClick={() => openLightbox(i)} key={image.id} width={widthArr} css={imageBoxStyles}>
            <Img onClick={() => openLightbox(i)} fluid={image.thumbnail} title={image.title} />
          </Box>
        )
      })}
      <FsLightbox
        toggler={toggler}
        sources={lightboxImages}
        slide={imageIndex}
        onClick={() => {
          console.log(imageIndex)
        }}
      />
    </Box>
  )
}

GalleryGrid.propTypes = {
  title: PropTypes.string.isRequired,
  parent: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  itemsPerRow: PropTypes.array.isRequired,
}

export default GalleryGrid
