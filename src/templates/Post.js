import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostView from "../components/PostView"

const Post = props => {
  return (
    <Layout>
      <PostView {...props} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query GetPostByContentfulId($contentful_id: String!) {
    contentfulPost(contentful_id: { eq: $contentful_id }) {
      date
      excerpt {
        excerpt
      }
      stackbit_url_path {
        stackbit_url_path
      }
      title {
        title
      }
      content {
        childMdx {
          body
        }
      }
      thumb_img_path {
        fluid {
          src
        }
      }
    }
  }
`
export default Post
