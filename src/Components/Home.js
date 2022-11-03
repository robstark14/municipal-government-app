import React from 'react'
import AboutCounter from './AboutCounter'
import AboutMayor from './AboutMayor'
import Header from './Header'
import Memos from './Memos'
import Navbar from './Navbar/Navbar'
import News from './News/News'

import Projects from './Projects'

function Home() {
  return (
    <div>
      <Navbar />
      <Header id="home" />
      <AboutMayor />
      <AboutCounter />
      <News id="news" />
      {/* <Projects /> */}
      <Memos />
    </div>
  )
}

export default Home