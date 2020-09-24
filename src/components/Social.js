import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Link from "@material-ui/core/Link"
import TwitterIcon from "@material-ui/icons/Twitter"
import GithubIcon from "@material-ui/icons/GitHub"
import LinkedinIcon from "@material-ui/icons/LinkedIn"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  socialLink: {
    color: theme.palette.common.white,
  },
}))
export default function Social(props) {
  const classes = useStyles(props)
  return (
    <Grid
      container
      spacing={1}
      className={classes.root}
      direction="row"
      justify="flex-start"
      alignItems="flex-end"
    >
      <Grid item>
        <Link
          onClick={event => event.stopPropagation()}
          className={classes.icon}
          color="inherit"
          href="https://github.com/zsim0n"
        >
          <GithubIcon />
        </Link>
      </Grid>
      <Grid item>
        <Link
          onClick={event => event.stopPropagation()}
          className={classes.icon}
          color="inherit"
          href="https://twitter.com/zsim0n"
        >
          <TwitterIcon />
        </Link>
      </Grid>
      <Grid item>
        <Link
          onClick={event => event.stopPropagation()}
          className={classes.icon}
          color="inherit"
          href="https://www.linkedin.com/in/zoltansimon27"
        >
          <LinkedinIcon />
        </Link>
      </Grid>
      <Grid item>
        <Typography className={classes.socialLink}>
          {"© "}
          <Link color="inherit" href="https://zoltansimon.me/">
            Zoltansimon.me
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  )
}
