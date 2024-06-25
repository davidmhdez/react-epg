import React from 'react';
import Channel from "../../../../../../../../../domain/entity/Channel.ts";
import {EpgChannelEventList, EpgChannelEventRowWrapper} from "./styles.ts";
import EpgChannelEventCol from "./components/EpgChannelEventCol";
import {getDimensions} from "../../../../helpers.ts";
import ChannelCard from "./components/ChannelCard";

type Props = {
    channel: Channel
    programGuideBegin: Date
    maxWidth: number
}

const EpgChannelEventRow: React.FC<Props> = ({channel, programGuideBegin, maxWidth}) => {
    return (
        <EpgChannelEventRowWrapper>
            <ChannelCard
                channel={channel}
            />
            <EpgChannelEventList $maxWidth={maxWidth}>
                {channel.events.map((channelEvent, index) => {
                    const { width, position } = getDimensions(programGuideBegin, channelEvent.dateBegin, channelEvent.durationInMinutes)

                    return(
                        <EpgChannelEventCol
                            channelEvent={channelEvent}
                            key={channelEvent.id}
                            position={position}
                            width={width}
                            index={index}
                        />
                    )
                })}
            </EpgChannelEventList>
        </EpgChannelEventRowWrapper>
    );
};

export default EpgChannelEventRow;
