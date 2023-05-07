const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // eslint-disable-next-line no-undef
  // const loadGalleries = new Promise(resolve => {
  //   graphql(`
  //     query {
  //       allContentfulGallery {
  //         edges {
  //           node {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     const pages = result.data.allContentfulGallery.edges
  //     pages.map(({ node }) => {
  //       createPage({
  //         path: `${node.slug}/`,
  //         component: path.resolve(`./src/templates/gallery.js`),
  //         context: {
  //           slug: node.slug,
  //         },
  //       })
  //     })
  //     resolve()
  //   })
  // })

  // eslint-disable-next-line no-undef
  const loadPosts = new Promise(resolve => {
    graphql(`
      query {
        allContentfulBlogPosts(sort: { fields: [publishedDate], order: DESC }, limit: 10000) {
          edges {
            node {
              publishedDate
              slug
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulBlogPosts.edges
      posts.map(({ node }) => {
        createPage({
          path: `/blog${node.slug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  // eslint-disable-next-line no-undef
  const loadAboutPageInfoCards = new Promise(resolve => {
    graphql(`
      query {
        allContentfulAbout {
          edges {
            node {
              workExperience {
                redirectUrl
              }
            }
          }
        }
      }
    `).then(result => {
      const infoCards = result.data.allContentfulAbout.edges
      infoCards.map(({ node: { workExperience } }) => {
        workExperience.map(exp => {
          !!exp.redirectUrl &&
            createPage({
              path: `/about${exp.redirectUrl}`,
              component: path.resolve(`./src/templates/about-details.js`),
              context: {
                slug: exp.redirectUrl,
              },
            })
        })
      })
      resolve()
    })
  })

  // eslint-disable-next-line no-undef
  return Promise.all([loadPosts, loadAboutPageInfoCards])
}
