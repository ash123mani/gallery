import React, { useEffect, useRef, useState } from 'react'
import { object, string, bool } from 'prop-types'

import { Article, Title } from '../../../components/Utils'

import Navigator from '../../navigator'

import { MetaInfoWrapper, ArticleWrapper, Image, Content } from './styles'

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
