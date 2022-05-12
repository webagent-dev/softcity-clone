import React from 'react'
import { OtherContainer, Wrapper, Header, Small, ContentWrapper, First, Text, Second, Graph, UnderLineContainer, UnderLine } from './other.style'
function Other() {
  return (
    <OtherContainer>
      <Wrapper>
        <Header>Optimize Coperation Process</Header>
        <Small>Artificial Intelligence And Automation</Small>
        <UnderLineContainer>
          <UnderLine />
          <UnderLine />
          <UnderLine />
        </UnderLineContainer>
        <ContentWrapper>
          <First>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatum inventore fugit deserunt veritatis ratione eos excepturi ab architecto necessitatibus qui, aperiam exercitationem repudiandae, totam accusamus at quas possimus magnam minus cupiditate. Iusto ipsam molestiae quod. Totam, tenetur optio ratione perferendis adipisci pariatur asperiores odit, porro fugiat corporis sint. Reprehenderit!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatum inventore fugit deserunt veritatis ratione eos excepturi ab architecto necessitatibus qui, aperiam exercitationem repudiandae, totam accusamus at quas possimus magnam minus cupiditate. Iusto ipsam molestiae quod. Totam, tenetur optio ratione perferendis adipisci pariatur asperiores odit, porro fugiat corporis sint. Reprehenderit!</Text>
          </First>
          <Second>
            <Graph></Graph>
          </Second>
        </ContentWrapper>
      </Wrapper>
      </OtherContainer>
  )
}

export default Other