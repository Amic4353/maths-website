import React from 'react'
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

export default function Highlight() {
  return (
    <div className="highlight">
      <div className="highlight-text">
        <h2>Free Preparation Course</h2>
      </div>
      <img id="hi-img" src="https://i.imgur.com/nOgXQ7F.jpg" />
      <div className="highlight-box" />
      <div id="hi-content">
        <p>
          I'm organizing a free prep class for 6th year higher level. The class
          will cover algebra, logs and trigonomentry.
        </p>
        <ColorButton variant="contained" color="#009388" href="/free">
          Get Started
        </ColorButton>
      </div>
    </div>
  )
}
