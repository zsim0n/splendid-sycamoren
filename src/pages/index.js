import React from "react"
import withRoot from "../withRoot"
import SEO from "../components/Seo"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Blog from "../components/Blog"

const Index = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawerWidth = 400

  return (
    <>
      <SEO title="index" />
      <Header
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Sidebar
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
      />
      <Blog drawerWidth={drawerWidth} />
      <Footer />
    </>
  )
}

export default withRoot(Index)
