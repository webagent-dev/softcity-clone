import React from 'react'
import { FooterContainer, Wrapper, First, Img, TextContainer, Text, Small, Other,Span, Second, Foot, Social, Underline,Box } from './footer.style'
import { GrFacebookOption,GrTwitter, GrLinkedinOption } from 'react-icons/gr'
function Footer() {
  return (
    <FooterContainer>
        <Wrapper>
          <First>
      <Img src='/nlogosft-1.png' alt='logo'/>
      <TextContainer>
        <Span>
            <Text>Privacy Policy</Text>
            <Underline />
            <Small>Terms and Conditions</Small>
            <Underline />
            </Span>
            <Other>NB: if your service request is illegal, please do not contact us.
            </Other>
      </TextContainer>
          </First>
          <Second>
    <Foot> {new Date().getFullYear()} softcity group</Foot><Social>
  <GrFacebookOption />
  <GrTwitter />
  <GrLinkedinOption />
</Social>
          </Second>
        </Wrapper>
        <Box>Privacy & Cookies Policy</Box>
      </FooterContainer>
  )
}

export default Footer