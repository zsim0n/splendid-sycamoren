import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import withRoot from "../withRoot"
import SEO from "./Seo"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const useStyles = makeStyles(theme => ({
  [theme.breakpoints.down("sm")]: {
    toolbar: theme.mixins.toolbar,
  },
}))
const Layout = ({ title, children }) => {
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
      <SEO title={title} />
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
Layout.defaultProps = {
  title: "Home",
}
Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}
export default withRoot(Layout)
