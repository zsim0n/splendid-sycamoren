import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const WhiteTypography = withStyles(theme => ({
  root: {
    color: theme.palette.common.white,
  },
}))(Typography)

export default WhiteTypography
