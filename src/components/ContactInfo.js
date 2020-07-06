import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from 'rebass'

const Content = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  width: 100%;
  align-items: center;
  padding-top: 10rem;

  @media screen and (max-width: 870px) {
    & {
      grid-template-columns: repeat(1, 1fr);
      padding-top: 2rem;
      grid-gap: 2rem;
    }
  }
`

const InfoBox = styled(Flex)`
  padding: 10px;
  border: 1px solid var(--border);
  align-items: center;
  &:hover {
    border: 1px solid var(--border);
  }
`

const StyledIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 0px;
  object-fit: cover;

  @media screen and (max-width: 360px) {
    & {
      width: 100%;
    }
  }
`

const StyledLink = styled.a`
  &:hover:after,
  &:hover:before {
    display: none;
  }
  color: #ffffffd9;
  align-items: center;
  align-self: stretch;
`

const Contact = ({ infoArr }) => {
  return (
    <Content>
      {infoArr.map((info, index) => {
        return (
          <StyledLink key={index} href={info.href} target="_blank">
            <InfoBox>
              <StyledIcon src={info.img} />
              <Box pl={4} pr={2}>
                <p>{info.title}</p>
                <p>{info.subtitle}</p>
              </Box>
            </InfoBox>
          </StyledLink>
        )
      })}
    </Content>
  )
}

Contact.propTypes = {
  infoArr: PropTypes.array.isRequired,
}

export default Contact
