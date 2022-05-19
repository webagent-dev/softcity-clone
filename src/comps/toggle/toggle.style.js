import styled from 'styled-components'

export const ToggleWrapper = styled.div`
display: flex;
gap: 2rem;
flex-direction:  column;
`
export const ListWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:after{
        content: "";
        width: 100%;
        height: .5px;
        background: gray;
        position: absolute;
        bottom: -20px;
        left: 0;
    }
`
export const List = styled.h2`
    text-transform: uppercase;
    padding: 5px;
    font-weight: 700;
    font-size: 18px;
    font-family: monospace;
`

export const Lists = styled.h2`
    text-transform: capitalize;
    padding: 5px;
    font-weight: 500;
    font-size: 15px;
    font-family: monospace;
`
export const ListBtn = styled.button`
padding: 0px 5px;
background: transparent;
border: none;
color: lightgray;
border: 1px solid lightgray;
font-size: 15px;
font-weight: 700;
font-family: cursive;
`