import React from 'react'
import { FeatureContainer, Wrapper, First, Second,Header, Text, Num, SecondWrapper,Small, Icon, InnerWrapper, Underline } from './feature.style'
import { FaRocket } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { RiWindowLine } from 'react-icons/ri'

function Feature() {
  return (
    <FeatureContainer>
      <Wrapper>
    <First>
      <Header>Welcome to Softcity</Header>
      <Text>Softcity is a global network of companies with a global scope of
        operation. We easily out with our team of IT professionals, system experts, and experienced consultants.
      </Text>
    </First>
    <Second>
      <SecondWrapper>
        <InnerWrapper>
    <RiWindowLine size='30px' />
    <Num>186</Num>
    <Small>Automation Projects</Small>
    </InnerWrapper>
    <Underline />
      </SecondWrapper>
      <SecondWrapper>
        <InnerWrapper>
       <FaRocket  size='30px' />
    <Num>392</Num>
    <Small>Apps Deployed</Small>
    </InnerWrapper>
    <Underline />
      </SecondWrapper>
      <SecondWrapper>
        <InnerWrapper>
  <IoIosPeople size='30px' />
    <Num>1345</Num>
    <Small>Satisfied Clients</Small>
    </InnerWrapper>
      </SecondWrapper>
      
    </Second>
      </Wrapper>
      </FeatureContainer>
  )
}

export default Feature