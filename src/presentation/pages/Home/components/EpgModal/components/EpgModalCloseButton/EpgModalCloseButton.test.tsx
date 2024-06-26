import {fireEvent, render, screen} from "@testing-library/react";
import EpgModalCloseButton from "./EpgModalCloseButton.tsx";
import ModalContext, {initialModalContextValues} from "../../../../../../context/ModalContext/ModalContext.ts";

describe('EpgModalCloseButton test', () => {
    test('should match with snapshot', () => {
        const { container } = render(<EpgModalCloseButton/>);
        expect(container).toMatchSnapshot();
    })

    test('should call closeModal() when click button', ()=>{
        const mockCloseModal = jest.fn();

        render(
            <ModalContext.Provider value={{
                ...initialModalContextValues,
                closeModal: mockCloseModal,
            }}>
                <EpgModalCloseButton/>
            </ModalContext.Provider>
        )

        const button = screen.getByRole('button');
        expect(button).toBeTruthy()
        fireEvent.click(button)
        expect(mockCloseModal).toHaveBeenCalledTimes(1);
    });
})