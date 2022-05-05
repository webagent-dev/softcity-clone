import React from 'react'
import { SliderContainer, Wrapper, Header, Small, Underline, MainSlid, UnderLineContainer } from './slider.style'
import List from './list/List'
const item = [1,2,3,4,5,6,7,]
function Slider() {
  return (
    <SliderContainer>
        <Wrapper>
          <Header>tech solutions for your business</Header>
          <Small>satisfy your business needs</Small>
            <UnderLineContainer>
              <Underline />
              <Underline />
              <Underline />
            </UnderLineContainer>
          <MainSlid>
            {
              item.map((items) => ( <List key={items} />))
            }
          </MainSlid>
        </Wrapper>
        </SliderContainer>
  )
}

export default Slider