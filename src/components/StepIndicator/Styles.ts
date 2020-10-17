import styled from "styled-components"

export const Indicator = styled.div`
    width: 5vw;
    height: ${props => props.theme.thickness}px;
    background-color: ${props => props.color};
    margin: 10px;
    opacity: ${props => props.theme.opacity};
    transition: 1s;
`;

