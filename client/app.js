import React from 'react'
import history from './history'

import {Navbar, TopBar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar currPage={history.location.pathname} />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
