import {formatTime, formatTimeRange, getDimensions, getWidthFromDates} from "./helpers.ts";

describe('helpers test', () => {
    test('should format single-digit hours correctly', () => {
        const date = new Date(2023, 0, 1, 5, 30); // January 1, 2023, 05:30
        const formattedTime = formatTime(date);
        expect(formattedTime).toBe('05:30');
    });

    test('should format time range correctly for same day times', () => {
        const dateFrom = new Date('2023-10-01T08:30:00');
        const dateTo = new Date('2023-10-01T17:45:00');
        const result = formatTimeRange(dateFrom, dateTo);
        expect(result).toBe('08:30 - 17:45');
    });

    test('should calculate correct width and position when program starts after intervalStart and fits within the interval', () => {
        const intervalStart = new Date('2023-10-01T10:00:00Z');
        const programStart = new Date('2023-10-01T11:00:00Z');
        const programDuration = 60;

        const result = getDimensions(intervalStart, programStart, programDuration);

        expect(result.width).toBe(300);
        expect(result.position).toBe(100);
    });

    test('should return correct width when dates are within the same day', () => {
        const startDate = new Date('2023-10-01T08:00:00');
        const endDate = new Date('2023-10-01T12:00:00');
        const result = getWidthFromDates(startDate, endDate);
        expect(result).toBe(1200);
    });
})