import React, {useContext} from 'react';
import {ChannelEvent} from "../../../../../../../../../../../domain/entity/Channel.ts";
import {EpgChannelEventColWrapper, EpgChannelEventRowDuration, EpgChannelEventRowTitle} from "./styles.ts";
import {formatTimeRange} from "../../../../../../helpers.ts";
import ModalContext from "../../../../../../../../../../context/ModalContext/ModalContext.ts";

type Props = {
    channelEvent: ChannelEvent
    width: number
    position: number
    index: number
}

const EpgChannelEventCol: React.FC<Props> = ({channelEvent, width, position, index}) => {
    const timeRange = formatTimeRange(channelEvent.dateBegin, channelEvent.dateEnd)
    const { selectChannelEvent } = useContext(ModalContext);

    return (
        <EpgChannelEventColWrapper
            $width={width}
            $position={position}
            $enableLeftBorder={index === 0 && position > 0}
            onMouseEnter={()=> selectChannelEvent(channelEvent)}
            data-testid={channelEvent.id}
        >
            <EpgChannelEventRowTitle title={channelEvent.name}>{channelEvent.name}</EpgChannelEventRowTitle>
            <EpgChannelEventRowDuration title={timeRange}>{timeRange}</EpgChannelEventRowDuration>
        </EpgChannelEventColWrapper>
    );
};

export default EpgChannelEventCol;
