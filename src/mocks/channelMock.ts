import Channel, {ChannelEvent} from "../domain/entity/Channel.ts";
import ProgramGuide from "../domain/entity/ProgramGuide.ts";

export const channelEventMock: ChannelEvent = {
    id: "11",
    name: "Test event",
    duration: "01:30:00",
    dateBegin: new Date(2024, 6, 25, 14, 0, 0),
    description: "Test description",
    durationInMinutes: 90,
    dateEnd: new Date(2024, 6, 25, 15, 30, 0),
}

export const channelMock: Channel = {
    id: "1",
    name: "Test channel",
    number: "3",
    image: "https://www.testimage.com/assets/image.png",
    events: [
        channelEventMock
    ]
}

export const programGuideMock: ProgramGuide = {
    from: new Date(2024, 6, 25, 14, 0, 0),
    end: new Date(2024, 6, 25, 23, 59, 59),
    channels: [
        channelMock
    ]
}