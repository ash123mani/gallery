import React, { useEffect, useRef, useState } from 'react'
import { object, string, bool } from 'prop-types'

import { Article, Title, Divider } from '../../../components/Utils'

import Navigator from '../../navigator'

import { MetaInfoWrapper, ArticleWrapper, Image, Content } from './styles'

const LeftContent = ({ body, title, slug, showBelowSection, bgImage, showDivider }) => {
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
      {showDivider && <Divider />}
      {body && (
        <ArticleWrapper>
          {bgImage && <Image src={bgImage} />}
          <Article ref={bodyRef} animate={animate}>
            {body}
          </Article>
        </ArticleWrapper>
      )}

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
  showDivider: bool,
}

LeftContent.defaultProps = {
  slug: null,
  showBelowSection: false,
  bgImage: '',
  showDivider: true,
}

export default LeftContent
