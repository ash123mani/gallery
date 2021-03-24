import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    /* background: #073535; */
    font-family: 'Poppins', sans-serif;
    color: rgba(var(--color-primary), 1);
    font-size: 62.5%;
    line-height: 1;
    font-variant-ligatures: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
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
    font-size: 3.8rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 2rem;
  }


  p,
  i,
  ul,
  li,
  form,
  textarea,
  input {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    color: #0000;
    line-height: 1.4;
    letter-spacing: 0.4px;
  }

  a {
    text-decoration: none;
  }

  img {
    margin: 0px;
  }

  @media screen and (max-width: 768px) {
      html {
        font-size: 50% !important;
      }
  }
`

export default GlobalStyles
