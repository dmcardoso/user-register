import { useContext } from 'react';

import { AppContextData, AppContext } from '../context/App';

export default function useApp(): AppContextData {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useApp must be used within a AppProvider');
    }

    return context;
}
