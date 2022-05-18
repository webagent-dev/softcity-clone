import React, { useState } from 'react'
import { NavbarContainer,Nav,Wrapper, Logo, NavWrapper, Label, Options, OptionWrapper, ChainWrapper, BarContainer, ToggleContainer,OtherLabel, Line, MainContainerContained } from './navbar.style'
import Toggle from '../toggle/Toggle'
import { FiSearch } from 'react-icons/fi'
import { FaList } from 'react-icons/fa'
import axios from 'axios'
import { useQuery } from 'react-query'
import './navbar.css'


function Navbar({toggle, getToggle}) {
  const [scroll, setScroll] = useState(false)
  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true)
    return () => window.onscroll = null
  }
const { data } = useQuery('get-nav', () => {
  // return axios.get('http://localhost:8080/navbar')
})

  return (
    <NavbarContainer className={ scroll ? "color " : null}>
      <Wrapper>
        <MainContainerContained>
        <ChainWrapper>
        <Logo src='/nlogosft-1.png' alt='logo_url' />
            <BarContainer onClick={() => getToggle(!toggle)}>
              <FaList  size='15px'/>
            </BarContainer>
        </ChainWrapper>
        <Line />
          <OtherLabel>we sell trust in the service of humanity</OtherLabel>
          </MainContainerContained>
      <NavWrapper>
          <Nav>Home</Nav>
          <Nav>About
            <OptionWrapper>
              <Options>Our company</Options>
              <Options>Our company</Options>
              <Options>Our company</Options>
            </OptionWrapper>
          </Nav>
          <Nav>Services
            <OptionWrapper>
              <Options>Our company</Options>
              <Options>Our company</Options>
              <Options>Our company</Options>
                  <Options>Our company</Options>
              <Options>Our company</Options>
              <Options>Our company</Options>
                  <Options>Our company</Options>
              <Options>Our company</Options>
              <Options>Our company</Options>
              </OptionWrapper>
          </Nav>
          <Nav>Awards</Nav>
          <Nav>in the new</Nav>
          <Nav>Portfolio</Nav> 
          <Nav>Testimonials</Nav>
          <Nav>contact</Nav>
           <FiSearch  color='black' />
        </NavWrapper>
      <Label className={ scroll ? 'go' : null}>we sell trust in the service of humanity</Label>
      </Wrapper>
    </NavbarContainer>
  )
}

export default Navbar