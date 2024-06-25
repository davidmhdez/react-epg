import ModalContextProvider from "./presentation/context/ModalContext/ModalContextProvider.tsx";
import Home from "./presentation/pages/Home";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import 'react-loading-skeleton/dist/skeleton.css'


function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ModalContextProvider>
                <Home/>
            </ModalContextProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default App
