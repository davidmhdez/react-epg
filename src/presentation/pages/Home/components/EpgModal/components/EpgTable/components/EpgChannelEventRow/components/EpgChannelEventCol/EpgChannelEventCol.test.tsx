import {fireEvent, render, screen} from "@testing-library/react";
import ModalContext, {
    initialModalContextValues
} from "../../../../../../../../../../context/ModalContext/ModalContext.ts";
import EpgChannelEventCol from "./EpgChannelEventCol.tsx";
import {channelEventMock} from "../../../../../../../../../../../mocks/channelMock.ts";

describe('EpgChannelEventCol test', () => {
    test('should render channel event data', () => {
        render(
            <ModalContext.Provider value={initialModalContextValues}>
                <EpgChannelEventCol
                    channelEvent={channelEventMock}
                    width={300}
                    index={0}
                    position={0}
                />
            </ModalContext.Provider>
        )

        expect(screen.getByText(channelEventMock.name)).toBeTruthy();
    })

    test('should select channel event on hover', () => {
        const selectChannelEvent = jest.fn();
        render(
            <ModalContext.Provider value={{
                ...initialModalContextValues,
                selectChannelEvent
            }}>
                <EpgChannelEventCol
                    channelEvent={channelEventMock}
                    width={300}
                    index={0}
                    position={0}
                />
            </ModalContext.Provider>
        )
        const col = screen.getByTestId(channelEventMock.id)
        fireEvent.mouseEnter(col)
        expect(selectChannelEvent).toHaveBeenCalledWith(channelEventMock);
    })
})