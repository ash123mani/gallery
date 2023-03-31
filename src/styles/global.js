import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    font-size: 16px;
    line-height: 1.75;
  }

  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    color: rgba(var(--color-primary), 1);
    font-size: 62.5%;
    line-height: 1.75;
    font-variant-ligatures: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body::-webkit-scrollbar {
    display: none;
  }


  ::selection { background: green; }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Poppins";
    font-weight: 400;
    margin-bottom: 0;
    color: #0000;
  }

  h1 {
    font-size: 3.052rem;
    line-height: 1.3;
  }

  h2 {
    font-size: 2.441rem;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.953rem;
    line-height: 1.3;
  }

  h4 {
    font-size: 1.563rem;
    line-height: 1.3;
  }

  h5, h6 {
    font-size: 1.25em;
    line-height: 1.3;
  }


  p,
  i,
  ul,
  li,
  form,
  input {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    line-height: 28px;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    line-height: 28px;
  }

  img {
    margin: 0px;
  }

  @media screen and (max-width: 768px) {
    h1 {
    font-size: 1.802rem;
    line-height: 1.3;
  }

  h2 {
    font-size: 1.602rem;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.424rem;
    line-height: 1.3;
  }

  h4 {
    font-size: 1.266rem;
    line-height: 1.3;
  }

  h5, h6 {
    font-size: 1.125em;
    line-height: 1.3;
  }
  }
`

export default GlobalStyles
