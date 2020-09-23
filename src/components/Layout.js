import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import withRoot from "../withRoot"
import SEO from "./Seo"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { styles as toolbarStyles } from "./Toolbar"

const useStyles = makeStyles(theme => ({
  toolbar: {
    [theme.breakpoints.down("xs")]: {
      ...toolbarStyles(theme).root,
    },
  },
}))
const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const classes = useStyles()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawerWidth = 300

  const childrenWithProps = React.Children.map(children, child => {
    return React.cloneElement(child, {
      drawerWidth,
    })
  })
  return (
    <>
      <SEO title="Home" />
      <Header
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Sidebar
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
      />
      <div className={classes.toolbar} />
      {childrenWithProps}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default withRoot(Layout)
