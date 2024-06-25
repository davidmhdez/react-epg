import {ApiChannel, ProgramGuideResponse} from "./apiTypes.ts";
import ProgramGuide from "../../domain/entity/ProgramGuide.ts";
import Channel from "../../domain/entity/Channel.ts";

export const getCompactDateFormat = (date: Date) =>{
    const pad =(number: number) => number < 10 ? '0' + number : number;

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

const getDateFromCompactDate = (date: string) =>{
    const year = parseInt(date.substring(0, 4));
    const month = parseInt(date.substring(4, 6)) - 1;
    const day = parseInt(date.substring(6, 8));
    const hours = parseInt(date.substring(8, 10));
    const minutes = parseInt(date.substring(10, 12));
    const seconds = parseInt(date.substring(12, 14));
    return new Date(year, month, day, hours, minutes, seconds);
}

const getMinutesFromDuration = (duration: string) =>{
    const durationParts = duration.split(':');

    const hours = parseInt(durationParts[0], 10);
    const minutes = parseInt(durationParts[1], 10);
    const seconds = parseInt(durationParts[2], 10);

    return (hours * 60) + minutes + (seconds / 60);
}

const getEventDate = (stringDate: string) =>{
    const [date, time] = stringDate.split(' ');
    const [yyyy, mm, dd] = date.split('/').map(Number);
    const [hh, mi, ss] = time.split(':').map(Number);

    return new Date(yyyy, mm - 1, dd, hh, mi, ss);
}

const getChannelAdapter = (apiChannel: ApiChannel): Channel =>{
    return {
        id: apiChannel.id,
        name: apiChannel.name,
        number: apiChannel.number,
        image: apiChannel.image,
        events: apiChannel.events.map(event=>{
            return{
                id: event.id,
                name: event.name,
                description: event.description,
                dateBegin: getEventDate(event.date_begin),
                dateEnd: getEventDate(event.date_end),
                durationInMinutes: getMinutesFromDuration(event.duration),
                duration: event.duration
            }
        }),
    }
}

export const getProgramGuideAdapter = (data: ProgramGuideResponse): ProgramGuide =>{
    return {
        from: getDateFromCompactDate(data.entry.date_from),
        end: getDateFromCompactDate(data.entry.date_to),
        channels: data.response.channels.map(channel=> getChannelAdapter(channel))
    }
}