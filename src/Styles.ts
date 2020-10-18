import styled from "styled-components"

export const AppWrapper = styled.div`
    position: fixed;
    right: 20px;
    left: 0;
    display: flex;
    justify-content: ${props => props.theme.justify};
    z-index: 9999;
    bottom: 20px;
`

export const FlexElement = styled.div`
    flex: 1;
`