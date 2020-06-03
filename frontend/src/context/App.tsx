import React, { createContext } from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from '../styles/themes/light';

export interface AppContextData {
    theme: DefaultTheme;
}

export const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
    return (
        <AppContext.Provider value={{ theme: light }}>
            <ThemeProvider theme={light}>{children}</ThemeProvider>
        </AppContext.Provider>
    );
};

export default AppProvider;
