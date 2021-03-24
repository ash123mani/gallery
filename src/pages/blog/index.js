import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { isMobile } from 'react-device-detect'

import SEO from '../../components/SEO'
import BlogCard from '../../shared/blog-cards'
// import Button from '../../common/button'
import shareImage from '../../static/shareImage.jpeg'
// import categories from '../../config/categories'
import LandingLayout from '../../shared/landing-layout'

import {
  Wrapper,
  BlogCards,
  Author,
  Title,
  RightContentContainer,
  cuCss,
  // ButtonWrapper,
} from './styles'

const BlogPage = ({ data, location }) => {
  const [selectedCategory] = useState('all')
  const contentfulBlogPosts = data.allContentfulBlogPosts.edges
  const pathName = location.pathname
  console.log({ pathName })

  // const setCategory = category => setSelectedCategory(category)

  const renderRightContent = () => {
    return (
      <>
        {contentfulBlogPosts.map(({ node }) => {
          console.log('node', node)
          const blogCard = (
            <BlogCard
              blogPosts
              key={node.id}
              id={node.id}
              slug={node.slug}
              title={node.homepage}
              excerpt={node.excerpt}
              publishDate={node.publishedDate}
              image={node.heroImage}
              tag={node.tags.split(' ')[0]}
              className="blog"
              widthType={node.blogWidthClass}
              css={cuCss}
            />
          )

          if (node.content === selectedCategory || selectedCategory === 'all') {
            return blogCard
          }

          return null
        })}
      </>
    )
  }

  // const renderButtons = () => {
  //   return Object.values(categories).map(category => (
  //     <Button
  //       key={category}
  //       style={{ marginRight: '20px', zIndex: '20', marginBottom: isMobile ? '10px' : '0px' }}
  //       onClick={() => setCategory(category.name)}
  //       selected={category.name === selectedCategory}
  //     >
  //       {category.label}
  //     </Button>
  //   ))
  // }

  const rightContent = () => {
    return (
      <RightContentContainer>
        <Title>
          Your time is limited, so dont waste it living someone elses life. Dont be trapped by
          eslint-disable-next-line react/no-unescaped-entities dogma – which is living with the
          results of other peoples thinking
        </Title>
        <Author> -Steve Jobs</Author>
      </RightContentContainer>
    )
  }

  return (
    <>
      <SEO image={shareImage} />
      <Wrapper>
        <LandingLayout
          title="Welcome here, where crazy things happer"
          body="I am body"
          rightContent={rightContent}
          showDownArrow={!isMobile}
          pathName={pathName}
        />
        {/* {!isMobile && <ButtonWrapper>{renderButtons()}</ButtonWrapper>} */}
        <BlogCards id="bottom">{renderRightContent()}</BlogCards>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query Blog {
    contentfulBlogHome {
      title
      flipTilte
      body {
        json
      }
    }

    allContentfulBlogPosts(sort: { fields: [publishedDate], order: DESC }) {
      edges {
        node {
          id
          slug
          homepage
          blogWidthClass
          content
          body {
            json
          }
          publishedDate(formatString: "d/M/YYYY")
          tags
          heroImage {
            title
            fluid(quality: 65, maxHeight: 200) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          excerpt
        }
      }
    }
  }
`

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default BlogPage
