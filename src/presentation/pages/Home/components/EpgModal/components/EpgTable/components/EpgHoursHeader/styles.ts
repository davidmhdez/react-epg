import styled from "styled-components";

export const EpgHoursHeaderWrapper = styled.div`
    position: sticky;
    top: 50vh;
    background-color: #000000;
    z-index: 110;
    display: flex;
`;

export const EpgHeaderTitle = styled.p`
    width: 230px;
    color: #ffffff;
    font-size: 14px;
    text-align: center;
    margin: 0;
    font-weight: 900;
    position: sticky;
    left: 0;
    z-index: 120;
    padding: 10px 10px 10px 0;
    background-color: #000000;
`

export const EpgHoursList = styled.div<{$width: number}>`
    width: ${({ $width }) => $width}px;
    position: relative;
    padding: 10px 0;
    height: 37px;
`;

export const EpgHoursInterval = styled.div<{$index: number, $initialOffset: number}>`
    position: absolute;
    left: ${({$index, $initialOffset})=> $initialOffset + (300 / 2) * $index}px;
    transform: translateX(-50%);
    text-align: center;
    white-space: nowrap;
    color: #ffffff;
    
`