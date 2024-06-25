import React, {ReactNode, useState} from "react";
import ModalContext from "./ModalContext.ts";
import {ChannelEvent} from "../../../domain/entity/Channel.ts";

type Props = {
    children: ReactNode
}

const ModalContextProvider: React.FC<Props> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedChannelEvent, setSelectedChannelEvent] = useState<ChannelEvent | null>(null)
    const openModal = () => {
        setIsOpen(true);
        setSelectedChannelEvent(null);
    }
    const closeModal = () => {
        setIsOpen(false);
        setSelectedChannelEvent(null);
    }

    const selectChannelEvent = (channelEvent: ChannelEvent) => setSelectedChannelEvent(channelEvent);

    return (
        <ModalContext.Provider value={{
            isOpen,
            selectedChannelEvent,
            selectChannelEvent,
            openModal,
            closeModal
        }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;
