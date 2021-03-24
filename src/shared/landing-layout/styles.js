import styled, { css } from 'styled-components'
import { Flex } from 'rebass'
import { isMobile } from 'react-device-detect'

const Container = styled.section`
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
  overflow-x: hidden;
  height: 100%;

  ${isMobile &&
    css`
      flex-direction: column;
    `};
`

const RightContent = styled(Flex)`
  padding-left: 4rem;
  width: 50%;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  padding-top: 10rem;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  & .link {
    width: 200px;
    margin-bottom: 20px;
    text-align: left;

    &:hover {
      text-align: left;
      transition: all 0.3s ease-in;
    }
  }

  ${isMobile &&
    css`
      width: 100%;
      padding-left: 0rem;
      padding-top: 0rem;
      height: auto;
    `};
`

export { Container, RightContent }
