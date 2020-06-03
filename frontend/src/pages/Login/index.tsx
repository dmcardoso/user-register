import React from 'react';

import facebook from '../../assets/facebook.svg';
import google from '../../assets/google.svg';
import linkedin from '../../assets/linkedin.svg';
import logo from '../../assets/logo.png';
import tweeter from '../../assets/tweeter.svg';
import FillButton from '../../components/FillButton';
import FillInput from '../../components/FormComponents/FillInput';
import OutlineButton from '../../components/OutlineButton';
import { Container } from './styles';

const Login: React.FC = () => {
    return (
        <Container>
            <img src={logo} alt="Logo" />
            <form>
                <FillInput name="login" placeholder="Login" label="Login" />
                <FillInput
                    name="password"
                    placeholder="Senha"
                    type="password"
                    label="Senha"
                />
                <FillButton>Login</FillButton>
            </form>
            <a href="/#">ESQUECI MINHA SENHA ❯</a>
            <p>Faça seu login usando</p>
            <nav>
                <img src={facebook} alt="Facebook" />
                <img src={tweeter} alt="Tweeter" />
                <img src={linkedin} alt="LinkedIn" />
                <img src={google} alt="Google" />
            </nav>
            <OutlineButton>NÃO TENHO LOGIN</OutlineButton>
            <a href="/#">CENTRAL DE AJUDA</a>
        </Container>
    );
};

export default Login;
