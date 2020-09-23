import React from "react"
import Typography from "@material-ui/core/Typography"
import withRoot from "../withRoot"
import SEO from "../components/Seo"


const NotFound = () => (
  <>
    <SEO title="404: Not found" />
    <Typography variant="h1">NOT FOUND</Typography>
    <Typography variant="body1">
      You just hit a route that doesn&#39;t exist... the sadness.
    </Typography>
  </>
)

export default withRoot(NotFound)
