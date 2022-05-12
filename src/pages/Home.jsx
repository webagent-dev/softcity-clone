import React from 'react'
import styled from 'styled-components'
import  { Cta,Feature, Navbar, Offer, Other, Slider, Video, Footer } from '../one'
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`

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