/* eslint-disable react/prop-types */
import React, { memo } from "react"
import Checkbox from "@material-ui/core/Checkbox"
import Divider from "@material-ui/core/Divider"
import Paper from "@material-ui/core/Paper"
import MuiTable from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import { grey } from "@material-ui/core/colors"
import { styled } from "@material-ui/core/styles"
import CodeBlock from "./CodeBlock"

const MDXcomponents = {
  p: (() => {
    const P = props => <Typography paragraph {...props} />
    return memo(P)
  })(),
  h1: (() => {
    const H1 = props => <Typography {...props} component="h1" variant="h1" />
    return memo(H1)
  })(),
  h2: (() => {
    const H2 = props => <Typography {...props} component="h2" variant="h2" />
    return memo(H2)
  })(),
  h3: (() => {
    const H3 = props => <Typography {...props} component="h3" variant="h3" />
    return memo(H3)
  })(),
  h4: (() => {
    const H4 = props => <Typography {...props} component="h4" variant="h4" />
    return memo(H4)
  })(),
  h5: (() => {
    const H5 = props => <Typography {...props} component="h5" variant="h5" />
    return memo(H5)
  })(),
  h6: (() => {
    const H6 = props => <Typography {...props} component="h6" variant="h6" />
    return memo(H6)
  })(),
  a: (() => {
    const StyledLink = styled(Link, { withTheme: true })(() => ({
      borderBottom: "2px solid #ff3366",
      paddingBottom: "1px",
    }))
    const LINK = React.forwardRef(function _StyledLink(
      { children, ...props },
      reference
    ) {
      return (
        <StyledLink underline="none" {...props} ref={reference}>
          {children}{" "}
        </StyledLink>
      )
    })
    return memo(LINK)
  })(),
  blockquote: (() => {
    const BlockQuotePaper = styled(Paper, { withTheme: true })(props => ({
      padding: props.theme.spacing(2),
      margin: props.theme.spacing(8),
      borderLeftColor: grey[300],
      borderLeft: "4px solid",
      fontStyle: "italic",
    }))
    const Blockquote = props => <BlockQuotePaper elevation={0} {...props} />
    return memo(Blockquote)
  })(),
  ul: (() => {
    const Ul = props => <Typography {...props} component="ul" />
    return memo(Ul)
  })(),
  ol: (() => {
    const Ol = props => <Typography {...props} component="ol" />
    return memo(Ol)
  })(),
  li: (() => {
    const Li = props => <Typography {...props} component="li" />
    return memo(Li)
  })(),
  table: (() => {
    const Table = props => <MuiTable {...props} />
    return memo(Table)
  })(),
  tr: (() => {
    const Tr = props => <TableRow {...props} />
    return memo(Tr)
  })(),
  td: (() => {
    const Td = ({ align, ...props }) => (
      <TableCell align={align || undefined} {...props} />
    )
    return memo(Td)
  })(),
  tbody: (() => {
    const TBody = props => <TableBody {...props} />
    return memo(TBody)
  })(),
  th: (() => {
    const Th = ({ align, ...props }) => (
      <TableCell align={align || undefined} {...props} />
    )
    return memo(Th)
  })(),
  thead: (() => {
    const THead = props => <TableHead {...props} />
    return memo(THead)
  })(),
  code: CodeBlock,
  hr: Divider,
  input: (() => {
    const Input = props => {
      const { type } = props
      if (type === "checkbox") {
        return <Checkbox {...props} disabled={false} readOnly />
      }
      return <input {...props} />
    }
    return memo(Input)
  })(),
  wrapper: (() => {
    const Wrapper = props => <div {...props} className="markdown-body" />
    return memo(Wrapper)
  })(),
  pre: (() => {
    const PRE = props => <div {...props} />
    return memo(PRE)
  })(),
}

export default MDXcomponents
