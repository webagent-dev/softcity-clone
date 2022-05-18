import styled from 'styled-components'

export const FooterContainer = styled.div`
    width: 100%;
    height: 150px;
    background: black;
    padding: 30px;
    color: gray;
    position: relative;
`

 export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 980px) { 
     flex-direction: column;
     align-items: center;
     justify-content: center;
  }
 `
export const First = styled.div`
 
@media (max-width: 980px) { 
   display: flex;
   flex-direction: column;
      align-items: center;

  }
 `
 export const Img = styled.img`
    height: 25px;
 `
 export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    font-family: monospace;
    @media (max-width: 980px) { 
   //   flex-direction: row;
   align-items: center;
  }
 `
 export const Text = styled.div`
 &:after{
         content: "";
         width: 10px;
         height: 10px;
         background: red;
 }
 `
 export const Small = styled.div``
 export const Other = styled.div``
 export const Span = styled.div`
 display: flex;
 gap: .5rem;
 align-items: center;
 `
 export const Underline = styled.div`
    width: 1.5px;
    height: 12px;
    background: gray;

 `
 export const Second = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: .8rem;

    @media (max-width: 980px) { 
 
  }
 `
 export const  Foot = styled.div`
    font-family: monospace;
    text-transform: capitalize;

 `
  export const Social = styled.div`
    display: flex;
    gap: 1.5rem;
  `
  export const Box = styled.div`
        width: 170px;
        height: 30px;
        background: white;
        position: absolute;
        right: 100px;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: monospace;
        font-weight: 700;
        font-size: 12px;
  `