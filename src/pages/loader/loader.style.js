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
        width:  50%;
        height: 50%;
        background:  rgba(255,255,255,0.5);
        position: absolute;
        transform: translateY(0px);
        transition: all .2s ease-in-out;
        // animation: slider 2s infinite;
        animation-name: slider;
        animation-duration: .2s;
        animation-delay: 0;
        animation-fill-mode: repeat;
        animation-iteration-count: infinite;

    }

    @keyframe slider {
        0%{
                   transform: translateY(-10px);
        }25%{
                            transform: translateY(-60px);
        }50%{
                        transform: translateY(-80px);
        }75px{
                            transform: translateY(-120px);
        }100%{
                        transform: translateY(-10px);
        }
    }
`
export const Image = styled.img`
    height: 100px;
`