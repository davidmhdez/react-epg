import {EpgModalSkeletonTable, EpgModalSkeletonWrapper} from "./styles.ts";
import {SkeletonTheme} from "react-loading-skeleton";
import EpgTableHeaderSkeleton from "./components/EpgTableHeaderSkeleton";
import EpgTableRowSkeleton from "./components/EpgTableRowSkeleton";

const EpgModalSkeleton = () => {
    return (
        <EpgModalSkeletonWrapper>
            <SkeletonTheme baseColor="#6C6C6CAD" highlightColor="#7E7E7EAD">
                <EpgModalSkeletonTable>
                    <EpgTableHeaderSkeleton/>
                    <EpgTableRowSkeleton programColsWidth={[150, 250, 140, 350, 260]}/>
                    <EpgTableRowSkeleton programColsWidth={[250, 180, 220, 250, 560]}/>
                    <EpgTableRowSkeleton programColsWidth={[330, 190, 170, 520, 90]}/>
                </EpgModalSkeletonTable>
            </SkeletonTheme>
        </EpgModalSkeletonWrapper>
    );
};

export default EpgModalSkeleton;
