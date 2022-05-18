import React from 'react'
import { OfferContainer, Wrapper, LineContainer, Line, Header, Headers, UnderLine, UnderLineContainer, GridContainer, MainContainer,Content, TextContent, Mark, Small,Text,OtherContainer } from './offer.style'
import { DiAndroid, DiApple  } from 'react-icons/di'
import { BsUnlock,BsSunglasses } from 'react-icons/bs'
import {  RiWindowLine, RiThumbUpLine,RiPieChart2Line  } from 'react-icons/ri'
import { GiCctvCamera, GiCelebrationFire } from 'react-icons/gi'

function Offer() {
  return (
    <OfferContainer>
      <Wrapper>
      <LineContainer>
        <Line />
        <Line />
        <Line />
      </LineContainer>
      <Small>do more with Softcity</Small>
       <Header>what we offer </Header>
      <UnderLineContainer>
        <OtherContainer>
       <UnderLine />
              <UnderLine />
        </OtherContainer>
        <OtherContainer>
       <UnderLine />
              <UnderLine />
        </OtherContainer>
        <OtherContainer>
       <UnderLine />
              <UnderLine />
        </OtherContainer>
      </UnderLineContainer>
      <GridContainer>
        <MainContainer>
<DiAndroid    color='red' size='60px' />
          <Content>
            <TextContent>
              <Headers>Android Development</Headers>
              <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, neque rem vitae commodi ipsum beatae.</Text>
          </TextContent>
            <Mark />
          </Content>
        </MainContainer>
        <MainContainer>
<DiApple   color='red' size='60px' />
          <Content>
            <TextContent>
              <Headers>IOS Development</Headers>
              <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, neque rem vitae commodi ipsum beatae.</Text>
          </TextContent>
            <Mark />
          </Content>
        </MainContainer>
        <MainContainer>
<  RiWindowLine  color='red' size='60px' />
          <Content>
            <TextContent>
              <Headers>Custom Development</Headers>
              <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, neque rem vitae commodi ipsum beatae.</Text>
          </TextContent>

          </Content>
        </MainContainer>
        <MainContainer>
< GiCctvCamera  color='red' size='60px' />
          <Content>
            <TextContent>
              <Headers>camera surveillance</Headers>
              <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, neque rem vitae commodi ipsum beatae.</Text>
          </TextContent>
            <Mark />
          </Content>
        </MainContainer>
        <MainContainer>
< BsUnlock  color='red' size='60px' />
          <Content>
            <TextContent>
              <Headers>access control</Headers>
              <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, neque rem vitae commodi ipsum beatae.</Text>
          </TextContent>
            <Mark />
          </Content>
        </MainContainer>
        <MainContainer>
<GiCelebrationFire  color='red' size='60px'/>
          <Content>
            <TextContent>
              <Headers>fire systems</Headers>
              <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, neque rem vitae commodi ipsum beatae.</Text>
          </TextContent>
          </Content>
        </MainContainer>
        <MainContainer>
<RiThumbUpLine  color='red' size='60px' />
          <Content>
            <TextContent>
              <Headers>digitized safety</Headers>
              <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, neque rem vitae commodi ipsum beatae.</Text>
          </TextContent>
            <Mark />
          </Content>
        </MainContainer>
        <MainContainer>
<BsSunglasses   color='red' size='60px' />
          <Content>
            <TextContent>
              <Headers>smart automations</Headers>
              <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, neque rem vitae commodi ipsum beatae.</Text>
          </TextContent>
            <Mark />
          </Content>
        </MainContainer>
        <MainContainer>
<RiPieChart2Line color='red' size='60px'  />
          <Content>
            <TextContent>
              <Headers>Gamified intelligence</Headers>
              <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, neque rem vitae commodi ipsum beatae.</Text>
          </TextContent>
          </Content>
        </MainContainer>
      </GridContainer>
      </Wrapper>
      </OfferContainer>
  )
}

export default Offer