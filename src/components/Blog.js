import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql } from "gatsby"

import PostCard from "./PostCard"
import ScrollToTop from "./ScrollToTop"

const useStyles = makeStyles(theme => ({
  root: props => ({
    marginLeft: "0px",
    padding: theme.spacing(3),
    display: "flex",
    overflow: "hidden",
    flexGrow: 1,

    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${props.drawerWidth}px)`,
      marginLeft: props.drawerWidth,
    },
  }),
  item: {
    width: "100%",
  },
}))

export default function Blog(props) {
  const classes = useStyles(props)
  const data = useStaticQuery(graphql`
    query allContentfulPost {
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
            thumb_img_path {
              fluid {
                src
              }
            }
            content {
              childMdx {
                body
              }
            }
          }
        }
      }
    }
  `)
  return (
    <main className={classes.root}>
      <Grid container direction="row" spacing={5}>
        {data.allContentfulPost.edges.map(({ node }) => {
          return (
            <Grid item className={classes.item} key={node.contentful_id}>
              <PostCard data={node} preview />
            </Grid>
          )
        })}
      </Grid>
      <ScrollToTop />
    </main>
  )
}
