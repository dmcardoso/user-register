import React from 'react';

import useAuth from '../../hooks/useAuth';

const Home: React.FC = () => {
    const { user } = useAuth();
    return <div>Bem vindo {user.name}!</div>;
};

export default Home;
