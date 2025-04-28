module.exports = {
  siteMetadata: {
    title: `Falak`,
    description: `On Falak we discuss ideas and perspectives. We on Falak write on Love,Life,Chaos and Music.`,
    author: `@falak`,
    url: 'https://falak.netlify.app',
    image: './src/static/falak.png',
    twitterUsername: '@ashutos58989559',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#08080B`,
        theme_color: `#08080B`,
        display: `minimal-ui`,
        icon: `src/static/falak.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              withWebp: true,
              quality: 80,
            },
          },
          {
            resolve: 'gatsby-remark-images-grid',
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: '@raae/gatsby-remark-oembed',
            options: {
              providers: {
                exclude: ['Reddit', 'Flickr', 'Instagram', 'Twitter'],
              },
            },
          },
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              withWebp: true,
              quality: 80,
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: 'emoji-icon',
              size: 64,
              styles: {
                display: 'inline',
                margin: '0',
                'margin-top': '1px',
                position: 'relative',
                top: '5px',
                width: '25px',
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              withWebp: true,
              quality: 80,
            },
          },
          {
            resolve: 'gatsby-remark-images-grid',
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: '@raae/gatsby-remark-oembed',
            options: {
              providers: {
                exclude: ['Reddit', 'Flickr', 'Instagram', 'Twitter'],
              },
            },
          },
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        pure: true,
      },
    },
  ],
  trailingSlash: 'never',
  graphqlTypegen: true,
  jsxRuntime: 'automatic',
}
