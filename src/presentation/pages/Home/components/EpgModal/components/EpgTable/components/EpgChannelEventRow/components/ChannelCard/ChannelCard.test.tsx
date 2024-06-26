import {render, screen} from "@testing-library/react";
import ChannelCard from "./ChannelCard.tsx";
import {channelMock} from "../../../../../../../../../../../mocks/channelMock.ts";
import "@testing-library/jest-dom"

describe('ChannelCard test', () => {
    test('should render channel event data', () => {
        render(
            <ChannelCard channel={channelMock}/>
        )

        expect(screen.getByText(channelMock.number)).toBeInTheDocument();
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', channelMock.image);
    })
})