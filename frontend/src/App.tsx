import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ContextProvider from './context';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ContextProvider>
                <GlobalStyle />
                <Routes />
            </ContextProvider>
        </BrowserRouter>
    );
};

export default App;
