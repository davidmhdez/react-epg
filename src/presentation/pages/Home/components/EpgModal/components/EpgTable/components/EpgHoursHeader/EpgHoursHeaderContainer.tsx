import React, {useMemo} from 'react';
import EpgHoursHeader from "./EpgHoursHeader.tsx";

type Props = {
    startDate: Date
    endDate: Date
}

const EpgHoursHeaderContainer: React.FC<Props> = ({ startDate, endDate }) => {

    const { width, initialOffset, timeIntervals } = useMemo(()=>{
        const adjustToNextHalfHour = (date: Date) => {
            const minutes = date.getMinutes();
            if (minutes !== 0 && minutes !== 30) {
                const adjustedMinutes = minutes < 30 ? 30 : 0;
                if (adjustedMinutes === 0) {
                    date.setHours(date.getHours() + 1);
                }
                date.setMinutes(adjustedMinutes, 0, 0);
            }
            return date;
        };

        const initialStartDate = new Date(startDate);
        const adjustedStartDate = adjustToNextHalfHour(new Date(startDate));

        // @ts-ignore
        const differenceInHours = (endDate - initialStartDate) / (1000 * 60 * 60);
        const width = differenceInHours * 300;


        const timeIntervals = [];
        const halfHourInMilliseconds = 30 * 60 * 1000;

        let currentTime = new Date(adjustedStartDate.getTime());
        while (currentTime <= endDate) {
            timeIntervals.push(new Date(currentTime));
            currentTime = new Date(currentTime.getTime() + halfHourInMilliseconds);
        }

        // @ts-ignore
        const initialOffset = (adjustedStartDate - initialStartDate) / (1000 * 60 * 30) * 150;

        return{
            width,
            initialOffset,
            timeIntervals
        }
    }, [startDate, endDate])


    return (
        <EpgHoursHeader
            initialOffset={initialOffset}
            width={width}
            timeIntervals={timeIntervals}
        />
    );
};

export default EpgHoursHeaderContainer;
