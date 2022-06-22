import React, { useState, useEffect  } from 'react'
import { VideoContainer, Container,Img, Vidoe, OverLay } from './video.style'
function Video() {
  const [show, setShow] = useState(true)
  
  useEffect(() => {
          const switchView = () => {
      setTimeout(() => {
        setShow(false)
      }, 2000)
    }
    switchView()
  },[setShow])
  
  return (
    <VideoContainer>
      <Container>
        {
          show ?
            <Img src='/img/bg.jpg' alt='main-photo' />
            :
            <Vidoe autoPlay={true} loop muted>
              <source
                src='/img/home.mp4'
                type='video/mp4'
              />
            </Vidoe>
        }
      </Container>

    </VideoContainer>
  )
}

export default Video