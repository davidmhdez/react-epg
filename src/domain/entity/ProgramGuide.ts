import Channel from "./Channel.ts";

type ProgramGuide = {
    from: Date
    end: Date
    channels: Channel[]
}

export default ProgramGuide