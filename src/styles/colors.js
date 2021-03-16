import { createGlobalStyle } from 'styled-components'

const ColorStyles = createGlobalStyle`
  :root {
    --black-100: #737373;
    --black-200: #b7aeae;
    --black-300: #08080B;
    --black-400: #000;

    --base: 8, 8, 11; /* #08080B */

  --base-200: 115, 115, 225; /* 737373 */

  --secondary: 255, 255, 255;

  --yellow-100: #fef1cd;
  --yellow-200: #fee39a;
  --yellow-300: #fdd568;
  --yellow-400: #fdc835;
  --yellow-500: #fcba04;
  --yellow-600: #ca9502;
  --yellow-700: #976f02;
  --yellow-800: #654a01;
  --yellow-900: #322501;

  --border: #fff;

  --f-dark-black: #000000;
  --f-dark-white: #ffffff;

  --f-transparent: transparent;
  }
`

export default ColorStyles
