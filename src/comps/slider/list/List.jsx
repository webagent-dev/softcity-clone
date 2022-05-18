import React, { useEffect, useState, useCallback } from 'react'
import { ListContainer,Image, Num, ListContent, Header, Text  } from './list.styled'
function List({item,i}) {
  const [index, setIndex] = useState(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSlider = (direction) => {
      if(direction === 'left'){
        setIndex(index > 0 ? index - 1 : 3  - 1)
      }else{
        setIndex(index < 3 -1 ? index + 1 : 0)
      }
  }

  useEffect(() => {
    const getSlider = setInterval(() => {
      handleSlider('right')
      return () => clearInterval(getSlider)
    },5000)
  },[ handleSlider])
  return (
    <ListContainer index={index}>
        <Image  src={item.image} alt={item.title}/>
        <Num>{item.id}</Num>
        <ListContent>
            <Header>{item.title}</Header>
            <Text>{item.text}</Text>
        </ListContent>
        </ListContainer>
  )
}

export default List