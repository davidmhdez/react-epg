import formatBannerDescription from "./formatBannerDescription.ts";

describe('formatBannerDescription test', () => {
    it('should format "01:30" to "1h 30m"', () => {
        const result = formatBannerDescription("01:30");
        expect(result).toBe("1h 30m");
    });
})