import React from 'react'
import { CtaContainer,Wrapper, Header, Text, UnderLineContainer,UnderLine, SliderContainer,Slid, SliderBtn,Btn } from './cta.style'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
const item = [1,2,3,4,5,6,7,8,9,10,11,12]
function Cta() {
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
        item.map((item) => ( <Slid key={item}> </Slid>))
      }
        </SliderContainer>
        <SliderBtn>
                    <Btn>
          <IoIosArrowBack />
        </Btn>
    <Btn>
          <IoIosArrowForward />
       </Btn>
        </SliderBtn>
        
  
  

      </Wrapper>
      </CtaContainer> 
  )
}

export default Cta