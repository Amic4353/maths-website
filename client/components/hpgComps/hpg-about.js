import React from 'react'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

const ColorButton = withStyles(theme => ({
  root: {
    fontFamily: `'Gentium Basic', serif`,
    color: '#f0f0f0',
    backgroundColor: '#009388',
    '&:hover': {
      backgroundColor: '#3c4043'
    }
  }
}))(Button)

export default function About() {
  return (
    <div className="highlight">
      <div className="highlight-text">
        <h2>About & Publications</h2>
      </div>
      <div className="highlight-box" />
      <div id="abt-content">
        <p>about section text font for about george math maths math maths.</p>
        <ColorButton href="/about" variant="contained" color="#009388">
          Learn More
        </ColorButton>
      </div>
      <img id="abt-img" src="https://i.imgur.com/LK4FEiC.jpg" />
    </div>
  )
}
