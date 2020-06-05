import React from 'react';

import AppProvider from './App';
import AuthProvider from './Auth';

const ContextProvider: React.FC = ({ children }) => {
    return (
        <AppProvider>
            <AuthProvider>{children}</AuthProvider>
        </AppProvider>
    );
};

export default ContextProvider;
