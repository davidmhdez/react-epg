import {createContext} from "react";
import {ChannelEvent} from "../../../domain/entity/Channel.ts";

type ModalContextValues = {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
    selectedChannelEvent: ChannelEvent | null
    selectChannelEvent: (channelEvent: ChannelEvent) => void
}

export const initialModalContextValues = {
    isOpen: false,
    selectedChannelEvent: null,
    closeModal: () => {},
    openModal: () => {},
    selectChannelEvent: () => {},
}

const ModalContext = createContext<ModalContextValues>(initialModalContextValues)

export default ModalContext