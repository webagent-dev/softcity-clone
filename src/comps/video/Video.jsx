import React, { useState, useEffect  } from 'react'
import { VideoContainer, Container,Img, Vidoe, OverLay } from './video.style'
function Video() {
  const [ show, setShow] = useState(true)

  const switchView = () => {
    const playVideo = setTimeout(() => {
        setShow(false)

        return  () => clearTimeout(playVideo)
    }, 2000)
  }
  useEffect(() => {
    switchView()
  },[])
  return (
    <VideoContainer>
       <Container>
         {
           show ?
             <Img  src='/img/bg.jpg' alt='main-photo' />
           : 
           <Vidoe     autoPlay={true}  loop muted>
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