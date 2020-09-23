import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
  card: {
    border: "none",
    boxShadow: "none",
    width: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  button: {
    margin: theme.spacing(1),
  },
}))
const BlogHeader = ({ classes, data, preview }) => (
  <>
    {" "}
    <CardHeader
      component="header"
      titleTypographyProps={{ variant: "h4" }}
      title={data.title.title}
      subheaderTypographyProps={{ variant: "overline" }}
      subheader={data.date}
    />
    {preview && (
      <CardMedia
        className={classes.media}
        image={data.thumb_img_path.fluid.src}
        title="Paella dish"
      />
    )}
  </>
)
BlogHeader.defaultProps = {
  preview: false,
}
BlogHeader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  preview: PropTypes.bool,
}

export default function BlogPost(props) {
  const classes = useStyles(props)
  const { data, preview } = props
  return (
    <Card className={classes.card} variant="outlined" component="article">
      {preview && (
        <CardActionArea href={data.stackbit_url_path.stackbit_url_path}>
          <BlogHeader data={data} classes={classes} preview={preview} />
        </CardActionArea>
      )}
      {!preview && (
        <BlogHeader data={data} classes={classes} preview={preview} />
      )}
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {data.excerpt ? data.excerpt.excerpt : ""}
        </Typography>
      </CardContent>
      {preview && (
        <CardActions disableSpacing>
          <Button
            href={data.stackbit_url_path.stackbit_url_path}
            color="primary"
            className={classes.button}
            endIcon={<ArrowRightAlt color="secondary" />}
          >
            Keep reading
          </Button>
        </CardActions>
      )}
      {!preview && (
        <CardContent>
          <MDXRenderer>{data.content.childMdx.body}</MDXRenderer>
        </CardContent>
      )}
    </Card>
  )
}

BlogPost.defaultProps = {
  preview: false,
}

BlogPost.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  preview: PropTypes.bool,
}
