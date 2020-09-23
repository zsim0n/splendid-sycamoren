import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import AppBar from "@material-ui/core/AppBar"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

import Toolbar from "./Toolbar"
import WhiteTypography from "./WhiteTypography"

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  root: {
    color: theme.palette.common.white,
  },
  toolbar: {
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },

  appbar: props => ({
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${props.drawerWidth}px) `,
      marginLeft: props.drawerWidth,
      display: "none",
    },
  }),

  title: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

export default function Header(props) {
  const classes = useStyles(props)
  const { handleDrawerToggle } = { ...props }
  return (
    <Container className="classes.root">
      <AppBar position="fixed" elevation={0} className={classes.appbar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <Link underline="none" href="/">
              <WhiteTypography
                variant="h6"
                display="inline"
                style={{ marginRight: "10px" }}
              >
                Zoltan Simon
              </WhiteTypography>
              <WhiteTypography
                variant="h6"
                display="inline"
                style={{ marginRight: "10px" }}
              >
                -
              </WhiteTypography>
              <Typography variant="h6" color="secondary" display="inline">
                Things
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  )
}
