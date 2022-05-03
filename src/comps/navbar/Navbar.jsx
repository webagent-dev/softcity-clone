import React from 'react'
import { NavbarContainer,Nav,Wrapper, Logo, NavWrapper, Label, Options, OptionWrapper } from './navbar.style'
import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import './navbar.css'
import useGetQueryData from '../../useQueryData'

function Navbar() {
  const getNavData =  () => {
    return axios.get('http://localhost:8080/navbar')
  }
const { data } = useGetQueryData('get-nav', getNavData)

  return (
    <NavbarContainer>
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
                 data-tip={'hello-world'}
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