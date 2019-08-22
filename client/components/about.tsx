import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
  const images = []
  return (
    <div id="about-container">
      <h1>{`About & Publications`}</h1>
      <div id="about-content">
        <img src="" />
        <p>
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
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
      </div>
    </div>
  )
}
