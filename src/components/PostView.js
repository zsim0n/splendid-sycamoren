import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"

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

const PostView = props => {
  const classes = useStyles(props)
  const { data } = props

  return (
    <main className={classes.root}>
      <Grid container direction="row" spacing={5}>
        <Grid item className={classes.item}>
          <PostCard data={data.contentfulPost} />
        </Grid>
      </Grid>
      <ScrollToTop />
    </main>
  )
}

PostView.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default PostView
