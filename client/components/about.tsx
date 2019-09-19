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
  const images = [
    'https://i.imgur.com/MLSvlVR.jpg',
    'https://i.imgur.com/G0POMkF.jpg',
    'https://i.imgur.com/Sq2PPwr.jpg',
    'https://i.imgur.com/nNexUFk.jpg',
    'https://i.imgur.com/eboDPRA.jpg',
    'https://i.imgur.com/hZwfPan.jpg',
    'https://i.imgur.com/3aKQgtG.jpg'
  ]
  return (
    <div id="about-container">
      <div id="about-column">
        <h1>{`About & Publications`}</h1>
        <div id="about-content">
          <img src="https://i.imgur.com/MbqW7Bb.jpg" />
          <p>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem Lorem ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem
            ipsumLorem Lorem ipsumLorem ipsumLorem ipsum
          </p>
        </div>
        <h2>Publications</h2>
        <div id="about-img-grid">
          {images.map((img, i) => (
            <div id={`aboutImg${i}`} key={i}>
              <img src={img} />
            </div>
          ))}
          <div id="about-buttons">
            <ColorButton
              className="colorBtn"
              variant="contained"
              href="/courses"
            >
              Check Out Courses
            </ColorButton>
            <ColorButton
              className="colorBtn"
              variant="contained"
              href="/testimonials"
            >
              Read Testimonials
            </ColorButton>
          </div>
        </div>
      </div>
    </div>
  )
}
