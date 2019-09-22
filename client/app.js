import React from 'react'
import history from './history'

import {Navbar, TopBar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar currPage={history.location.pathname} />
      <Routes />
    </div>
  )
}

export default App
