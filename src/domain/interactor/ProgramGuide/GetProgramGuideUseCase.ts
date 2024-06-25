import {inject, injectable} from "inversify";
import 'reflect-metadata'
import type IProgramGuideRepository from "../../repository/IProgramGuideRepository.ts";
import TYPES from "../../types/types.ts";
import ProgramGuide from "../../entity/ProgramGuide.ts";

@injectable()
export default class GetProgramGuideUseCase{
    private programGuideRepository: IProgramGuideRepository;
    constructor(@inject(TYPES.ProgramGuideRepository) programGuideRepository: IProgramGuideRepository) {
        this.programGuideRepository = programGuideRepository;
    }

    getFullProgramGuide(): Promise<ProgramGuide> {
        const fromDate = new Date();
        const toDate = new Date();
        toDate.setHours(23, 59, 59)

        return this.programGuideRepository.getProgramGuide(fromDate, toDate)
    }
}