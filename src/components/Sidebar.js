import React from "react"
import PropTypes from "prop-types"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Link from "@material-ui/core/Link"

import Background from "../../static/me.jpg"

import WhiteTypography from "./WhiteTypography"

import Social from "./Social"

const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
    width: props => props.drawerWidth,
  },

  drawerPaper: {
    [theme.breakpoints.up("md")]: {
      width: props => props.drawerWidth,
    },
    backgroundImage: `url(${Background})`,
    backgroundPosition: "-180px center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  container: {
    marginTop: "auto",
    marginBottom: theme.spacing(8),
    display: "flex",
    flex: 1,
    width: "100%",
  },
  item: {
    width: "100%",
    margin: theme.spacing(1),
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
    height: "5px",
  },
}))

function Sidebar(props) {
  const { mobileOpen, handleDrawerToggle } = props
  const classes = useStyles(props)
  const theme = useTheme()

  const drawer = (
    <Grid
      container
      alignItems="flex-start"
      className={classes.container}
      direction="column"
      justify="flex-end"
      spacing={10}
    >
      <Grid item className={classes.item}>
        <Link underline="none" href="/">
          <WhiteTypography variant="h4">Zoltan Simon</WhiteTypography>
          <WhiteTypography variant="h6">Things</WhiteTypography>
        </Link>
      </Grid>
      <Grid item className={classes.item}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item className={classes.item}>
        <Social />
      </Grid>
    </Grid>
  )

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
}

export default Sidebar
