import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const WhiteTypography = withStyles(theme => ({
  root: {
    color: "white",
  },
}))(Typography)

export default WhiteTypography
