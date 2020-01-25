import React from 'react'
import { Box } from 'rebass'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Headroom from 'react-headroom'

import Logo from './Logo'

const Content = styled(Box)`
  grid-area: Content;

  padding: 2rem 15rem;

  section {
    display: flex;

    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;
  }

  p > a {
    font-size: 1.8rem;
    font-weight: 600;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    & {
      padding: 0rem 4rem;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      padding: 0rem 2rem;
    }

    p > a:last-of-child {
      display: none;
    }

    .contact {
      display: none;
    }
  }
`

const Menu = () => {
  return (
    <Headroom
      style={{
        position: 'fixed',
        zIndex: '300',
        transition: 'all .5s ease-in-out',
      }}
    >
      <Content>
        <section>
          <Logo />
          <p>
            <Link to="/">Gallery</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/blog">Blog</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/contact" className="contact">
              Contact
            </Link>
          </p>
        </section>
      </Content>
    </Headroom>
  )
}

export default Menu
