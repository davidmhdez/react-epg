import React from 'react';
import {formatTime} from "../../../../helpers.ts";
import {EpgHeaderTitle, EpgHoursHeaderWrapper, EpgHoursInterval, EpgHoursList} from "./styles.ts";

type Props = {
    width: number
    initialOffset: number
    timeIntervals: Date[]
}

const EpgHoursHeader: React.FC<Props> = ({ width, timeIntervals, initialOffset }) => {
    return (
        <EpgHoursHeaderWrapper>
            <EpgHeaderTitle>HOY</EpgHeaderTitle>
            <EpgHoursList $width={width}>
                {timeIntervals.map((time, index) => (
                    <EpgHoursInterval
                        key={index}
                        $index={index}
                        $initialOffset={initialOffset}
                    >
                        {formatTime(time)}
                    </EpgHoursInterval>
                ))}
            </EpgHoursList>
        </EpgHoursHeaderWrapper>
    );
};

export default EpgHoursHeader;