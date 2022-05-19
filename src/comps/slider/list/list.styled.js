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

    @media (max-width:972px){
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
    @media(max-width: 500px){
      width: 100%;
    }
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

     @media (max-width:972px){
        margin-left: 1rem;
        text-align: center;
    }
    @media(max-width: 500px){
                margin-left:  0rem;
    }
 `
  export const  Header = styled.h1`
    color: red;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 500;

        @media(max-width: 500px){
                font-size: 15px;
    }
  `
   export const  Text = styled.p`
    font-size: 15px;
    font-weight: 200;
    line-height: 20px;
    color: gray;
    padding: 10px 0px;
        @media(max-width: 500px){
              font-size: 12px;
    }
   `