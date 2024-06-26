import ProgramGuideRepository from "./ProgramGuideRepository.ts";
import axios from "axios";
import programGuideResponseMock from "../../mocks/programGuideResponseMock.ts";
import ProgramGuide from "../../domain/entity/ProgramGuide.ts";
import {getDateFromCompactDate} from "./programGuideAdapter.ts";
jest.mock('axios');

describe('ProgramGuideRepository tests', () => {
    test('should return a ProgramGuide object when given a valid date range', async() => {
        const fromDate = getDateFromCompactDate('20240625143010');
        const toDate = getDateFromCompactDate('20240625153010');
        (axios.get as jest.Mock).mockResolvedValue({ data: programGuideResponseMock });
        const programGuideRepository = new ProgramGuideRepository();
        const result = await programGuideRepository.getProgramGuide(fromDate, toDate);
        const expectedProgramGuide: ProgramGuide = {
            from: fromDate,
            end: toDate,
            channels: []
        }
        expect(result).toEqual(expectedProgramGuide)
    })
})