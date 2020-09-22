import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { styles as toolbarStyles } from "./Toolbar"

const useStyles = makeStyles(theme => ({
  root: props => ({
    width: "100%",
    marginLeft: "0px",
    padding: theme.spacing(3),
    display: "flex",
    overflow: "hidden",
    flexGrow: 1,

    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${props.drawerWidth}px) *0.7`,
      marginLeft: props.drawerWidth * 0.7,
    },
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${props.drawerWidth}px)`,
      marginLeft: props.drawerWidth,
    },
  }),
  toolbar: {
    [theme.breakpoints.down("xs")]: {
      ...toolbarStyles(theme).root,
    },
  },
}))

export default function Blog(props) {
  const classes = useStyles(props)
  return (
    <main className={classes.root}>
      <Grid container direction="row" spacing={5}>
        <div className={classes.toolbar} />
        <Grid item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          mattis turpis massa, in venenatis arcu rutrum quis. Quisque at
          consequat dolor, sed blandit ipsum. Fusce ultrices, ipsum vehicula
          tempus gravida, dui dui imperdiet arcu, sed posuere lectus elit sit
          amet odio. Curabitur mollis ultricies interdum. Duis volutpat risus
          sit amet dui ornare, sed tincidunt arcu dapibus. Integer rhoncus
          sagittis mattis. Praesent mauris velit, porta quis velit euismod,
          hendrerit vehicula ex. Curabitur sem ante, maximus at odio quis,
          dapibus sodales dolor. Aenean quis orci cursus, hendrerit est sed,
          interdum lacus. Integer justo sem, vulputate non dui pretium,
          dignissim commodo nisl. Ut eleifend lorem a posuere sollicitudin.
          Pellentesque urna est, sagittis euismod feugiat nec, laoreet id augue.
          Phasellus id turpis tempor, ullamcorper odio eu, finibus justo.
          Integer lobortis purus sit amet pellentesque interdum. Donec mauris
          diam, malesuada nec mauris ut, mattis sodales nunc. Maecenas sed ante
          nisi. Aliquam massa neque, vulputate nec sagittis id, auctor eget
          arcu. Duis ante nibh, ultrices sed condimentum ac, ornare at diam.
          Aenean eget pretium quam, viverra mattis risus. Suspendisse nec dolor
          odio. Nam cursus mollis est id placerat. Proin quis turpis at erat
          convallis tincidunt vitae et lorem. Pellentesque sapien risus,
          vulputate et maximus sed, sagittis sit amet nunc. Sed semper lacinia
          ligula et volutpat. Etiam ut malesuada neque. Pellentesque viverra
          augue vitae risus elementum laoreet vitae a dolor. In erat ipsum,
          gravida at metus sit amet, varius iaculis dui. Maecenas consectetur
          sed mauris a facilisis.
        </Grid>
      </Grid>
    </main>
  )
}
