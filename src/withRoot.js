import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { MDXProvider } from "@mdx-js/react"
import theme from "./theme"
import MDXComponents from "./components/MDXComponents"

export default function withRoot(Component) {
  function WithRoot(props) {
    return (
      <ThemeProvider theme={theme}>
        <MDXProvider components={MDXComponents}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...props} />
        </MDXProvider>
      </ThemeProvider>
    )
  }

  return WithRoot
}
