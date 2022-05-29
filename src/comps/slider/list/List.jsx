import React, { useEffect, useState} from 'react'
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

  // const prevSlider = () => {
  //     setIndex(state => state -= 1)
  // }
  useEffect(() => {
    const getSlider = setInterval(() => {
        handleSlider('right')
    },5000)
         return () => clearInterval(getSlider)
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