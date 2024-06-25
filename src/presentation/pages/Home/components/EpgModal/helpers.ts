export const formatTime = (date: Date) =>{
    const dateHours = date.getHours();
    const dateMinutes = date.getMinutes();

    const minutes = dateMinutes < 10 ? '0' + dateMinutes : dateMinutes;
    const hours = dateHours < 10 ? '0' + dateHours : dateHours;

    return `${hours}:${minutes}`;
}

export const formatTimeRange = (dateFrom: Date, dateTo: Date) =>{
    const fromTime = formatTime(dateFrom);
    const toTime = formatTime(dateTo);
    return `${fromTime} - ${toTime}`
}

export const getDimensions = (intervalStart: Date, programStart: Date, programDuration: number) =>{
    // @ts-ignore
    const startDiffInHours = (programStart - intervalStart) / (1000 * 60 * 60);
    const position = startDiffInHours <= 0 ? 0 : startDiffInHours * 100;

    let adjustedProgramDuration = programDuration;
    if (programStart < intervalStart) {
        // @ts-ignore
        const overlapInMinutes = (intervalStart - programStart) / (1000 * 60);
        adjustedProgramDuration = programDuration - overlapInMinutes;
    }

    const width = (adjustedProgramDuration / 60) * 300;

    return{
        width,
        position
    }
}

export const getWidthFromDates = (startDate: Date, endDate: Date) =>{
    // @ts-ignore
    const differenceInHours = (endDate - startDate) / (1000 * 60 * 60);
    return differenceInHours * 300;
}