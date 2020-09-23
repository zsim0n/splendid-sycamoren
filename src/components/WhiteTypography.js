import { styled } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const StyledTypography = styled(Typography, { withTheme: true })(() => ({
  color: "white",
}))

export default StyledTypography
