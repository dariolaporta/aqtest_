import styled from "styled-components"

export const Indicator = styled.div`
    width: 5vw;
    height: ${props => props.theme.thickness}px;
    animation: ${props => props.theme.translate};
    background-color: ${props => props.color};
    margin: 10px;
    opacity: ${props => props.theme.opacity};
    transition: 0.5s;
    position: relative;
    ${props => props.theme.isBeforePresent ? 
        `&:before {
            content: "-";
            width: 5vw;
            height: 40px;
            opacity: 0!important;
            animation: ani 0.5s normal;
            background: orange;
            color: orange;
            position: absolute;
            left: 0;
            right: 0;
            transition: 0.5s;
        }` : ""
    }

`;

