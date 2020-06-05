import api from './api';

interface SignInData {
    user: {
        name: string;
    };
    token: string;
}
interface Credentials {
    email: string;
    password: string;
}

export default async function signIn({
    email,
    password,
}: Credentials): Promise<SignInData> {
    const response = await api.post('/sessions', { email, password });

    const { token, user } = response.data;

    return { token, user };
}
