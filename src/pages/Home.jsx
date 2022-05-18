import React, { useState } from 'react'
import styled from 'styled-components'
import  { Cta,Feature, Navbar, Offer, Other, Slider, Video, Footer, Toggle } from '../one'
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`

function Home() {
  const [toggle, setToggle] = useState(false)
  return (
    <HomeContainer>
      <Navbar toggle={toggle} getToggle={setToggle} />
      {toggle && <Toggle />}
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