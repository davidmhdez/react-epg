import GetProgramGuideUseCase from "./GetProgramGuideUseCase.ts";
import IProgramGuideRepository from "../../repository/IProgramGuideRepository.ts";
import container from "../../../inversify.config.ts";
import TYPES from "../../types/types.ts";
import ProgramGuideRepositoryMock from "../../../mocks/ProgramGuideRepositoryMock.ts";

describe('GetProgramGuideUseCase tests', () => {
    let useCase: GetProgramGuideUseCase;

    beforeEach(() => {
        container.rebind<IProgramGuideRepository>(TYPES.ProgramGuideRepository).to(ProgramGuideRepositoryMock);
        useCase = container.get<GetProgramGuideUseCase>(TYPES.GetProgramGuideUseCase);
    });

    test('should return the program guide', async () => {
        const fromDate = new Date();
        const endDate = new Date();
        endDate.setHours(23, 59, 59);
        const result = await useCase.getFullProgramGuide();
        expect(result.from).toEqual(fromDate);
        expect(result.end).toEqual(endDate);
        expect(result.channels).toBeTruthy()
    });
})