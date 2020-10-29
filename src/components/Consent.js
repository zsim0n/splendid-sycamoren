import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { useLocalStorage, useCookie } from "react-use"

import Snackbar from "@material-ui/core/Snackbar"
import SnackbarContent from "@material-ui/core/SnackbarContent"
import Button from "@material-ui/core/Button"

const ACCEPT_KEY = "zoltansimon-me-gotit"
const DENY_KEY = "zoltansimon-me-nothx"
const GA_COOKIE = "zoltansimon-me-ga"
const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 2,
  },
  anchorOriginBottomCenter: {
    bottom: 0,
  },
  button: {
    color: "#FFF",
    fontWeight: 100,
  },
}))

const Consent = ({ message, action, acceptBelow }) => {
  const [accept, setAccept] = useLocalStorage(ACCEPT_KEY, false)
  const [deny, setDeny] = useLocalStorage(DENY_KEY, false)
  // eslint-disable-next-line no-unused-vars
  const [cookie, updateCookie] = useCookie(GA_COOKIE)

  const classes = useStyles()
  const handleScroll = () => {
    if (window.pageYOffset > acceptBelow && !accept) {
      setAccept(true)
      setDeny(false)
      updateCookie(true)
    }
  }
  const handleAccept = () => {
    if (window) window.removeEventListener("scroll", handleScroll)
    setAccept(true)
    setDeny(false)
    updateCookie(true)
  }
  const handleDeny = () => {
    if (window) window.removeEventListener("scroll", handleScroll)
    setAccept(false)
    setDeny(true)
    updateCookie(false)
  }

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll)
    return () => window.removeEventListener(`scroll`, handleScroll)
  })

  const snackBarAction = action || (
    <>
      <Button
        key="no-thanks"
        className={classes.button}
        size="small"
        onClick={handleDeny}
      >
        No Thanks
      </Button>
      <Button
        key="got-it"
        color="secondary"
        size="small"
        onClick={handleAccept}
      >
        Got It!
      </Button>
    </>
  )
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={!accept && !deny}
      classes={{
        anchorOriginBottomCenter: classes.anchorOriginBottomCenter,
      }}
    >
      <SnackbarContent
        elevation={0}
        classes={{
          root: classes.root,
        }}
        message={message}
        action={snackBarAction}
      />
    </Snackbar>
  )
}

Consent.defaultProps = {
  acceptBelow: 250,

  action: undefined,
}
Consent.propTypes = {
  acceptBelow: PropTypes.number,
  message: PropTypes.node.isRequired,
  action: PropTypes.elementType,
}

export default Consent
