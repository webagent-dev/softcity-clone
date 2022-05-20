import styled from 'styled-components'

export const OtherContainer = styled.div`
    width: 100%;
    height: 60vh;
    background: lightgray;
    padding: 20px;

     @media (max-width: 980px) { 
         height: auto;
  }
`

 export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    font-family: monospace;
    margin-top: 30px
     @media (max-width: 980px) { 
      width: 100%;
  }
 `
 export const Header = styled.h1`
    color: red;
    text-align: center;
    font-size: 30px;
    padding: 10px 0px;

             @media(max-width: 500px){
            font-size: 25px;
         }
 `
 export const Small = styled.h3`
    text-align: center;
        padding: 10px 0px;
                 @media(max-width: 500px){
            font-size: 12px;
         }
 `
  export const UnderLineContainer = styled.div`
        width: 100%;
        display: flex;
  `
   export const UnderLine = styled.div`
    width: 100%;
    height: 10%;
    background: red;
   `
 export const ContentWrapper = styled.div`
 width: 100%;
   display:  flex;
   gap: 1rem;
   align-items: center;
   @media (max-width: 980px) { 
     flex-direction: column;
  }
 `
  export const First = styled.div`
   flex: 1;
   display: flex: 
   align-items: center;
   gap: 1.5rem;

  `
  export const Text = styled.p`
   font-family: monospace;
   font-size: 14px;
   padding; 5px 0px;
   font-weight: 500;
   line-height: 20px;
   color: gray;
   margin-top: 1rem;
  `
  export const Second = styled.div`
   flex: 1;
   @media (max-width:500px){
      width: 100%;
   }
  `
  export const GraphMainWrapper = styled.div``