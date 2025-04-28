import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import FsLightbox from 'fslightbox-react'
import { chunk, sum } from 'lodash'

import { Title, imageBoxStyles } from './styles'

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
    <div>
      <Title key={title}>{title}</Title>
      {images.map((image, i) => {
        const widthArr = rowAspectRatioSumsByBreakpoints.map((rowAspectRatioSums, j) => {
          const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j])
          const rowAspectRatioSum = rowAspectRatioSums[rowIndex]
          return `${(image.fluid.aspectRatio / rowAspectRatioSum) * 100}%`
        })

        return (
          <div onClick={() => openLightbox(i)} key={image.id} width={widthArr} css={imageBoxStyles}>
            <GatsbyImage onClick={() => openLightbox(i)} fluid={image.thumbnail} title={image.title} />
          </div>
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
    </div>
  )
}

GalleryGrid.propTypes = {
  title: PropTypes.string.isRequired,
  parent: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  itemsPerRow: PropTypes.array.isRequired,
}

export default GalleryGrid
