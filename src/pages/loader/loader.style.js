import styled from 'styled-components'

export const LoaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LoaderWrapper = styled.div`
    width: 500px;
    height: 300px;
    // background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:after{
        content: "";
        width:  100%;
        // height: 100%;
        background:  rgba(255,255,255,0.5);
        position: absolute;
        animation-name: slider;

    }

    @keyframe slider {
        0%{
                height: 0%;
        }25%{
                      height: 25%;
        }50%{
                  height: 50%;
        }75px{
                  height: 75%;
        }100%{
                  height: 100%;
        }
    }
`
export const Image = styled.img`
    height: 100px;
`