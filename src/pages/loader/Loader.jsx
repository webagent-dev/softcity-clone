import React from 'react'
import { LoaderContainer, LoaderWrapper, Image } from  './loader.style'
function Loader() {
  return (
      <LoaderContainer>
          <LoaderWrapper>
                   <Image src='/softcity-loader.png'  alt='loader'/>
          </LoaderWrapper>
    </LoaderContainer>
  )
}

export default Loader