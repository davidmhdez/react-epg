import {HomeWrapper} from "./styles.ts";
import Button from "../../components/Button";
import {useContext} from "react";
import ModalContext from "../../context/ModalContext/ModalContext.ts";
import EpgModal from "./components/EpgModal";

const Home = () => {
    const { isOpen, openModal } = useContext(ModalContext);
    return (
        <HomeWrapper>
            <Button onClick={openModal}>Mostrar EPG</Button>
            {isOpen && <EpgModal/>}
        </HomeWrapper>
    );
};

export default Home;
