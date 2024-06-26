import {render} from "@testing-library/react";
import ModalContext, {initialModalContextValues} from "../../../../../../context/ModalContext/ModalContext.ts";
import EpgTable from "./EpgTable.tsx";
import {programGuideMock} from "../../../../../../../mocks/channelMock.ts";

describe('EpgTable test', () => {
    test('should match with snapshot', () => {
        const { container } = render(
            <ModalContext.Provider value={initialModalContextValues}>
                <EpgTable programGuide={programGuideMock}/>
            </ModalContext.Provider>
        )
        expect(container).toMatchSnapshot()
    })
})