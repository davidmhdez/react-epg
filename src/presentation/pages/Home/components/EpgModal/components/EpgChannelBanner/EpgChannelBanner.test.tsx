import {channelEventMock} from "../../../../../../../mocks/channelMock.ts";
import {render, screen} from "@testing-library/react";
import ModalContext, {initialModalContextValues} from "../../../../../../context/ModalContext/ModalContext.ts";
import EpgChannelBanner from "./EpgChannelBanner.tsx";

describe('EpgChannelBanner tests', () => {
    test('should render selected channel event', () => {
        const selectedChannelEvent = channelEventMock;
        render(
            <ModalContext.Provider value={{
                ...initialModalContextValues,
                selectedChannelEvent
            }}>
                <EpgChannelBanner/>
            </ModalContext.Provider>
        )
        expect(screen.getByText(selectedChannelEvent.name)).toBeTruthy();
        expect(screen.getByText(selectedChannelEvent.description)).toBeTruthy();
    })
})