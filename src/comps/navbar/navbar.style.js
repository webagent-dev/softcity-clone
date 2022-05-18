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
  @media (max-width: 980px) { 
     width: 100%;
      background: white;
      height: auto;
      padding: 10px;
      flex-direction: column;
  }

`
export const OptionWrapper = styled.ul`
  display: none;
 `
export const Nav = styled.li`
   cursor: pointer;
position: relative;
padding: 5px 0px;
   &:after{
         content: "";
         width: 0;
         height: 1px;
         background: black;
         position: absolute;
         bottom: 0;
         transition: 0.3s;
   }
  &:hover:after{
     width: 100%;
     left: 0;
  }
  &:hover${OptionWrapper}{
   display: block;
  }
`
export const Wrapper = styled.div`
   width: 80%;
   margin: 0  auto;
   display: flex;
   align-items: center;
   gap: 2rem;
     position: relative;

       @media (max-width: 500px) { 
          width: 100%;  
  }

`
 export const Logo = styled.img`
      height: 50px;
       @media(max-width: 500px){
        // width: 200px;
        height: 30px;
  }
 `
 export const Options = styled.li``

 export const  NavWrapper = styled.ul`
      display: flex;
      position: absolute;
      align-items: center;
      gap: 2rem;
      bottom: 5px;
      right: 0;
      text-transform: uppercase;
      font-weight: 700;
      font-family: monospace;
      font-size: 17px;

        @media (max-width: 980px) { 
         display: none;
  }
 `

 export const Label = styled.h3`
 width: fit-content;
    background: skyblue;
    padding: 5px 8px;
    font-family: monospace;
    text-transform: uppercase;
    color: white;
    text-align: center;
    position: absolute;
    right: 0;
    top: -10px;
    margin-bottom: 10px;
      @media (max-width: 980px) { 
   display: none;
  }
 `
 export const OtherLabel = styled.h3`
  width: fit-content;
      background: skyblue;
    padding: 5px 8px;
    font-size: 12px;
    font-family: monospace;
    text-transform: uppercase;
    color: white;

     @media (min-width: 980px) {
   display: none;
  }
 `

export const ChainWrapper = styled.div`
  width: 100%;
  @media (max-width: 980px) { 
    width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
  }
`
export const BarContainer = styled.div`
width: 40px;
height: 40px;
padding: 10px;
border: 3px solid black;
display: flex;
align-items: center;
justify-content: center;
display: none;
cursor: pointer;
  @media (max-width: 980px) { 
      display: block;
  }
`
export const ToggleContainer = styled.div`
  width: 100%;
  background: black;
  padding: 20px;
   @media (min-width: 980px) {
   display: none;
  }
`
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: lightgray;
  @media (min-width: 980px) {
   display: none;
  }
`
export const MainContainerContained = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`