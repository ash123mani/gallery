import { createGlobalStyle } from 'styled-components'

const ColorStyles = createGlobalStyle`
  :root {
    --color-primary: #000;
    --color-primary-medium: #000000ab;
    --color-primary-light: #0000006e;

    --code-block: #f5f5f5;

    --border-color: rgb(211 209 209);
    
    --button-background: #000;
    --link-active-background: #6f6f6f4a;

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

  --f-dark-white: #ffffff;

  --f-transparent: transparent;

  --border-radius-primary: 6px;
  --border-radius-medium: 4px;
  --border-radius-small: 2px;
  }
`

export default ColorStyles
