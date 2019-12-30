import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    width: 100%;
    background: rgba(var(--base), 1);
    color: rgba(var(--secondary), 1);
    font-size: 62.5%;
    line-height: 1;
    font-variant-ligatures: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Poppins";
    font-weight: 300;
  }

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2rem;
  }


  p,
  i,
  a,
  ul,
  li,
  form,
  textarea,
  input {
    font-family: 'Roboto';
    font-size: 2rem;
    line-height: 25px;
  }

  a {
    text-decoration: none;
    font-family: "Poppins";
    font-weight: 400;
    color: var(--yellow-500);
    position: relative;

    &:before {
      position: absolute;
      content: '';
      width: 0%;
      height: 1px;
      background: white;
      bottom: -3px;
      left: 50%;
    }

    &:after {
      position: absolute;
      content: '';
      width: 0%;
      height: 1px;
      background: white;
      bottom: -3px;
      right: 50%;
    }

    &:hover:before,
    &:hover:after {
      width: 50%;
      transition: width 0.5s;
    }
  }

`

export default GlobalStyles
