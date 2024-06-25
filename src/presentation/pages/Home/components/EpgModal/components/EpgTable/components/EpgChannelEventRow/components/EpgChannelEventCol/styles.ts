import styled from "styled-components";

export const EpgChannelEventColWrapper = styled.div<{$width: number, $position: number, $enableLeftBorder: boolean}>`
    min-width: ${({$width}) => $width}px;
    max-width: ${({$width}) => $width}px;
    height: 108px;
    border-right: 1px solid #bebebe;
    ${({$enableLeftBorder}) => $enableLeftBorder && `border-left: 1px solid #bebebe;`}
    
    &:hover {
        background-color: #E8E8E8DB;
    }
`;

export const EpgChannelEventRowTitle = styled.h6`
    margin: 15px 15px 5px;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    display: -webkit-box!important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    hyphens: auto;
`

export const EpgChannelEventRowDuration = styled.p`
    margin: 0 15px;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`