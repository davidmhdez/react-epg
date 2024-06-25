import styled from "styled-components";

export const ChannelCardWrapper = styled.div`
    background-color: #000000;
    position: sticky;
    left: 0;
    z-index: 100;
    padding-right: 10px;
`;

export const ChannelCardContent = styled.div`
    width: 220px;
    height:110px;
    background-color: #8D8D8D86;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    left: 0;
`;

export const ChannelCardNumber = styled.p`
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
`;

export const ChannelCardImage = styled.img`
    width: 100px;
`;