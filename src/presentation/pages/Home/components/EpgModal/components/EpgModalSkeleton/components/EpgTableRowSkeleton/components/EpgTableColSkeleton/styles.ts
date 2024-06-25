import styled from "styled-components";

export const EpgTableColSkeletonWrapper = styled.div<{$width: number}>`
    width: ${({ $width }) => $width}px;
    height: 120px;
    border: 1px solid #6C6C6CAD;
    
    .programTitle{
        width: 80px;
        height: 20px;
        margin: 20px;
    }
    
    .programDuration{
        width: 100px;
        height: 15px;
        margin-left: 20px;
    }
`;