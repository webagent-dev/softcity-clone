import React from 'react'
import styled from 'styled-components'
import  { Cta,Feature, Navbar, Offer, Other, Slider, Video, Footer } from '../one'
const HomeContainer = styled.div``

function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <Video />
      <Feature />
      <Slider />
      <Offer />
      <Other />
      <Cta />
      <Footer />
    </HomeContainer>
  )
}

export default Home