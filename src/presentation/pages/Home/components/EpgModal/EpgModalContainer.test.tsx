import {render, waitFor, screen} from "@testing-library/react";
import ModalContext, {initialModalContextValues} from "../../../../context/ModalContext/ModalContext.ts";
import EpgModalContainer from "./EpgModalContainer.tsx";
import container from "../../../../../../inversify.config.ts";
import IProgramGuideRepository from "../../../../../domain/repository/IProgramGuideRepository.ts";
import TYPES from "../../../../../domain/types/types.ts";
import ProgramGuideRepositoryMock from "../../../../../mocks/ProgramGuideRepositoryMock.ts";
import {QueryClient, QueryClientProvider} from "react-query";
import "@testing-library/jest-dom"

describe('EpgModalContainer', () => {

    beforeEach(() => {
        container.rebind<IProgramGuideRepository>(TYPES.ProgramGuideRepository).to(ProgramGuideRepositoryMock);
    });

    test('should match with snapshot', async () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <ModalContext.Provider value={initialModalContextValues}>
                    <EpgModalContainer/>
                </ModalContext.Provider>
            </QueryClientProvider>
        )

        await waitFor(()=>{
            expect(screen.getByTestId('epgTable')).toBeInTheDocument()
        })
    })
})