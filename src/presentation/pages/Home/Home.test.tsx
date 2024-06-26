import {fireEvent, render, screen} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "react-query";
import ModalContextProvider from "../../context/ModalContext/ModalContextProvider.tsx";
import Home from "./Home.tsx";
import "@testing-library/jest-dom"

describe('Home test', () => {

    beforeEach(()=>{
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <ModalContextProvider>
                    <Home/>
                </ModalContextProvider>
            </QueryClientProvider>
        )
    })

    test('Should open modal when click main button', async () => {
        const mainButton = screen.getByRole('button', { name: 'Mostrar EPG' })
        fireEvent.click(mainButton);
        expect(screen.getByTestId('epgModal')).toBeInTheDocument()
    })

    test('Should close modal when click close button', async () => {
        const mainButton = screen.getByRole('button', { name: 'Mostrar EPG' })
        fireEvent.click(mainButton);
        expect(screen.getByTestId('epgModal')).toBeInTheDocument()

        const closeButton = screen.getByTestId('closeModalButton')
        fireEvent.click(closeButton);
        expect(screen.queryByTestId('epgModal')).not.toBeInTheDocument();
        screen.debug()
    })
})