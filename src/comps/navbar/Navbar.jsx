import React, { useState } from 'react'
import { NavbarContainer,Nav,Wrapper, Logo, NavWrapper, Label, Options, OptionWrapper } from './navbar.style'
import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import { useQuery } from 'react-query'
import './navbar.css'


function Navbar() {
  const [scroll, setScroll] = useState(false)
  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true)
    return () => window.onscroll = null
  }
const { data } = useQuery('get-nav', () => {
  return axios.get('http://localhost:8080/navbar')
})

  return (
    <NavbarContainer className={ scroll ? "color " : null}>
      <Wrapper>
      <Logo src='/nlogosft-1.png' alt='logo_url' />
      <NavWrapper>
       {
         data?.data.map((items) => (
             <React.Fragment key={items.id}>
              {
                items.option 
                ?
                 <ReactTooltip
                 data-tip='hello-world'
                 >
                   <Nav>{items.name}</Nav>
                   </ReactTooltip>
                : <Nav>{items.name}</Nav>
              }
           </React.Fragment>
         ))
       }
      </NavWrapper>
      <Label>we sell trust in the service of humanity</Label>
      </Wrapper>
    </NavbarContainer>
  )
}

export default Navbar