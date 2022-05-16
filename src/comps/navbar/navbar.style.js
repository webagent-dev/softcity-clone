import styled from 'styled-components'
export const NavbarContainer = styled.div`
   width: 100%;
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: center;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 999;
`
export const Nav = styled.p`
   cursor: pointer;
position: relative;
padding: 5px 0px;
   &:after{
         content: "";
         width: 0;
         height: 3px;
         background: black;
         position: absolute;
         bottom: 0;
         transition: 0.3s;
   }
  &:hover:after{
     width: 100%;
     left: 0;
  }
`
export const Wrapper = styled.div`
   width: 80%;
   margin: 0  auto;
   display: flex;
   align-items: center;
   gap: 2rem;
     position: relative;
`
 export const Logo = styled.img`
      height: 50px;
 `
 export const Options = styled.h3``
export const OptionWrapper = styled.div`
 width: 600px;
height: 500px;
background: red;
  position: absolute;
//   top: -500px;
  bottom: -300px

 `
 export const  NavWrapper = styled.div`
      display: flex;
      position: absolute;
      align-items: center;
      gap: 2rem;
      bottom: 0;
      right: 10%;
      text-transform: uppercase;
      font-weight: 700;
      font-family: monospace;
      font-size: 17px;
 `

 export const Label = styled.h3`
 width: auto;
    background: skyblue;
    padding: 5px 8px;
    font-family: monospace;
    text-transform: uppercase;
    color: white;
    text-align: center;
    position: absolute;
    right: 0;
    top: 0;
    margin-bottom: 10px;
 `