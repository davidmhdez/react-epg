import ProgramGuide from "../entity/ProgramGuide.ts";

export default interface IProgramGuideRepository {
    getProgramGuide(fromDate: Date, toDate: Date): Promise<ProgramGuide>
}