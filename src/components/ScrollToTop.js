import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import NavigationIcon from "@material-ui/icons/Navigation"

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const ScrollToTop = ({ showBelow }) => {
  const classes = useStyles()

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else if (show) setShow(false)
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: `smooth` })
  }
  /*
const handleClick = () => {
        window[`scrollTo`]({ top: document.body.scrollHeight, behavior: `smooth` })
    }
*/
  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <>
      {show && (
        <Fab
          color="primary"
          aria-label="to top"
          onClick={handleClick}
          className={classes.fab}
        >
          <NavigationIcon />
        </Fab>
      )}
    </>
  )
}
export default ScrollToTop

ScrollToTop.defaultProps = {
  showBelow: 250,
}
ScrollToTop.propTypes = {
  showBelow: PropTypes.number,
}
