import { withStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"

export const styles = theme => ({
  root: {
    minHeight: 64,
    [theme.breakpoints.up("md")]: {
      minHeight: 70,
    },
  },
})

export default withStyles(styles)(Toolbar)
