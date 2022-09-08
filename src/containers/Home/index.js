import React from 'react'
import Navbar from '../../components/navigation/navbar'
import Hero from '../../components/index/hero'
import Solutions from '../../pages/solutions'
import Methodology from '../../components/methodology/methodology'
import GetContact from '../../pages/contact'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Solutions />
      <Methodology />
      <GetContact />
    </div>
  )
}

export default Home