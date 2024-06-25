import React from "react";
import {EpgTableBody, EpgTableWrapper} from "./styles.ts";
import ProgramGuide from "../../../../../../../domain/entity/ProgramGuide.ts";
import EpgChannelEventRow from "./components/EpgChannelEventRow/EpgChannelEventRow.tsx";
import EpgHoursHeader from "./components/EpgHoursHeader";
import {getWidthFromDates} from "../../helpers.ts";

type Props = {
    programGuide: ProgramGuide
}

const EpgTable: React.FC<Props> = React.memo(({programGuide}) => {
    const maxTableWidth = getWidthFromDates(programGuide.from, programGuide.end);

    return (
        <EpgTableWrapper>
            <EpgHoursHeader startDate={programGuide.from} endDate={programGuide.end}/>
            <EpgTableBody>
                {programGuide.channels.map(channel =>(
                    <EpgChannelEventRow
                        channel={channel}
                        key={channel.id}
                        programGuideBegin={programGuide.from}
                        maxWidth={maxTableWidth}
                    />
                ))}
            </EpgTableBody>
        </EpgTableWrapper>
    );
});

export default EpgTable;
