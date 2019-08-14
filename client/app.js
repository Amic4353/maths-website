import React from 'react'

import {Navbar, TopBar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
