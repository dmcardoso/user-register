import React from 'react';

import AppProvider from './context/App';
import Default from './layouts/Default';
import Login from './pages/Login';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
    return (
        <AppProvider>
            <GlobalStyle />
            <Default>
                <Login />
            </Default>
        </AppProvider>
    );
};

export default App;
