const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // eslint-disable-next-line no-undef
  const loadGalleries = new Promise(resolve => {
    graphql(`
      query {
        allContentfulGallery {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulGallery.edges
      pages.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/gallery.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

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
          path: `/blog${node.slug}/`,
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
  return Promise.all([loadGalleries, loadPosts])
}
