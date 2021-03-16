import React, { useEffect, useRef, useState } from 'react'
import { Flex } from 'rebass'
import styled, { css } from 'styled-components'
import { object, string, bool } from 'prop-types'

import Navigator from '../shared/Navigator'

import { Article, Title, fadeInUp } from '../components/Utils'

const Content = styled(Flex)`
  width: 50%;
  padding-right: 40px;
  flex-direction: column;
  padding-left: 20px;
  border-left: 1px solid #d3d1d1;
`

const Image = styled.img`
  height: 100%;
  width: 200px;
  margin-right: 3rem;
`

const ArticleWrapper = styled(Flex)`
  margin: 20px 0px;
`

const MetaInfoWrapper = styled(Flex)`
  justify-content: space-between;
  margin-top: 40px !important;
  ${({ animate }) => {
    return animate
      ? css`
          animation: 0.5s ${fadeInUp} ease-in-out;
        `
      : css`
          animation: unset;
        `
  }}
`

const LeftContent = ({ body, title, slug, showBelowSection, bgImage }) => {
  const titleRef = useRef(null)
  const bodyRef = useRef(null)

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (titleRef.current && bodyRef.current) {
      setAnimate(true)

      const timerId = setTimeout(() => {
        if (timerId) {
          setAnimate(false)
        }
      }, 500)
    }
  }, [body, title, titleRef, bodyRef])

  return (
    <Content bgImage={bgImage}>
      <Title ref={titleRef} animate={animate}>
        {title}
      </Title>
      <ArticleWrapper>
        {bgImage && <Image src={bgImage} />}
        <Article ref={bodyRef} animate={animate}>
          {body}
        </Article>
      </ArticleWrapper>

      {showBelowSection && (
        <MetaInfoWrapper animate={animate}>
          <Navigator to={slug} hollow>
            Read More
          </Navigator>
        </MetaInfoWrapper>
      )}
    </Content>
  )
}

LeftContent.propTypes = {
  body: object.isRequired,
  title: string.isRequired,
  slug: string,
  showBelowSection: bool,
  bgImage: string,
}

LeftContent.defaultProps = {
  slug: null,
  showBelowSection: false,
  bgImage: '',
}

export default LeftContent
