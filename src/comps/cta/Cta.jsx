import React, { useState } from 'react'
import { CtaContainer,Wrapper, Header, Text, UnderLineContainer,UnderLine, SliderContainer,Slid, SliderBtn,Btn, Line, Item } from './cta.style'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import{  cta } from './data'
function Cta() {
  const [index, setIndex] = useState(0)
  const [count, setCount ] = useState(0)
  const handleSlider = (direction) => {
    if (direction === 'left') {
      setIndex(index > 0 ? index - 1 : cta.length - 1)
      setCount(state => state - 1)
    } else {
      setIndex(index < cta.length - 1 ? index + 1 : 0)
      setCount(state => state + 1)
      }
  }
  return (
    <CtaContainer>
      <Wrapper>
        <Header>our clients trust us with their projects</Header>
        <Text> We measure our success from client satisfaction.</Text>
        <UnderLineContainer>
          <UnderLine />
          <UnderLine />
          <UnderLine />
        </UnderLineContainer>
        <SliderContainer>
      {
        cta.map((item) => ( 
          <Item key={item.id} index={index}>
            <Slid  src={item.img} alt={item.id} /> 
            <Line></Line>
        </Item >
        ))
      }
        </SliderContainer>
        <SliderBtn>
          <Btn disabled={ count === 0} onClick={() => handleSlider('left')}>
              <IoIosArrowBack />
            </Btn>
          
          <Btn disabled={count > 5}  onClick={() => handleSlider('right')}>
              <IoIosArrowForward />
            </Btn>
          
        </SliderBtn>
        
  
  

      </Wrapper>
      </CtaContainer> 
  )
}

export default Cta