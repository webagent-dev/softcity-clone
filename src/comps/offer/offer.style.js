import styled from 'styled-components'

export const OfferContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 30px;
    padding: 20px;
     @media(max-width: 500px){
        margin-top: 10px;
    }
`

export const Wrapper  =styled.div`
    width: 80%;
    margin: 0 auto;

    @media(max-width: 500px){
      width: 100%;
    }
`
export const  LineContainer =styled.div`
width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;
    margin: 10px 0px;
`
  export const Line =styled.div`
    width: 15px;
    height: 2px;
    background: black;
  `
  export const  Header =styled.h1`
    font-family: monospace;
    color: red;
    text-align: center;
    text-transform: capitalize;
    padding: 10px 0px;
  `
  export const Headers = styled.h1`
       font-family: monospace;
    color: red;
    text-transform: capitalize;
    padding: 10px 0px;
    font-size: 18px;
  `
  export const   UnderLine =styled.div`
    width: 10px;
    height: 1px;
    background: black;

  `
    export const  UnderLineContainer =styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .1rem;
        margin: 10px 0px;
    `
    export const OtherContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: .1rem;
    `
     export const  GridContainer =styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2.5rem;
        margin-top: 30px;
         @media(max-width: 500px){
            gap: 1rem;
            margin-top: 10px;
    }
     `
       export const MainContainer =styled.div`
        display: flex;
        gap: 2rem;
  @media (max-width: 755px) { 
     flex-direction: column;
     gap: 1rem;
  }
       `
      export const  Content =styled.div`
        display: flex;
        align-items: center;
      `
        export const TextContent =styled.div``
        export const  Mark =styled.div`
            width: 8px;
            height: 80%;
            background: lightgray;

            @media (max-width: 830px) { 
              display: none;
      }
        `
        export const Small = styled.h3`
            text-align: center;
            text-transform: capitalize;
            font-weight: 500;
            font-family: monospace;
            padding: 10px 0px;
        `
        export const Text = styled.div`
            color: gray;
            font-family: monospace;
            line-height: 20px;
            font-size: 15px;
            // justify-self: flex-end;
            margin-left: 25px;

                @media (max-width: 755px) { 
                  margin-left: 0px;
  }
        `