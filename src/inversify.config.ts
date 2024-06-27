import {Container} from "inversify";
import IProgramGuideRepository from "./domain/repository/IProgramGuideRepository.ts";
import TYPES from "./domain/types/types.ts";
import ProgramGuideRepository from "./data/ProgramGuide/ProgramGuideRepository.ts";
import GetProgramGuideUseCase from "./domain/interactor/ProgramGuide/GetProgramGuideUseCase.ts";

const container = new Container()
container.bind<IProgramGuideRepository>(TYPES.ProgramGuideRepository).to(ProgramGuideRepository);
container.bind<GetProgramGuideUseCase>(TYPES.GetProgramGuideUseCase).to(GetProgramGuideUseCase);

export default container