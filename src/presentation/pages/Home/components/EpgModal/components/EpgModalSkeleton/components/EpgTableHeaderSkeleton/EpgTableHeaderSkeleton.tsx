import {EpgTableHeaderSkeletonWrapper} from "./styles.ts";
import Skeleton from "react-loading-skeleton";

const EpgTableHeaderSkeleton = () => {
    return (
        <EpgTableHeaderSkeletonWrapper>
            <Skeleton className="dayText"/>
            <Skeleton className="hourText"/>
            <Skeleton className="hourText"/>
            <Skeleton className="hourText"/>
            <Skeleton className="hourText"/>
            <Skeleton className="hourText"/>
            <Skeleton className="hourText"/>
        </EpgTableHeaderSkeletonWrapper>
    );
};

export default EpgTableHeaderSkeleton;
