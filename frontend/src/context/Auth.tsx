import React, { createContext, useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { error } from '../components/Toast';
import api from '../services/api';
import handleSignIn from '../services/signIn';

interface AuthState {
    token: string;
    user: {
        name: string;
    };
}

interface SignInCredentials {
    email: string;
    password: string;
}

export interface AuthContextData {
    user: {
        name: string;
    };
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    signed: boolean;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

const AuthProvider: React.FC = ({ children }) => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@UserRegister:token');
        const user = localStorage.getItem('@UserRegister:user');

        if (token && user) {
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            setLoading(false);
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

    const signIn = useCallback(
        async ({ email, password }) => {
            const { token, user } = await handleSignIn({ email, password });

            localStorage.setItem('@UserRegister:token', token);
            localStorage.setItem('@UserRegister:user', JSON.stringify(user));
            api.defaults.headers.common.Authorization = `Bearer ${token}`;

            setLoading(false);
            setData({ token, user });
            history.push('/');
        },
        [history]
    );

    const signOut = useCallback(() => {
        localStorage.removeItem('@UserRegister:token');
        localStorage.removeItem('@UserRegister:user');
        api.defaults.headers.common.Authorization = '';

        setData({} as AuthState);
        history.push('/');
    }, [history]);

    useEffect(() => {
        const authInterceptor = api.interceptors.response.use(
            async (response) => response,
            async (err) => {
                const { status } = err.response;

                if (status === 401) {
                    signOut();
                    error({
                        message: 'Sua sessão expirou!',
                        body: 'Por favor, realize o login novamente',
                    });
                    return Promise.reject(err);
                }

                if (process.env.NODE_ENV === 'development') {
                    // eslint-disable-next-line no-console
                    console.log(err.response);
                }

                return err;
            }
        );

        return () => {
            api.interceptors.response.eject(authInterceptor);
        };
    }, [signOut]);

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                user: data.user,
                signed: !!data.user,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
