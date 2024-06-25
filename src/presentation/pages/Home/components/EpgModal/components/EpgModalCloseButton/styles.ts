import styled from "styled-components";

export const StyledEpgModalCloseButton = styled.button`
    background: none;
    border: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    padding: 0;
    margin: 0;
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 200;
    
    svg{
        width: 30px;
        height: 30px;
        
        path{
            fill: #fff;
        }
    }
`