import {Container} from "inversify";
import IProgramGuideRepository from "./src/domain/repository/IProgramGuideRepository";
import TYPES from "./src/domain/types/types";
import ProgramGuideRepository from "./src/data/ProgramGuide/ProgramGuideRepository";
import GetProgramGuideUseCase from "./src/domain/interactor/ProgramGuide/GetProgramGuideUseCase";

const container = new Container()
container.bind<IProgramGuideRepository>(TYPES.ProgramGuideRepository).to(ProgramGuideRepository);
container.bind<GetProgramGuideUseCase>(TYPES.GetProgramGuideUseCase).to(GetProgramGuideUseCase);

export default container