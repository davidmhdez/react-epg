import EpgModal from "./EpgModal.tsx";
import container from "../../../../../inversify.config.ts";
import TYPES from "../../../../../domain/types/types.ts";
import GetProgramGuideUseCase from "../../../../../domain/interactor/ProgramGuide/GetProgramGuideUseCase.ts";
import {useQuery} from "react-query";

const EpgModalContainer = () => {
    const getProgramGuideUseCase = container.get<GetProgramGuideUseCase>(TYPES.GetProgramGuideUseCase);
    const getProgramGuide = () => getProgramGuideUseCase.getFullProgramGuide();

    const { data, isLoading } = useQuery('programGuide', getProgramGuide, {
        refetchOnWindowFocus: false,
        staleTime: 60000
    });

    return (
        <EpgModal
            isLoading={isLoading}
            programGuide={data ?? null}
        />
    );
};

export default EpgModalContainer;
