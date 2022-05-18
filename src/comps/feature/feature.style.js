import styled from 'styled-components'

export const FeatureContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 20px 0px;
    margin-top: 30px;
`
export const Wrapper = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
align-items: center;
gap: 3rem;

 @media (max-width: 980px) { 
    width: 100%;
     flex-direction: column;
     gap: 1.5rem;
  }
`
export const  First = styled.div`
    flex: 1;
       font-family: monospace;
         font-weight: 700;
         @media(max-width: 500px){
            text-aligns: center;
         }
`
 export const  Second = styled.div`
 flex: 1;
 display: flex;
align-items: center;
gap: 3rem;
         @media(max-width: 500px){
            gap: 1rem;
         }
 `
 export const  InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
      @media(max-width: 500){
         gap: .5rem;
  }
 `
  export const  Underline  = styled.div`
    width: 2px;
    height: auto;
    max-height: auto;
    background: lightgray;
  `
 export const  Header = styled.h1`
    color: red;
    font-size: 28px;
    padding: 10px 5px;
             @media(max-width: 500px){
                  font-size: 25px;
                  text-align: center;
         }
 `
 export const   Text = styled.p`
    font-size: 15px;
    padding: 0px 10px;
         @media(max-width: 500px){
            text-aligns: center;
            font-size: 12px;
         }
 `
export const    Num = styled.h1`
        color: skyblue;
        font-family: monospace;
         @media(max-width: 500px){
            // text-aligns: center;
            font-size: 20px;
         }
`
export const SecondWrapper = styled.div`
flex: 1;
display: flex;
gap: 1.8rem;
          @media(max-width: 500px){
               gap: .5rem;
         }
`
 export const   Small = styled.div`
    text-transform: capitalize;
    font-family: monospace;
    font-weight: 500;
    font-size: 15px;
           @media(max-width: 500px){
            text-aligns: center;
            font-size: 10px;
         }
 `
  export const   Icon = styled.div``