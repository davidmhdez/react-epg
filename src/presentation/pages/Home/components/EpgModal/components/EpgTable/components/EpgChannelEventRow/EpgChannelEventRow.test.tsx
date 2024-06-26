import {render} from "@testing-library/react";
import ModalContext, {initialModalContextValues} from "../../../../../../../../context/ModalContext/ModalContext.ts";
import EpgChannelEventRow from "./EpgChannelEventRow.tsx";
import {channelMock, programGuideMock} from "../../../../../../../../../mocks/channelMock.ts";

describe('EpgChannelEventRow test', () => {
    test('should match with snapshot', () => {
        const { container } = render(
            <ModalContext.Provider value={initialModalContextValues}>
                <EpgChannelEventRow
                    channel={channelMock}
                    maxWidth={1200}
                    programGuideBegin={programGuideMock.from}
                />
            </ModalContext.Provider>
        )
        expect(container).toMatchSnapshot()
    })
})