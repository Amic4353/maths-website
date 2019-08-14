import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div id="footer">
      <div id="ftcontainer">
        <div id="ft-contact">
          <p>CONTACT</p>
          <p>George Humphrey</p>
          <a href="mailto:georgeedwardhumphrey@gmail.com">
            E-mail: georgeedwardhumphrey@gmail.com
          </a>
          <Link to="">Tel: 087 978 7380</Link>
        </div>
        <div id="quick-lnks">
          <Link to="">FAQ</Link>
          <Link to="">Course Schedule</Link>
          <Link to="">About</Link>
          <Link to="">Testimonials</Link>
        </div>
      </div>
    </div>
  )
}
