import React from 'react'
import { ListContainer,Image, Num, ListContent, Header, Text  } from './list.styled'
function List() {
  return (
    <ListContainer>
        <Image />
        <Num>05</Num>
        <ListContent>
            <Header>automated fire systems</Header>
            <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quasi assumenda eveniet commodi, quos cumque.</Text>
        </ListContent>
        </ListContainer>
  )
}

export default List