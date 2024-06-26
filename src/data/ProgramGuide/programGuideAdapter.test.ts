import {
    getChannelAdapter,
    getCompactDateFormat,
    getDateFromCompactDate, getEventDate,
    getMinutesFromDuration, getProgramGuideAdapter
} from "./programGuideAdapter.ts";
import apiChannelMock from "../../mocks/apiChannel.ts";
import programGuideResponseMock from "../../mocks/programGuideResponseMock.ts";

describe('Program guide adapter tests', () => {
    test('should correctly format a typical date objec', () => {
        const date = new Date(2023, 8, 15, 14, 30, 45);
        const formattedDate = getCompactDateFormat(date);
        expect(formattedDate).toBe('20230915143045');
    })

    test('should return a Date object when given a valid compact date string', ()=>{
        const dateStr = "20230101123045";
        const result = getDateFromCompactDate(dateStr);
        expect(result).toBeInstanceOf(Date);
        expect(result.getFullYear()).toBe(2023);
        expect(result.getMonth()).toBe(0);
        expect(result.getDate()).toBe(1);
        expect(result.getHours()).toBe(12);
        expect(result.getMinutes()).toBe(30);
        expect(result.getSeconds()).toBe(45);
    });

    test('should return 90 minutes when given "01:30:00', ()=>{
        const duration = "01:30:00";
        const result = getMinutesFromDuration(duration);
        expect(result).toBe(90);
    });

    test('should return a Date object when given a valid date and time string', () => {
        const input = '2023/10/05 14:30:00';
        const expectedDate = new Date(2023, 9, 5, 14, 30, 0);
        const result = getEventDate(input);
        expect(result).toEqual(expectedDate);
    });

    test('should correctly map all fields from ApiChannel to Channel', ()=>{
        const expectedChannel = {
            id: '1',
            name: 'Test Channel',
            number: '101',
            image: 'test_image.png',
            events: [
                {
                    id: 'event1',
                    name: 'Event 1',
                    description: 'Description 1',
                    dateBegin: new Date(2023, 9, 1, 10, 0, 0),
                    dateEnd: new Date(2023, 9, 1, 11, 0, 0),
                    durationInMinutes: 60,
                    duration: '01:00:00'
                }
            ]
        };

        const result = getChannelAdapter(apiChannelMock);
        expect(result).toEqual(expectedChannel);
    });

    test('should handle empty channels array in ProgramGuideResponse', ()=>{
        const result = getProgramGuideAdapter(programGuideResponseMock);

        expect(result.from).toEqual(new Date('2024-06-25T20:30:10.000Z'));
        expect(result.end).toEqual(new Date('2024-06-25T21:30:10.000Z'));
        expect(result.channels.length).toBe(0);
    });
})