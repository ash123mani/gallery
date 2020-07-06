import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    width: 100%;
    background: #073535;
    color: rgba(var(--secondary), 1);
    font-size: 62.5%;
    line-height: 1;
    font-variant-ligatures: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
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
    color: #fff !important;
  }

  h1 {
    font-size: 3.8rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.5rem;
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
    font-family: 'Poppins', sans-serif;;
    font-size: 2.1rem;
    line-height: 1.8;
    word-spacing: 0.1rem;
    letter-spacing: -0.004rem;
    margin: 0;
    color: #e1e1e1 !important;
    ${'' /* font-weight: 400; */}
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

  @media screen and (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }
    
      h2 {
        font-size: 2rem;
      }
    
      h3 {
        font-size: 1.5rem;
      }
    
      h4 {
        font-size: 1.5rem;
      }

      p,
      i,
      a,
      ul,
      li,
      form,
      textarea,
      input {
        font-size: 1.5rem;
      }
  }
`

export default GlobalStyles
