import styled from "styled-components";

export const EpgTableRowSkeletonWrapper = styled.div`
    width: 100%;
    display: flex;
`

export const EpgTableRowChannelColSkeleton = styled.div`
    min-width: 200px;
    height: 110px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    border: 1px solid #6C6C6CAD;
    margin: 5px 10px 5px 0;
    
    .channelNumber{
        width: 60px;
        height: 20px;
    }
    
    .channelImage{
        width: 85px;
        height: 25px;
    }
`