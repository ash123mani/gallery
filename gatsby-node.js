const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulGallery {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

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
}
