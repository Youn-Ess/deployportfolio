import * as React from "react";
import { Home } from './pages/Home/home.jsx';
import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Errors/error.jsx';
import { Contact } from "./pages/Contact/contact.jsx";
import { ContextProvider } from "./utils/ContextProvider.jsx";




function App() {
    return (
        <>

            <ContextProvider>
                <Routes>
                    <Route path='*' element={<Error />} />
                    <Route path='/deployportfolio' element={<Home />} />
                    <Route path='/deployportfolio/contact' element={<Contact />} />
                </Routes>
            </ContextProvider>
        </>
    );
}

export default App;
