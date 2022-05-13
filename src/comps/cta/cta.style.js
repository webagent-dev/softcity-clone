import styled from 'styled-components'

export const CtaContainer = styled.div`
width: 100%;
height: auto;
padding: 20px;
`
export const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    margin-top: 20px;
`
export const Header = styled.div`
    text-align: center;
    text-transform: capitalize;
    color: red;
    font-weight: 700;
    font-size: 28px;
    font-family: monospace;
    padding: 10px 0px;

`
 export const Text = styled.div`
        text-align: center;
          padding: 8px 0px;
          font-weight: 500;
          font-family: monospace;
          font-size: 15px;
 `
export const  UnderLineContainer = styled.div`
width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .2rem;
    margin-top: 10px;
`
 export const UnderLine = styled.div`
    width: 2px;
    height: 8px;
    background: black;
 `
 export const SliderContainer = styled.div`
    width: 100%;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
    gap: 1rem;
    margin: 20px 0px;
// transform: translateX(500px);
 `
export const  Slid = styled.img`
    min-width: 165px;
    height: 70px;
    object-fit: center;

`
 export const SliderBtn = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;

 `
 export const Btn  = styled.button`
    width: 80px;
    height: 40px;
    border: 2px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .1s ease-in-out;

    &:disabled{
        // border-color: red;
        opacity: 0.5;
    }
 `

 export const Line = styled.div`
     width: 20px;
     height: 70px;
     border-left: 2px solid lightgray;
    
 `
 export const Item = styled.div`
 display: flex;
 gap: 1rem;
    transform: translateX(${props => props.index * -330}px);
    transition: all .2s linear;
 `