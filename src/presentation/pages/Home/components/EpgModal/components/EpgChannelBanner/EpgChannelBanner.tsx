import {
    EpgChannelBannerDescription,
    EpgChannelBannerSubtitle,
    EpgChannelBannerTitle,
    EpgChannelBannerWrapper
} from "./styles.ts";
import {useContext} from "react";
import ModalContext from "../../../../../../context/ModalContext/ModalContext.ts";
import formatBannerDescription from "./formatBannerDescription.ts";
import {formatTime} from "../../helpers.ts";

const EpgChannelBanner = () => {
    const { selectedChannelEvent } = useContext(ModalContext);

    return (
        <EpgChannelBannerWrapper>
            {selectedChannelEvent
                &&
                <>
                    <EpgChannelBannerTitle>{selectedChannelEvent.name}</EpgChannelBannerTitle>
                    <EpgChannelBannerSubtitle>{`${formatTime(selectedChannelEvent.dateBegin)}hrs a ${formatTime(selectedChannelEvent.dateEnd)}hrs  ${formatBannerDescription(selectedChannelEvent.duration)}`}</EpgChannelBannerSubtitle>
                    <EpgChannelBannerDescription>{selectedChannelEvent.description}</EpgChannelBannerDescription>
                </>
            }
        </EpgChannelBannerWrapper>
    );
};

export default EpgChannelBanner;
