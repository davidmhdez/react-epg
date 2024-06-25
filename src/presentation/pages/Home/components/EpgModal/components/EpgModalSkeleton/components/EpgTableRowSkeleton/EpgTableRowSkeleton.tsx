import React from "react";
import {EpgTableRowChannelColSkeleton, EpgTableRowSkeletonWrapper} from "./styles.ts";
import Skeleton from "react-loading-skeleton";
import EpgTableColSkeleton from "./components/EpgTableColSkeleton";

type Props = {
    programColsWidth: number[]
}

const EpgTableRowSkeleton: React.FC<Props> = ({programColsWidth}) => {
    return (
        <EpgTableRowSkeletonWrapper>
            <EpgTableRowChannelColSkeleton>
                <Skeleton className="channelNumber"/>
                <Skeleton className="channelImage"/>
            </EpgTableRowChannelColSkeleton>
            {programColsWidth.map((col, index)=> (
                <EpgTableColSkeleton key={index} width={col}/>
            ))}
        </EpgTableRowSkeletonWrapper>
    );
};

export default EpgTableRowSkeleton;
