import {createContext} from "react";
import {ChannelEvent} from "../../../domain/entity/Channel.ts";

type ModalContextValues = {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
    selectedChannelEvent: ChannelEvent | null
    selectChannelEvent: (channelEvent: ChannelEvent) => void
}


const ModalContext = createContext<ModalContextValues>({
    isOpen: false,
    selectedChannelEvent: null,
    closeModal: () => {},
    openModal: () => {},
    selectChannelEvent: () => {},
})

export default ModalContext