import styled from 'styled-components'

export const SliderContainer = styled.div`
    width: 100%;
    height: 100%
    padding: 20px 0px;
    margin-top: 30px;
    overflow: hidden;
`

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    font-weight: 700;
    font-family: monospace;
`
export const Header = styled.h1`
    text-align: center;
    text-transform: capitalize;
    font-size: 35px;
    color: red;
`
export const Small = styled.p`
    text-align: center;
    font-size: 20px;
     text-transform: capitalize;
     font-weight: 500;
`
export const Underline = styled.div`
    width: 2px;
    background: black;
    height: 10px;
`
export const MainSlid = styled.div`
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    align-items: center;
    overflow: hidden;
`
export const UnderLineContainer = styled.div`
width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .1rem;
`