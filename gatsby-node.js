const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const Post = path.resolve("./src/templates/Post.js")
    resolve(
      graphql(
        `
          {
            allContentfulPost {
              edges {
                node {
                  contentful_id
                  title {
                    title
                  }
                  stackbit_url_path {
                    stackbit_url_path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          // console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulPost.edges
        posts.forEach(post => {
          createPage({
            path: `${post.node.stackbit_url_path.stackbit_url_path}/`,
            component: Post,
            context: {
              title: post.node.title.title,
              contentful_id: post.node.contentful_id,
            },
          })
        })
      })
    )
  })
}
