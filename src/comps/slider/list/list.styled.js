import styled from 'styled-components'

export const ListContainer = styled.div`
    min-width: 350px;
    height; auto;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2.5rem;
      // transform: translateX(-350px);
      transform: translateX(${props => props.index * -760}px);
      transition: all 1s ease-in-out; 
`

export const Image = styled.img`
    width: 100%;
    height: 250px;
    background: blue;
    object-fit: center;
`
 export const Num = styled.h1`
       color: red; 
       font-size: 60px;
       font-weight: 700;
       font-family: cursive;
       position: absolute;
       bottom: 120px;
       left: 0;
 `
 export const  ListContent = styled.div`
    align-self: flex-end;
    margin-left: 5rem;
 `
  export const  Header = styled.h1`
    color: red;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 500;
  `
   export const  Text = styled.p`
    font-size: 15px;
    font-weight: 200;
    line-height: 20px;
    color: gray;
    padding: 10px 0px;
   `