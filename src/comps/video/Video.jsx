import React, { useState } from 'react'
import { VideoContainer, Container,Img, Vidoe, OverLay } from './video.style'
function Video() {
  const [ show, setShow] = useState(true)
  console.log(show)
  return (
    <VideoContainer>
              <OverLay>
       <Container>
         {
           show ?  <Img  src='/img/bg.jpg' alt='main-photo' />
           : <Vidoe />
         }
        </Container>
         </OverLay> 
    </VideoContainer>
  )
}

export default Video