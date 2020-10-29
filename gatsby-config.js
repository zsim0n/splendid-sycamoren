require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}
// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    `Contentful spaceId and the access token need to be provided.`
  )
}

module.exports = {
  siteMetadata: {
    title: `zoltansimon.me blog - contact - portfolio`,
    description: `Thing`,
    siteUrl: `https://zoltansimon.me/`,
    author: `@zsim0n`,
    social: {
      twitter: `zsim0n`,
      github: `zsim0n`,
      linkedin: `zoltansimon27`,
    },
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images-contentful`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: false,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [`gatsby-remark-images-contentful`],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zoltansimon-me`,
        short_name: `zoltansimon-me`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
              variants: [`300`, `400`, `500`],
              // subsets: ['latin']
              // text: 'Hello'
              // fontDisplay: 'swap',
              // strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
        // formats: ['woff2', 'woff'],
        // useMinify: true,
        // usePreload: true,
        // usePreconnect: false,
      },
    },

    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      // options: {
      //  stylesProvider: {
      //    injectFirst: true,
      //  },
      // },
    },
    // 'gatsby-plugin-styled-components',

    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulPost } }) => {
              return allContentfulPost.edges.map(node => {
                return {
                  title: node.node.title.title,
                  date: node.node.date,
                  description: node.node.excerpt?.excerpt,
                  url:
                    site.siteMetadata.siteUrl +
                    node.node.stackbit_url_path?.stackbit_url_path,
                  guid:
                    site.siteMetadata.siteUrl +
                    node.node.stackbit_url_path?.stackbit_url_path,
                }
              })
            },
            query: `{
              allContentfulPost(sort: { fields: date, order: DESC }) {
                edges {
                  node {
                    contentful_id
                    date
                    excerpt {
                      excerpt
                    }
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
            `,
            output: `/rss.xml`,
            title: `zoltansimon.me - RSS Feed`,
            match: `^/blog/`,
          },
        ],
      },
    },
  ],
}
