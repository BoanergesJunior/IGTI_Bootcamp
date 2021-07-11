import IconButton from "@material-ui/core/IconButton"
import Avatar from "@material-ui/core/Avatar"
import Icon from "@material-ui/core/Icon"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

import React, { useState } from "react"
import { makeStyles } from "@material-ui/core"
import { useAuthContext } from "./authcontext"
import { onSigOutEndpoint } from "../services/users/apiUsers"

const useStyles = makeStyles({
  userDetails: {
    borderBottom: "1px solid rgb(224, 224, 224)",
    padding: "8px",
    display: "flex",
    margin: "16px 0",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      marginBottom: "8px",
    },
  },
})
export default function UserMenu() {
  const classes = useStyles()

  const { user, onSignOut } = useAuthContext()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  function signOut() {
    onSignOut()
    onSigOutEndpoint()
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ fontWeight: "bold", fontSize: "36px", padding: "8px" }}>
        Despesas
      </span>

      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar>
          <Icon>E</Icon>
        </Avatar>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className={classes.userDetails}>
          <Avatar>
            <Icon>E</Icon>
          </Avatar>
          <div>{user.name}</div>
          <small>{user.email}</small>
        </div>
        <MenuItem onClick={signOut}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
