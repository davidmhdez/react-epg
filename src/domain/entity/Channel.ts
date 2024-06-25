type Channel = {
    id: string
    name: string
    number: string
    image: string
    events: ChannelEvent[]
}

export type ChannelEvent = {
    id: string
    name: string
    description: string
    dateBegin: Date
    dateEnd: Date
    durationInMinutes: number
    duration: string
}

export default Channel