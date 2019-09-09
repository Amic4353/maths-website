import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import {NavLink} from 'react-router-dom'
import history from '../history'

export default function NavBar() {
  return (
    <div>
      <AppBar id="navBar" position="static">
        <NavLink to="">
          <i className="material-icons">school</i>
        </NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About & Publications</NavLink>
        <NavLink to="">Course Schedule</NavLink>
      </AppBar>
    </div>
  )
}
