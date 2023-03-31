import React from 'react'
import { oneOf, func } from 'prop-types'

import grid from '../../static/grid.png'
import list from '../../static/list.png'
import gridSelected from '../../static/grid-selected.png'
import listSelected from '../../static/list-selected.png'

import { View, ImageContainer, StyledImage } from './styles'

const SelectView = ({ removeBorder, onViewChange, selectedView }) => {
  const isGridSelected = selectedView === 'grid'
  const isListSelected = selectedView === 'list'

  return (
    <ImageContainer removeBorder={removeBorder}>
      <View>Your View</View>

      <StyledImage
        src={isGridSelected ? gridSelected : grid}
        onClick={() => onViewChange('grid')}
        selectedView={selectedView}
      />
      <StyledImage
        src={isListSelected ? listSelected : list}
        onClick={() => onViewChange('list')}
        selectedView={selectedView}
      />
    </ImageContainer>
  )
}

SelectView.propTypes = {
  removeBorder: oneOf(['top', 'bottom', 'left', 'right']),
  onViewChange: func.isRequired,
  selectedView: oneOf(['list', 'grid']),
}

SelectView.defaultProps = {
  removeBorder: '',
  selectedView: '',
}

export default SelectView
