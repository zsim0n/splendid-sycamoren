import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Hidden from "@material-ui/core/Hidden"
import Social from "./Social"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    height: "140px",
  },
}))
const useOverrideStyles = makeStyles(theme => ({
  socialLink: {
    color: theme.palette.common.black,
  },
}))

export default function Footer() {
  const classes = useStyles()
  const overrideclasses = useOverrideStyles()
  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <Hidden smUp implementation="css">
          <Social classes={overrideclasses} />
        </Hidden>
      </Container>
    </footer>
  )
}
