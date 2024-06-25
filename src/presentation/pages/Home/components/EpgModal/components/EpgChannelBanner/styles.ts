import styled from "styled-components";

export const EpgChannelBannerWrapper = styled.div`
    width: calc(100vw - 17px);
    position: sticky;
    top: 0;
    left: 0;
    height: 50vh;
    background-color: #000000;
    z-index: 160;
    padding: 30px;
`

export const EpgChannelBannerTitle = styled.h3`
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 20px;
    color: #ffffff;
`

export const EpgChannelBannerSubtitle = styled.p`
    font-size: 20px;
    color: #ffffff;
    font-weight: 500;
    margin: 0 0 10px;
`

export const EpgChannelBannerDescription = styled.p`
    margin: 0;
    font-size: 18px;
    color: #ffffff;
    width: 55%;
`