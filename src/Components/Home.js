import React from 'react'
import AboutCounter from './AboutCounter'
import AboutMayor from './AboutMayor'
import Header from './Header'
import Memos from './Memos'
import Navbar from './Navbar/Navbar'
import News from './News'
import Projects from './Projects'

function Home() {
  return (
    <div>
      <Navbar />
      <Header id="home" />
      <AboutMayor />
      <News id="news" />
      <AboutCounter />
      {/* <Projects /> */}
      <Memos />
    </div>
  )
}

export default Home