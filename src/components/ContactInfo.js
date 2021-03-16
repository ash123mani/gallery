import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from 'rebass'

const InfoBox = styled(Flex)`
  padding: 2rem;
  align-items: center;
  &:hover p {
    color: ${({ hoverColor }) => hoverColor || 'black'};
  }
`

const StyledIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 0px;
  object-fit: cover;
`

const StyledLink = styled.a`
  margin-bottom: 3rem;
  &:hover:after,
  &:hover:before {
    display: none;
  }
  color: #ffffffd9;
  align-items: center;
  align-self: stretch;
`

const Text = styled.p`
  font-size: 2.8rem;
  color: var(--f-dark-black);
  font-weight: bold;
`

const Subtitle = styled.p`
  font-size: 2.4rem;
  color: var(--f-dark-black);
`

const Contact = ({ infoArr }) => {
  return (
    <>
      {infoArr.map((info, index) => {
        return (
          <StyledLink key={index} href={info.href} target="_blank">
            <InfoBox hoverColor={info.hoverColor}>
              <StyledIcon src={info.img} />
              <Box pl={4} pr={2}>
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
