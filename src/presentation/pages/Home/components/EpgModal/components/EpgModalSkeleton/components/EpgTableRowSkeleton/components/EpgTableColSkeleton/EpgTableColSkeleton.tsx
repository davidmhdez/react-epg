import {EpgTableColSkeletonWrapper} from "./styles.ts";
import Skeleton from "react-loading-skeleton";

type Props = {
    width: number
}

const EpgTableColSkeleton: React.FC<Props> = ({width}) => {
    return (
        <EpgTableColSkeletonWrapper $width={width}>
            <Skeleton className="programTitle"/>
            <Skeleton className="programDuration"/>
        </EpgTableColSkeletonWrapper>
    );
};

export default EpgTableColSkeleton;
