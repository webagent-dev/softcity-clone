import styled from 'styled-components'

export const VideoContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;

    &:after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255,0.5);
         @media(max-width: 950px){
     height: 80vh;
  }
   @media(max-width: 500px){
     height: 60vh;
  }
    }
      @media(max-width: 950px){
     height: 80vh;
  }
   @media(max-width: 500px){
     height: 60vh;
  }
`
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
     @media(max-width: 950px){
     height: 80vh;
  }
   @media(max-width: 500px){
     height: 60vh;
  }
`
export const Img = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: center;
     @media(max-width: 950px){
     height: 80vh;
  }
   @media(max-width: 500px){
     height: 60vh;
  }
`
export const Vidoe = styled.video`
    width: 100vw;
    height: 100vh;
       object-fit: cover;
        @media(max-width: 950px){
     height: 80vh;
  }
   @media(max-width: 500px){
     height: 60vh;
  }
`
// export const OverLay = styled.div`
//     width: 100vw;
//     height: 100vh;
//     position: absolute;
//     // background: rgba(255, 255, 255,0.5);
//     background: black;
//     z-index: 1;
// `