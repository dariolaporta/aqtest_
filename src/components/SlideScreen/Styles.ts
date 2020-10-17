import styled from "styled-components"

export const TitleContainer = styled.div`
    position: absolute;
    left: -40%;
    right: 0px;
    margin-right: auto;
    margin-left: auto;
    top: 20%;
    max-width: 200px;   
`

export const CustomTitle = styled.div`
    line-height: 1;
    max-width: 1000px;
    position: relative;
    color: white;
    font-family: "Tungsten Bold";
    font-size: 15vmin;
    text-transform: uppercase;
    text-align: left;
    letter-spacing: 5px;
    &:before {
        content: " ${props => props.theme.custom_title}";
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin-right: auto;
        margin-left: auto;
        transform: translateY(-50%);
        background-color: transparent;
        color: transparent;
        font-size: 15vmin;
        -webkit-text-stroke: 1px #fff;
        z-index: 999;
        line-height: 1;
        opacity: 0.99;
    }
`

export const DivDx = styled.div`
    background-color: ${props => props.color};
    flex: 1;
    flex-direction: column;
    height: 100vh;
    display: flex;
    justify-content: space-between;
`

export const DivSx = styled.div`
    background-color: ${props => props.color};
    width: 45%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
`

export const ImgDivSx = styled.div`
    width: 40vmin;
    height: 40vmin;
    opacity: 0.2;
    border-radius: 100%;
    background-image: url(${props => props.theme.img_sx});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
`
export const ImgDivDx = styled.div`
    width: 30vmin;
    height: 30vmin;
    opacity: 0.2;
    background-image: url(${props => props.theme.img_dx});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
`

export const Paragraph = styled.p`
    font-size: 10px;
    margin-top: 20px;
    font-family: Roboto;
`

export const ParagraphTng = styled.p`
    font-size: 15px;
    margin-top: 20px;
    font-family: Tungsten Bold;
    letter-spacing: 1px;
`

export const TopImageContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 80;
    max-width: 300px;
    display: flex;
    justify-content: center;
`
