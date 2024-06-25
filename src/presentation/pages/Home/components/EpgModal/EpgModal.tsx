import React from 'react';
import {EpgModalWrapper} from "./styles.ts";
import EpgModalCloseButton from "./components/EpgModalCloseButton";
import EpgModalSkeleton from "./components/EpgModalSkeleton";
import ProgramGuide from "../../../../../domain/entity/ProgramGuide.ts";
import EpgTable from "./components/EpgTable";
import EpgChannelBanner from "./components/EpgChannelBanner";

type Props = {
    isLoading: boolean
    programGuide: ProgramGuide | null
}

const EpgModal: React.FC<Props> = ({isLoading, programGuide}) => {
    return (
        <EpgModalWrapper>
            <EpgModalCloseButton/>
            <EpgChannelBanner/>
            {isLoading || !programGuide
                ? <EpgModalSkeleton/>
                : <EpgTable programGuide={programGuide}/>
            }
        </EpgModalWrapper>
    );
};

export default EpgModal;
