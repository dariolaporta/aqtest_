import styled from "styled-components"

export const TopHeader = styled.div`
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    color: white;
    text-align: left;
    justify-content: flex-start;
    flex-direction: column;
    font-size: 10;
    padding: 20px;
    font-family: Tungsten Semi-Bold;
`

export const Typer = styled.p`
    width: ${props => props.theme.stringLength}ch;
    animation: typing 2s steps(${props => props.theme.stringLength});
    white-space: nowrap;
    overflow: hidden;
    margin: 0; 
    font-size: 13px; 
    letter-spacing: 1px;
`