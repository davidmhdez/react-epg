import React from 'react';
import Channel from "../../../../../../../../../../../domain/entity/Channel.ts";
import {ChannelCardContent, ChannelCardImage, ChannelCardNumber, ChannelCardWrapper} from "./styles.ts";

type Props = {
    channel: Channel
}

const ChannelCard: React.FC<Props> = ({channel}) => {
    return (
        <ChannelCardWrapper>
            <ChannelCardContent>
                <ChannelCardNumber>{channel.number}</ChannelCardNumber>
                <ChannelCardImage src={channel.image} alt={`${channel.name} logo`} />
            </ChannelCardContent>
        </ChannelCardWrapper>
    );
};

export default ChannelCard;
