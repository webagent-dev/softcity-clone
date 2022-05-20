import React from 'react'
import { SliderContainer, Wrapper, Header, Small, Underline, MainSlid, UnderLineContainer } from './slider.style'
import axios from 'axios'
import List from './list/List'
import { useQuery } from 'react-query'
import { slider } from './data'

const item = [1,2,3,4,5,6,7,]
function Slider() {
  const { data }  = useQuery('get_slider', () => {
    return axios.get('http://localhost:8080/Slider')
  })
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
              slider.map((items, i) => ( <List key={items.id}  item={items}  index={i} />))
            }
          </MainSlid>
        </Wrapper>
        </SliderContainer>
  )
}

export default Slider