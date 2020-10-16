import React from "react"
import styled from "styled-components"

export const DivDx = styled.div`
    background-color: ${props => props.color};
    flex: 1;
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const DivSx = styled.div`
    background-color: ${props => props.color};
    width: 45%;
    flex-direction: column;
    flex: 1;
    display: flex;
    justify-content: space-between;
`

export const ImgDivSx = styled.div`
    width: 300px;
    height: 300px;
    opacity: 0.2;
    border-radius: 100%;
    background-image: url(${props => props.theme.img_sx});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
`
export const ImgDivDx = styled.div`
    width: 200px;
    height: 200px;
    opacity: 0.2;
    background-image: url(${props => props.theme.img_dx});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
`
