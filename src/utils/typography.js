import Typography from 'typography'

const typography = new Typography({
  title: 'Poppins + ',
  baseFontSize: '18px',
  basLineHeight: 1.4,
  googleFonts: [
    {
      name: 'Poppins',
      styles: ['300', '400', '500', '600'],
    },
    {
      name: 'Roboto',
      styles: ['400'],
    },
  ],
})

const { rythm, scale } = typography

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export { rythm, scale, typography as default }
