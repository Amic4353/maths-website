import React from 'react'
import {Link} from 'react-router-dom'

export default function TopBar() {
  return (
    <div id="topbar">
      <p>
        Now taking booking for project maths - Junior and Leaving Certificate.{' '}
        <Link to=""> Sign Up Now</Link>
      </p>
    </div>
  )
}
