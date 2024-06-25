import styled from "styled-components";

export const EpgChannelEventRowWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const EpgChannelEventList = styled.div<{$maxWidth: number}>`
    position: relative;
    display: flex;
    border: 1px solid #bebebe;
    background-color: #8D8D8D86;
    max-width: ${({$maxWidth}) => $maxWidth}px;
    overflow: hidden;
`;