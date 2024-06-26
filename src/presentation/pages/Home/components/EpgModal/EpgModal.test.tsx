import {render, screen} from "@testing-library/react";
import ModalContext, {initialModalContextValues} from "../../../../context/ModalContext/ModalContext.ts";
import EpgModal from "./EpgModal.tsx";
import {programGuideMock} from "../../../../../mocks/channelMock.ts";

describe('EpgModal test', () => {
    test('show skeleton when isLoading', () => {
        render(
            <ModalContext.Provider value={initialModalContextValues}>
                <EpgModal
                    isLoading
                    programGuide={null}
                />
            </ModalContext.Provider>
        )
        expect(screen.getByTestId('epgModalSkeleton')).toBeTruthy()
    })

    test('should render epg table when exist program guide', ()=>{
        render(
            <ModalContext.Provider value={initialModalContextValues}>
                <EpgModal
                    isLoading={false}
                    programGuide={programGuideMock}
                />
            </ModalContext.Provider>
        )
        expect(screen.getByTestId('epgTable')).toBeTruthy()
    });
})