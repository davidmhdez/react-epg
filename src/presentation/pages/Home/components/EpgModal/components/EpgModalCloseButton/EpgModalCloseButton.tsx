import {useContext} from 'react';
import {StyledEpgModalCloseButton} from "./styles.ts";
import ModalContext from "../../../../../../context/ModalContext/ModalContext.ts";
import CloseIcon from "../../../../../../components/icons/CloseIcon.tsx";

const EpgModalCloseButton = () => {
    const { closeModal } = useContext(ModalContext)

    return (
        <StyledEpgModalCloseButton onClick={closeModal}>
            <CloseIcon/>
        </StyledEpgModalCloseButton>
    );
};

export default EpgModalCloseButton;
