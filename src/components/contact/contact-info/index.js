import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import { isMobile } from 'react-device-detect'

import { StyledLink, InfoBox, StyledIcon, Text, Subtitle } from './styles'

const Contact = ({ infoArr }) => {
  return (
    <>
      {infoArr.map((info, index) => {
        return (
          <StyledLink key={index} href={info.href} target="_blank">
            <InfoBox hoverColor={info.hoverColor}>
              <StyledIcon src={info.img} />
              <Box pl={isMobile ? 3 : 4} pr={2}>
                <Text fontSize="3rem">{info.title}</Text>
                <Subtitle>{info.subtitle}</Subtitle>
              </Box>
            </InfoBox>
          </StyledLink>
        )
      })}
    </>
  )
}

Contact.propTypes = {
  infoArr: PropTypes.array.isRequired,
}

export default Contact
